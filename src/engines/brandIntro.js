/* eslint-disable */

export default function brandIntro() {
  if (window.__eng_brandIntro) return;
  window.__eng_brandIntro = 1;
window.__startBrand=function(){if(window.__bs)return;window.__bs=1;setTimeout(function(){window.brandIntro&&brandIntro()},150)};
const __go=()=>{if(!window.__introPending)__startBrand()};document.readyState==='complete'?__go():addEventListener('load',__go);
(function(){
const lock=document.getElementById('brandLockup'),logo=document.getElementById('heroLogo'),word=document.getElementById('brandWord'),trail=document.getElementById('brandTrail'),hero=document.getElementById('home');
const all=logo.querySelector('.rb-all'),wl=logo.querySelector('.rb-wl'),wr=logo.querySelector('.rb-wr'),hd=logo.querySelector('.rb-head');
const WL=[1609.2,525],WR=[1926.8,590.6],PV=[1760,740],T1=1000,T2=3400;
const eo=t=>1-Math.pow(1-t,3),ez=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,cl=(v,a,b)=>Math.min(b,Math.max(a,v));
let ptr=[0,0],nod=0,D=0,L=0,W=0,done=false;
const setHead=()=>hd.setAttribute('transform',`translate(${ptr[0]} ${ptr[1]+nod})`);
logo.addEventListener('pointermove',e=>{const r=logo.getBoundingClientRect();ptr=[((e.clientX-r.left)/r.width-.5)*60,((e.clientY-r.top)/r.height-.5)*40];setHead()});
logo.addEventListener('pointerleave',()=>{ptr=[0,0];setHead()});
function go(){hero.querySelectorAll('.hv').forEach((el,i)=>el.style.transitionDelay=(i*95)+'ms');hero.classList.add('go')}
function finish(){done=true;logo.style.transform='none';logo.style.opacity=1;all.removeAttribute('transform');wl.removeAttribute('transform');wr.removeAttribute('transform');nod=0;setHead();logo.querySelectorAll('.rb-eye').forEach(e=>e.classList.add('on'));word.style.setProperty('--e','9999px');word.style.filter='none';trail.style.opacity=0;go()}
function frame(el){
 const a=cl(el/T1,0,1),s=cl((el-T1)/(T2-T1),0,1),e=ez(s);
 const env=el<T1?Math.sin(a*Math.PI)*(.5+.5*a):Math.max(0,1-(el-T1)/600)*.5;
 const tx=-D*(1-e),lean=-2.8*Math.sin(2*Math.PI*e),wa=-12*eo(a)+732*e;
 logo.style.opacity=eo(cl(el/500,0,1));logo.style.transform=`translateX(${tx}px) scale(${.94+.06*eo(a)})`;
 all.setAttribute('transform',`translate(${Math.sin(el*.09)*5*env} ${Math.sin(el*.13)*3*env}) rotate(${lean} ${PV[0]} ${PV[1]})`);
 wl.setAttribute('transform',`rotate(${wa} ${WL[0]} ${WL[1]})`);wr.setAttribute('transform',`rotate(${wa} ${WR[0]} ${WR[1]})`);
 nod=-8*Math.sin(a*Math.PI)+4*Math.sin(2*Math.PI*e);setHead();
 if(el>350)logo.querySelectorAll('.rb-eye').forEach(x=>x.classList.add('on'));
 const edge=el<T1?-300:tx+D+L*.1;word.style.setProperty('--e',edge+'px');word.style.filter=`blur(${(1-e)*6}px)`;
 trail.style.width=Math.max(0,edge)+'px';trail.style.opacity=el<T1?0:.9;
 if(el>T1+500&&!hero.classList.contains('go'))go();
}
window.brandIntro=function(){
 if(matchMedia('(prefers-reduced-motion:reduce)').matches){finish();return}
 (document.fonts?document.fonts.ready:Promise.resolve()).then(()=>{
  W=word.offsetWidth;L=logo.offsetWidth;D=W+(parseFloat(getComputedStyle(lock).columnGap)||20);
  trail.style.bottom=((lock.offsetHeight-logo.offsetHeight)/2+logo.offsetHeight*.05)+'px';
  let t0;(function loop(now){if(done)return;t0=t0||now;const el=now-t0;if(el>=T2+80)finish();else{frame(el);requestAnimationFrame(loop)}})(performance.now());
 });
 setTimeout(()=>{if(!done)finish()},8000);
};
})();
}
