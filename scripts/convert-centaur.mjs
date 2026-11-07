import { createRequire } from 'node:module';
import { readFile } from 'node:fs/promises';
import { Document, NodeIO } from '@gltf-transform/core';

const require = createRequire(import.meta.url);
const createOcct = require('occt-import-js');
const [inputPath, outputPath] = process.argv.slice(2);

if (!inputPath || !outputPath) {
  throw new Error('Usage: npm run convert:centaur -- <input.step> <output.glb>');
}

const occt = await createOcct();
const content = await readFile(inputPath);
const result = occt.ReadStepFile(new Uint8Array(content), {
  linearUnit: 'millimeter',
  linearDeflectionType: 'bounding_box_ratio',
  linearDeflection: 0.002,
  angularDeflection: 0.35
});

if (!result.success || !result.meshes.length) {
  throw new Error('The STEP file could not be converted to visible Centaur geometry.');
}

const totalVertices = result.meshes.reduce(
  (count, mesh) => count + mesh.attributes.position.array.length / 3,
  0
);
const totalIndices = result.meshes.reduce((count, mesh) => count + mesh.index.array.length, 0);
const positions = new Float32Array(totalVertices * 3);
const normals = new Float32Array(totalVertices * 3);
const indices = new Uint32Array(totalIndices);
let vertexOffset = 0;
let indexOffset = 0;

for (const mesh of result.meshes) {
  const meshPositions = mesh.attributes.position.array;
  const meshNormals = mesh.attributes.normal?.array;
  const meshIndices = mesh.index.array;

  if (!meshNormals || meshNormals.length !== meshPositions.length) {
    throw new Error(`Missing or invalid normals in Centaur part "${mesh.name}".`);
  }

  positions.set(meshPositions, vertexOffset * 3);
  normals.set(meshNormals, vertexOffset * 3);
  for (let index = 0; index < meshIndices.length; index += 1) {
    indices[indexOffset + index] = meshIndices[index] + vertexOffset;
  }

  vertexOffset += meshPositions.length / 3;
  indexOffset += meshIndices.length;
}

const document = new Document();
const buffer = document.createBuffer('Centaur');
const position = document.createAccessor('Centaur positions').setType('VEC3').setArray(positions).setBuffer(buffer);
const normal = document.createAccessor('Centaur normals').setType('VEC3').setArray(normals).setBuffer(buffer);
const index = document.createAccessor('Centaur indices').setType('SCALAR').setArray(indices).setBuffer(buffer);
const material = document.createMaterial('Centaur silver')
  .setBaseColorFactor([0.6, 0.6, 0.6, 1])
  .setMetallicFactor(0)
  .setRoughnessFactor(1);
const primitive = document.createPrimitive()
  .setAttribute('POSITION', position)
  .setAttribute('NORMAL', normal)
  .setIndices(index)
  .setMaterial(material);
const mesh = document.createMesh('Centaur CAD').addPrimitive(primitive);
const node = document.createNode('Centaur').setMesh(mesh);
const scene = document.createScene('Centaur');
scene.addChild(node);
document.getRoot().setDefaultScene(scene);

await new NodeIO().write(outputPath, document);
console.log(`Converted ${result.meshes.length} STEP parts into one model with ${Math.floor(totalIndices / 3).toLocaleString()} triangles.`);
