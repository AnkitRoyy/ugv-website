/* eslint-disable */
import THREE from '../lib/threeLegacy';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export default function heroUgv() {
  if (window.__eng_heroUgv) return;
  window.__eng_heroUgv = 1;
(function(){
const root=document.getElementById('heroUgv'),cv=document.getElementById('ugvCv'),tagBox=document.getElementById('ugvTags');
if(!root)return;
const T=THREE,calm=matchMedia('(prefers-reduced-motion:reduce)').matches,cl=(v,a,b)=>Math.min(b,Math.max(a,v)),hero=root.closest('.hero');
const R=new T.WebGLRenderer({canvas:cv,alpha:true,antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,1.25));
const S=new T.Scene(),C=new T.PerspectiveCamera(32,1,.1,80);
const pmrem=new T.PMREMGenerator(R);S.environment=pmrem.fromScene(new RoomEnvironment(),.04).texture;pmrem.dispose();
S.add(new T.AmbientLight(0xffffff,.6));
const kl=new T.DirectionalLight(0xffffff,1.1);kl.position.set(4,8,5);S.add(kl);
const rl=new T.DirectionalLight(0x7c9cff,.55);rl.position.set(-6,3,-5);S.add(rl);
const car=new T.Group();S.add(car);const parts=[],wheelPivots=[],HOME=new T.Vector3(0,1.15,0);
let lidar=null,TG=[];
new GLTFLoader().load('/avni.glb',gltf=>{
 const model=gltf.scene,bounds=new T.Box3().setFromObject(model),size=bounds.getSize(new T.Vector3()),center=bounds.getCenter(new T.Vector3());
 const largest=Math.max(size.x,size.y,size.z);
 if(!largest){console.error('Avni CAD model has no visible geometry.');return}
 const scale=3/(size.y||largest);
 model.scale.setScalar(scale);
 model.position.set(-center.x*scale,-bounds.min.y*scale,-center.z*scale);
 car.add(model);
 model.updateMatrixWorld(true);
 const dimensions=size.multiplyScalar(scale),modelCenter=new T.Vector3(0,dimensions.y/2,0);
 const meshes=[];
 model.traverse(node=>{
  if(!node.isMesh)return;
  const box=new T.Box3().setFromObject(node),meshCenter=box.getCenter(new T.Vector3()),meshSize=box.getSize(new T.Vector3());
  meshes.push({node,box,center:meshCenter,size:meshSize});
 });
 const tires=meshes.filter(({center:meshCenter,size:meshSize})=>{
  const axle=Math.min(meshSize.x,meshSize.y,meshSize.z),diameters=[meshSize.x,meshSize.y,meshSize.z].sort((a,b)=>a-b);
  return axle>largest*scale*.06&&axle<largest*scale*.12
   &&diameters[2]>largest*scale*.14&&Math.abs(diameters[1]-diameters[2])<diameters[2]*.15
   &&meshCenter.y<dimensions.y*.5;
 });
 const wheelParts=new Set();
 tires.forEach(({node,box,center:wheelCenter,size:wheelSize})=>{
  const radius=(wheelSize.y+wheelSize.z)/4,pivot=new T.Group();
  pivot.position.copy(wheelCenter);car.add(pivot);pivot.attach(node);wheelParts.add(node);
  wheelPivots.push({pivot,radius});
  meshes.forEach(({node:part,center:partCenter})=>{
   if(wheelParts.has(part))return;
   const radial=Math.hypot(partCenter.y-wheelCenter.y,partCenter.z-wheelCenter.z);
   if(Math.abs(partCenter.x-wheelCenter.x)<wheelSize.x*1.5&&radial<radius*1.15){
    pivot.attach(part);wheelParts.add(part);
   }
  });
 });
 meshes.forEach(({node,size:meshSize})=>{
  const isTire=wheelParts.has(node);
  const relativeSize=Math.max(meshSize.x,meshSize.y,meshSize.z)/largest*scale;
  const shade=relativeSize>.35 ? .92 : relativeSize>.14 ? 1 : 1.06;
  const partColor=isTire?0x303943:relativeSize>.35?0x414b57:relativeSize>.14?0x697786:0x9aa6b2;
  const materials=Array.isArray(node.material)?node.material:[node.material];
  const metallicMaterials=materials.map(source=>{
   const material=source.clone();
   material.vertexColors=false;
   if(material.color)material.color.set(partColor).multiplyScalar(shade);
   if('metalness' in material)material.metalness=.88;
   if('roughness' in material)material.roughness=.24;
   if('envMapIntensity' in material)material.envMapIntensity=1.4;
   if(material.emissive)material.emissive.set(0x000000);
   return material;
  });
  node.material=Array.isArray(node.material)?metallicMaterials:metallicMaterials[0];
 });
 meshes.forEach(({node})=>{
  const box=new T.Box3().setFromObject(node),meshCenter=box.getCenter(new T.Vector3());
  const direction=meshCenter.sub(modelCenter);
  if(direction.lengthSq()<.0001)direction.set(0,1,0);
  direction.normalize().multiplyScalar(.45);
  const target=box.getCenter(new T.Vector3()).add(direction);
  node.userData.b=node.position.clone();
  node.userData.d=node.parent.worldToLocal(target).sub(node.position);
  parts.push(node);
 });
 const anchor=(x,y,z)=>{const point=new T.Group();point.position.set(x,y,z);car.add(point);return point};
 lidar=anchor(0,dimensions.y*.9,dimensions.z*.08);
 const cam=anchor(-dimensions.x*.25,dimensions.y*.98,-dimensions.z*.23);
 const gps=anchor(-dimensions.x*.2,dimensions.y*.9,-dimensions.z*.38);
 const ant=anchor(dimensions.x*.2,dimensions.y*.78,-dimensions.z*.42);
 HOME.set(0,dimensions.y*.48,0);gT.copy(HOME);tg.copy(HOME);
 const tagInfo=[['LiDAR',lidar,[0,.12,0]],['Depth camera',cam,[0,.08,.08]],['RTK GPS',gps,[0,.06,0]],['LoRa e-stop',ant,[0,.18,0]]];
 TG=tagInfo.map(([name,object,offset])=>{
  const button=document.createElement('button');button.type='button';button.className='ugv-tag';button.innerHTML='<i></i>'+name;tagBox.appendChild(button);
  const tag={n:name,o:object,off:new T.Vector3(...offset),b:button,s:1,w:0};
  button.addEventListener('click',()=>{used();setFocus(focus===tag?null:tag)});
  button.addEventListener('pointerenter',()=>tag.h=1);
  button.addEventListener('pointerleave',()=>tag.h=0);
  return tag;
 });
},undefined,error=>console.error('Could not load Avni CAD model in the hero.',error));
// ground: grid (recoloured per theme) + platform ring
const gnd=new T.Group();S.add(gnd);const grid=new T.GridHelper(14,28);gnd.add(grid);
function mkGrid(light){const colors=grid.geometry.attributes.color,primary=new T.Color(light?0xd9480f:0xff6a2b),secondary=new T.Color(light?0x9aa3b5:0x2b323d);for(let i=0;i<=28;i++){const color=i===14?primary:secondary;for(let j=i*4;j<i*4+4;j++)colors.setXYZ(j,color.r,color.g,color.b)}colors.needsUpdate=true;grid.material.transparent=true;grid.material.opacity=light?.75:.85}
mkGrid(document.documentElement.getAttribute('data-theme')==='light');
new MutationObserver(()=>mkGrid(document.documentElement.getAttribute('data-theme')==='light')).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
const plat=new T.Mesh(new T.RingGeometry(2.55,2.58,96),new T.MeshBasicMaterial({color:0xff6a2b,transparent:true,opacity:.55,side:T.DoubleSide}));plat.rotation.x=-Math.PI/2;plat.position.y=.01;S.add(plat);
// lidar scan: point cloud that lights up as range rings pass + sweeping laser
const scanG=new T.Group();S.add(scanG);
const NP=180,pp=new Float32Array(NP*3),pc=new Float32Array(NP*3),lit=new Float32Array(NP);
for(let i=0;i<NP;i++){const a=Math.random()*6.283,r=1.9+Math.sqrt(Math.random())*3.6;pp.set([Math.cos(a)*r,Math.random()<.1?Math.random()*.7:.03,Math.sin(a)*r],i*3)}
const pg=new T.BufferGeometry();pg.setAttribute('position',new T.BufferAttribute(pp,3));pg.setAttribute('color',new T.BufferAttribute(pc,3));
scanG.add(new T.Points(pg,new T.PointsMaterial({size:.075,vertexColors:true,transparent:true,opacity:.95,depthWrite:false})));
const rings=[0,.5].map(()=>{const m=new T.Mesh(new T.RingGeometry(.985,1,96),new T.MeshBasicMaterial({color:0xff6a2b,transparent:true,side:T.DoubleSide,depthWrite:false}));m.rotation.x=-Math.PI/2;m.position.y=.03;scanG.add(m);return m});
const bg=new T.BufferGeometry();bg.setAttribute('position',new T.BufferAttribute(new Float32Array(6),3));
const beam=new T.Line(bg,new T.LineBasicMaterial({color:0xff8a55,transparent:true,opacity:.85}));beam.frustumCulled=false;scanG.add(beam);
// state
const st={scan:!calm,drive:!calm,exp:false},V=new T.Vector3();
let yaw=.62,pit=.34,rad=9.5,fit=1,tg=HOME.clone(),gT=HOME.clone(),gR=9.5,focus=null,e=1,lastEs=-1,spd=0,gz=0,vy=0,idle=0,t=0,W=1,H=1,drag=null,last=0,vis=true,raf=0;
const ctl=[...root.querySelectorAll('.ugv-ctl button')],sync=()=>ctl.forEach(b=>b.classList.toggle('on',!!st[b.dataset.m]));sync();
const used=()=>{root.classList.add('used');idle=0};
function setFocus(x){focus=x;TG.forEach(g=>g.b.classList.toggle('on',g===x));if(x){x.o.localToWorld(gT.set(0,0,0));gR=4.8}else{gT.copy(HOME);gR=9.5}}
ctl.forEach(b=>b.addEventListener('click',()=>{used();const m=b.dataset.m;if(m==='reset'){setFocus(null);yaw=.62;pit=.34;vy=0}else{st[m]=!st[m];sync()}}));
cv.addEventListener('pointerdown',ev=>{drag={x:ev.clientX,y:ev.clientY};vy=0;used();cv.setPointerCapture(ev.pointerId);root.classList.add('drag')});
cv.addEventListener('pointermove',ev=>{if(!drag)return;const dx=ev.clientX-drag.x,dy=ev.clientY-drag.y;drag.x=ev.clientX;drag.y=ev.clientY;yaw-=dx*.008;pit=cl(pit+dy*.006,.1,1.25);vy=vy*.6-dx*.008*40*.4;idle=0});
const up=()=>{drag=null;root.classList.remove('drag')};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
cv.addEventListener('keydown',ev=>{if(ev.key==='ArrowLeft'){yaw+=.15;used()}else if(ev.key==='ArrowRight'){yaw-=.15;used()}});
function size(){W=root.clientWidth||1;H=root.clientHeight||1;R.setSize(W,H,false);C.aspect=W/H;C.updateProjectionMatrix();fit=Math.max(1,1.05/C.aspect)}
size();new ResizeObserver(size).observe(root);
new IntersectionObserver(es=>{vis=es[0].isIntersecting;if(vis&&!raf)raf=requestAnimationFrame(frame)},{rootMargin:'80px'}).observe(root);
function frame(ms){raf=0;if(!vis)return;const dt=Math.min(.05,(ms-last)/1000||.016);last=ms;t+=dt;idle+=dt;
 // assemble once the hero reveals, then follow the Explode toggle
 const eT=calm?(st.exp?1:0):(hero.classList.contains('go')?(st.exp?1:0):1);e+=(eT-e)*(1-Math.exp(-dt*3));if(Math.abs(eT-e)<.001)e=eT;
 const es=e*e*(3-2*e);
 if(Math.abs(es-lastEs)>.001){parts.forEach(g=>g.position.copy(g.userData.b).addScaledVector(g.userData.d,es));lastEs=es}
 // orbit: inertia, then a slow idle spin
 if(!drag){yaw+=vy*dt;vy*=Math.exp(-dt*3);if(!calm&&!focus&&idle>2.2)yaw+=dt*.2*cl((idle-2.2)/1.5,0,1)}
 tg.lerp(gT,1-Math.exp(-dt*5));rad+=(gR*fit-rad)*(1-Math.exp(-dt*5));
 C.position.set(tg.x+Math.sin(yaw)*Math.cos(pit)*rad,tg.y+Math.sin(pit)*rad,tg.z+Math.cos(yaw)*Math.cos(pit)*rad);C.lookAt(tg);
 // drive: rotate the tires and scroll the ground without moving the chassis
 spd+=((st.drive?1.4:0)-spd)*(1-Math.exp(-dt*4));
 wheelPivots.forEach(({pivot,radius})=>{pivot.rotation.x+=spd*dt/radius});
 gz=(gz-spd*dt)%.5;grid.position.z=gz;
 // lidar scan
 scanG.visible=st.scan;if(st.scan){
  const f0=(t*.45)%1,f1=(t*.45+.5)%1,r0=1.2+f0*4.6,r1=1.2+f1*4.6;
  for(let i=0;i<rings.length;i++){const f=i===0?f0:f1,m=rings[i];m.scale.setScalar(1.2+f*4.6);m.material.opacity=.55*(1-f)*(1-f)}
  const dz=spd*.42*dt;
  for(let i=0;i<NP;i++){const j=i*3;pp[j+2]-=dz;let x=pp[j],z=pp[j+2];const lim=Math.sqrt(Math.max(.5,31-x*x));if(z<-lim)pp[j+2]=z=lim;
   const r=Math.hypot(x,z);if(Math.abs(r-r0)<.14||Math.abs(r-r1)<.14)lit[i]=1;lit[i]=Math.max(0,lit[i]-dt*.7);const k=lit[i];
   pc[j]=.45+.55*k;pc[j+1]=.5-.08*k;pc[j+2]=.62-.45*k}
  pg.attributes.position.needsUpdate=true;pg.attributes.color.needsUpdate=true;
  if(lidar){const a=t*2.2,bp=bg.attributes.position;lidar.getWorldPosition(V);bp.setXYZ(0,V.x,V.y,V.z);bp.setXYZ(1,Math.cos(a)*4.2,.02,Math.sin(a)*4.2);bp.needsUpdate=true}}
 TG.forEach(g=>{const s=g.h||g===focus?1.14:1;g.s+=(s-g.s)*(1-Math.exp(-dt*10));g.o.scale.setScalar(g.s)});
 R.render(S,C);
 // tags follow their parts
 TG.forEach(g=>{g.o.localToWorld(V.copy(g.off));V.project(C);if(!g.w)g.w=g.b.offsetWidth||90;
  const x=cl((V.x*.5+.5)*W+12,2,W-g.w-2),y=cl((.5-V.y*.5)*H-14,2,H-34);g.b.style.transform='translate('+x.toFixed(1)+'px,'+y.toFixed(1)+'px)'});
 raf=requestAnimationFrame(frame)}
raf=requestAnimationFrame(frame);
})();
}
