/* eslint-disable */
import THREE from '../lib/threeLegacy';
import { cl, CALM, sst } from '../lib/motion';
import { PR } from '../data/showcase';
import { specRows } from '../lib/specs';

export default function showcase() {
  if (window.__eng_showcase) return;
  window.__eng_showcase = 1;
const gl=document.getElementById('gl'),R=new THREE.WebGLRenderer({canvas:gl,alpha:true,antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(38,1,.1,100);C.position.set(5.2,3.4,6);C.lookAt(0,.9,0);
S.add(new THREE.AmbientLight(0xffffff,.45));const dl=new THREE.DirectionalLight(0xffffff,1.1);dl.position.set(4,6,3);S.add(dl);
const grid=new THREE.GridHelper(14,28,0xff6a2b,0x2b323d);S.add(grid);
const M1=new THREE.MeshStandardMaterial({color:0x3b4048,roughness:.55,metalness:.5}),M2=new THREE.MeshStandardMaterial({color:0x8d8d93,roughness:.45,metalness:.6}),EM=new THREE.LineBasicMaterial({color:0xff8a55,transparent:true,opacity:.75});
function add(g,geo,x,y,z,m,rx,rz){const o=new THREE.Mesh(geo,m);o.position.set(x,y,z);if(rx)o.rotation.x=rx;if(rz)o.rotation.z=rz;g.add(o);const e=new THREE.LineSegments(new THREE.EdgesGeometry(geo,30),EM);e.position.copy(o.position);e.rotation.copy(o.rotation);g.add(e)}
const bx=(g,w,h,d,x,y,z,m=M1)=>add(g,new THREE.BoxGeometry(w,h,d),x,y,z,m);
const wh=(g,r,w,x,y,z)=>add(g,new THREE.CylinderGeometry(r,r,w,28),x,y,z,M1,Math.PI/2);
function rover(four){const g=new THREE.Group();bx(g,2.3,.5,1.5,0,.75,0);bx(g,1.9,.1,1.2,0,1.05,0,M2);bx(g,.9,.45,.8,-.3,1.3,0);bx(g,.08,1.3,.08,-.75,1.75,0,M2);add(g,new THREE.CylinderGeometry(.24,.24,.2,24),-.75,2.45,0,M2);bx(g,.18,.14,.5,.9,1.28,0,M2);
if(four){[[-.8,.8],[-.8,-.8],[.8,.8],[.8,-.8]].forEach(([x,z])=>wh(g,.42,.3,x,.42,z*1.05));bx(g,.1,.9,.1,.9,1.6,0,M2)}else{wh(g,.42,.3,.5,.42,.9);wh(g,.42,.3,.5,.42,-.9);wh(g,.2,.2,-.95,.2,0)}return g}
function drone(){const g=new THREE.Group();g.position.y=.6;bx(g,.9,.22,.9,0,1,0);bx(g,3,.06,.14,0,1,0,M2);bx(g,.14,.06,3,0,1,0,M2);[[1.4,0],[-1.4,0],[0,1.4],[0,-1.4]].forEach(([x,z])=>{add(g,new THREE.CylinderGeometry(.5,.5,.03,28),x,1.1,z,M2)});return g}
const MD=[rover(false),rover(true),drone()];MD.forEach(m=>{m.position.x=-1.4;S.add(m)});
function rz(){const k=document.querySelector('#show .stick'),w=k.clientWidth||innerWidth,h=k.clientHeight||innerHeight;R.setSize(w,h,false);C.aspect=w/h;C.position.set(w<800?7:5.2,w<800?4.4:3.4,w<800?8:6);C.lookAt(w<800?0:0,.9,0);C.updateProjectionMatrix()}rz();addEventListener('resize',rz);
const stk=document.querySelector('#show .stick'),sh=document.getElementById('show'),pn=document.getElementById('pn'),rb=[...document.querySelectorAll('#rail b')];let cur=-1,pp=0;
function setP(i){cur=i;const p=PR[i];document.getElementById('lab').textContent=`Scroll to rotate · ${i+1} / 3 projects · illustrative models`;pk.textContent=p.k;pt.textContent=p.t;pd.textContent=p.d;ps.innerHTML=specRows(p.s);MD.forEach((m,j)=>m.visible=j===i)}
let lt=0,ee=0,le=-1;
(function loop(t){const dt=Math.min(.05,Math.max(.001,(t-lt)/1000||.016));lt=t;
const r=sh.getBoundingClientRect();const p=cl((84-r.top)/(r.height-stk.offsetHeight),0,.9999);
pp+=(p-pp)*(CALM?1:1-Math.exp(-dt*5));const i=Math.floor(pp*3),l=pp*3-i;if(i!==cur)setP(i);
// the stage only fades/rises in once the landing screen has been scrolled past
const rvl=CALM?1:cl((innerHeight*.9-r.top)/(innerHeight*.45),0,1);ee+=(rvl-ee)*(CALM?1:1-Math.exp(-dt*10));if(Math.abs(rvl-ee)<.0008)ee=rvl;
const e=sst(ee);if(e!==le){le=e;if(e>=1){stk.style.opacity='';stk.style.transform=''}else{stk.style.opacity=e.toFixed(3);stk.style.transform=`translate3d(0,${((1-e)*44).toFixed(1)}px,0) scale(${(.97+.03*e).toFixed(4)})`}}
// first and last project hold full strength at the ends of the runway; only the hand-offs fade
const o=sst(cl(Math.min(i===0?1:l/.22,i===2?1:(1-l)/.22),0,1));pn.style.opacity=o;MD[i].scale.setScalar(Math.max(.001,o));pn.style.transform=`translateY(calc(-50% + ${(1-o)*26}px))`;rb.forEach((b,j)=>b.style.setProperty('--f',(j<i?100:j===i?l*100:0)+'%'));
MD[i].rotation.y=pp*Math.PI*5+t*.00012;MD[i].position.y=.06*Math.sin(t*.001);if(r.bottom>0&&r.top<innerHeight)R.render(S,C);requestAnimationFrame(loop)})(0);
}
