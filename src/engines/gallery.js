/* eslint-disable */
export default function gallery() {
  if (window.__eng_gallery) return;
  window.__eng_gallery = 1;
(function(){
const vg=document.getElementById('vg');if(!vg)return;
const ths=[...vg.querySelectorAll('.vg-th')],img=vg.querySelector('.vg-frame img'),frame=vg.querySelector('.vg-frame'),bar=vg.querySelector('.vg-bar i'),cnt=vg.querySelector('.vg-count'),cap=vg.querySelector('.vg-cap'),calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
let i=0,lb=null,hov=0,off=1,lbo=0;
const sync=()=>vg.classList.toggle('paused',!!(hov||off||lbo)),N=ths.length;
function show(n){i=(n+N)%N;const t=ths[i],nx=new Image();img.style.opacity=0;
 nx.onload=nx.onerror=()=>{img.src=t.dataset.full;img.alt=t.dataset.alt;img.style.opacity=1;if(!calm){img.classList.remove('kb');void img.offsetWidth;img.classList.add('kb')}};nx.src=t.dataset.full;
 ths.forEach((x,k)=>{x.classList.toggle('on',k===i);x.setAttribute('aria-current',k===i)});
 cnt.textContent=String(i+1).padStart(2,'0')+' / '+String(N).padStart(2,'0');cap.textContent=t.dataset.cap;
 if(!calm){bar.classList.remove('run');void bar.offsetWidth;bar.classList.add('run')}
 const st=t.parentElement;if(st.scrollWidth>st.clientWidth)st.scrollTo({left:t.offsetLeft-st.clientWidth/2+t.offsetWidth/2,behavior:'smooth'});
 (new Image()).src=ths[(i+1)%N].dataset.full;if(lb)lbShow()}
const lbShow=()=>{lb.querySelector('img').src=ths[i].dataset.full;lb.querySelector('p').textContent=ths[i].dataset.cap};
function openLb(){if(!lb){lb=document.createElement('div');lb.className='vg-lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Photo viewer');
 lb.innerHTML='<img alt=""><p class="mono"></p><button type="button" class="vg-x" aria-label="Close">×</button><button type="button" class="vg-nav prev" aria-label="Previous photo">‹</button><button type="button" class="vg-nav next" aria-label="Next photo">›</button>';
 document.body.appendChild(lb);lb.addEventListener('click',e=>{if(e.target.closest('.prev'))show(i-1);else if(e.target.closest('.next'))show(i+1);else if(!e.target.matches('img'))closeLb()})}
 lbShow();lb.classList.add('open');lbo=1;sync();lb.querySelector('.vg-x').focus()}
function closeLb(){lb.classList.remove('open');lbo=0;sync();frame.focus()}
ths.forEach((t,k)=>t.addEventListener('click',()=>show(k)));
vg.querySelector('.vg-main .prev').addEventListener('click',()=>show(i-1));vg.querySelector('.vg-main .next').addEventListener('click',()=>show(i+1));
bar.addEventListener('animationend',()=>show(i+1));
let x0=null;frame.addEventListener('pointerdown',e=>{x0=e.clientX});
frame.addEventListener('pointerup',e=>{if(x0===null)return;const d=e.clientX-x0;x0=null;if(Math.abs(d)>50)show(i+(d<0?1:-1));else openLb()});
frame.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLb()}});
addEventListener('keydown',e=>{const inLb=lb&&lb.classList.contains('open');if(inLb&&e.key==='Escape')closeLb();
 if(e.key==='ArrowRight'&&(inLb||vg.contains(document.activeElement)))show(i+1);if(e.key==='ArrowLeft'&&(inLb||vg.contains(document.activeElement)))show(i-1)});
vg.addEventListener('pointerenter',()=>{hov=1;sync()});vg.addEventListener('pointerleave',()=>{hov=0;sync()});
new IntersectionObserver(es=>{off=es[0].isIntersecting?0:1;sync()},{threshold:.25}).observe(vg);
sync();show(0);
})();
}
