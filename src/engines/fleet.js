/* eslint-disable */
import { BOTS } from '../data/vehicles';
function cubePreview(){return `<div class="cube-scene" aria-label="Rotating placeholder CAD cube"><div class="cube">${['front','back','right','left','top','bottom'].map(face=>`<i class="cube-face ${face}"></i>`).join('')}</div></div>`;}
export function showBot(i){
  const b=BOTS[i],n=BOTS.length;
  document.getElementById('bot-k').textContent='Vehicle 0'+(i+1)+' — '+b.y;
  document.getElementById('bot-t').textContent=b.n;
  document.getElementById('bot-hero').innerHTML=cubePreview();
document.getElementById('bot-d').textContent=b.d;
  document.getElementById('bot-s').innerHTML=b.s.map(x=>`<div>${x}</div>`).join('');
  document.getElementById('bot-sw').innerHTML=BOTS.map((x,j)=>`<a href="#/bot/${j+1}" class="${j===i?'active':''}">0${j+1} ${x.n}</a>`).join('');
  document.getElementById('bot-prev').href='#/bot/'+(((i+n-1)%n)+1);
  document.getElementById('bot-next').href='#/bot/'+(((i+1)%n)+1);
}
export default function fleet() {
  if (window.__eng_fleet) return;
  window.__eng_fleet = 1;
(function(){
const N=BOTS.length,STEP=34,R=130,PITCH=72,PER=N*STEP;
const drum=document.getElementById('drum'),cyl=document.getElementById('drumCyl'),side=document.getElementById('rollSide'),info=document.getElementById('rInfo');
const wrap=a=>((a+PER/2)%PER+PER)%PER-PER/2;
cyl.style.transform='translateZ('+(-R)+'px)';
cyl.innerHTML=BOTS.map((b,i)=>`<a class="drum-row" href="#/bot/${i+1}" data-i="${i}" draggable="false"><span class="n">0${i+1}</span><span class="v">${b.n}</span><span class="y">${b.y}</span><span class="d">${b.s[0].replace(/^Drive — /,'')}</span><span class="a">↗</span></a>`).join('');
const rows=[...cyl.children];
let pos=2.4,target=0,sel=-1,raf=0,drag=null,suppress=false,started=false,lock=0,engaged=false;
const mod=k=>((k%N)+N)%N;
const near=i=>{let d=mod(i-mod(Math.round(target)));if(d>N/2)d-=N;return d};
function fill(i){const b=BOTS[i];info.innerHTML=String(i+1).padStart(2,'0')+' / '+String(N).padStart(2,'0')+'<span class="rhint"> · drag, click or ↑↓ to roll</span>';
 side.innerHTML=`<div class="bph">${cubePreview()}</div><div class="rs-body"><span class="mono">UGV platform · ${b.y}</span><h3>${b.n}</h3><div class="specs">${b.s.map(x=>`<div>${x}</div>`).join('')}</div><a class="btn p" href="#/bot/${i+1}">Open ${b.n} ↗</a></div>`}
function render(){
 rows.forEach((el,i)=>{const a=wrap((pos-i)*STEP);
  if(Math.abs(a)>80){el.style.visibility='hidden';el.classList.remove('on');return}
  el.style.visibility='visible';
  el.style.transform='rotateX('+a.toFixed(2)+'deg) translateZ('+R+'px)';
  const c=Math.cos(a*Math.PI/180);el.style.opacity=(.15+.85*c*c*c).toFixed(3);
  el.classList.toggle('on',Math.abs(a)<STEP/2)});
 const k=mod(Math.round(pos));if(k!==sel){sel=k;fill(k)}}
let lt=0;function tick(now){const dt=lt?Math.min(.05,(now-lt)/1000):.016;lt=now;pos+=(target-pos)*(1-Math.exp(-dt*9));if(Math.abs(target-pos)<.001)pos=target;render();raf=(pos!==target||drag)?requestAnimationFrame(tick):(lt=0,0)}
function kick(){if(started&&!raf)raf=requestAnimationFrame(tick)}
function go(t){target=Math.round(t);kick()}
render();
new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){started=true;o.disconnect();kick()}},{threshold:.3}).observe(drum);
document.getElementById('rUp').onclick=()=>go(Math.round(target)-1);
document.getElementById('rDn').onclick=()=>go(Math.round(target)+1);
// wheel only rolls the drum once you have engaged with it, so it never traps normal page scrolling
drum.addEventListener('wheel',e=>{if(!engaged||!e.deltaY)return;e.preventDefault();const now=performance.now();if(now-lock<170)return;lock=now;go(Math.round(target)+Math.sign(e.deltaY))},{passive:false});
drum.addEventListener('focus',()=>engaged=true);drum.addEventListener('blur',()=>engaged=false);
drum.addEventListener('pointerleave',()=>{if(document.activeElement!==drum)engaged=false});
drum.addEventListener('keydown',e=>{const t=Math.round(target);if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();go(t+1)}else if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();go(t-1)}else if(e.key==='Enter'){location.hash='#/bot/'+(sel+1)}});
rows.forEach((r,i)=>r.addEventListener('focus',()=>{if(r.matches(':focus-visible'))go(Math.round(target)+near(i))}));
drum.addEventListener('dragstart',e=>e.preventDefault());
drum.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'||e.button)return;engaged=true;drag={y:e.clientY,p:target,moved:false};started=true;kick();drum.classList.add('grab')});
addEventListener('pointermove',e=>{if(!drag)return;const dy=e.clientY-drag.y;if(Math.abs(dy)>4)drag.moved=true;target=drag.p-dy/PITCH;kick()});
addEventListener('pointerup',()=>{if(!drag)return;suppress=drag.moved;drag=null;drum.classList.remove('grab');go(target);setTimeout(()=>suppress=false,0)});
cyl.addEventListener('click',e=>{const r=e.target.closest('.drum-row');if(!r)return;if(suppress){e.preventDefault();return}const d=near(+r.dataset.i);if(d!==0){e.preventDefault();go(Math.round(target)+d)}});
})();
}
