import { NodeIO } from '@gltf-transform/core';
import { normals, simplify, weld } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';

const [inputPath, outputPath, ratioValue = '0.25', errorValue = '0.005'] = process.argv.slice(2);
const ratio = Number(ratioValue);
const error = Number(errorValue);

if (!inputPath || !outputPath || !Number.isFinite(ratio) || ratio <= 0 || ratio >= 1 || !Number.isFinite(error) || error <= 0) {
  throw new Error('Usage: npm run optimize:valkyrie -- <input.glb> <output.glb> [ratio] [error]');
}

await MeshoptSimplifier.ready;

const io = new NodeIO();
const document = await io.read(inputPath);
const triangleCount = () => document.getRoot().listMeshes().reduce(
  (total, mesh) => total + mesh.listPrimitives().reduce((count, primitive) => {
    const indices = primitive.getIndices();
    const positions = primitive.getAttribute('POSITION');
    return count + Math.floor((indices?.getCount() ?? positions?.getCount() ?? 0) / 3);
  }, 0),
  0
);

const before = triangleCount();
for (const mesh of document.getRoot().listMeshes()) {
  for (const primitive of mesh.listPrimitives()) primitive.setAttribute('NORMAL', null);
}
await document.transform(weld(), simplify({
  simplifier: MeshoptSimplifier,
  ratio,
  error
}), normals());
const after = triangleCount();

if (!after || after >= before) {
  throw new Error(`Mesh simplification did not reduce geometry (${before} to ${after} triangles).`);
}

await io.write(outputPath, document);
console.log(`Reduced Valkyrie from ${before.toLocaleString()} to ${after.toLocaleString()} triangles.`);
