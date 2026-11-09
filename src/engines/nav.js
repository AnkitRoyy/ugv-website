/* eslint-disable */
import { glide } from '../lib/motion';

export default function nav() {
  if (window.__eng_nav) return;
  window.__eng_nav = 1;
document.getElementById('mobileMenu').addEventListener('click',()=>document.querySelector('nav .l').classList.toggle('open'));
document.querySelectorAll('nav .l a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav .l').classList.remove('open')));
document.querySelectorAll('nav .brand,.sf-brand').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();
 const inMode=['t','b','pg'].some(c=>document.body.classList.contains(c));
 if(inMode){location.hash='#/'}
 else{history.replaceState(null,'','#/');glide(0)}}));
(function(){
const links=[...document.querySelectorAll('nav .l a')],cta=document.querySelector('.nav-cta'),bar=document.getElementById('prog'),home=document.getElementById('home');
const map={about:'about',show:'fleet',fleet:'fleet',council:'council',teams:'council',achievements:'achievements',papers:'papers',sponsors:'sponsors',visuals:'visuals',blogs:'blogs',contact:'contact'};
function spy(){let cur='';
 if(document.body.classList.contains('pg'))cur=document.body.dataset.pg;
 else if(document.body.classList.contains('t'))cur='council';
 else if(document.body.classList.contains('b'))cur='fleet';
 else{const y=innerHeight*.32;Object.keys(map).forEach(id=>{const e=document.getElementById(id);if(e&&e.offsetHeight>0&&e.getBoundingClientRect().top<=y)cur=map[id]})}
 links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#/'+cur));
 document.querySelectorAll('nav .dd').forEach(d=>d.querySelector('.dd-b').classList.toggle('on',!!d.querySelector('a.on')));
 cta.classList.toggle('on',cur==='contact');
 bar.style.transform='scaleX('+Math.min(1,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)).toFixed(4)+')';home.classList.toggle('scrolled',scrollY>40)}
let sq=0;addEventListener('scroll',()=>{if(!sq){sq=1;requestAnimationFrame(()=>{sq=0;spy()})}},{passive:true});addEventListener('hashchange',()=>setTimeout(spy,60));spy();
})();
(function(){
const dds=[...document.querySelectorAll('nav .dd')],hov=matchMedia('(hover:hover)');
const shut=(d)=>{d.classList.remove('open');d.querySelector('.dd-b').setAttribute('aria-expanded','false')};
dds.forEach(d=>{const b=d.querySelector('.dd-b');
 b.addEventListener('click',e=>{if(hov.matches&&e.detail>0)return;const o=!d.classList.contains('open');dds.forEach(shut);d.classList.toggle('open',o);b.setAttribute('aria-expanded',o)});
 d.addEventListener('focusout',e=>{if(!d.contains(e.relatedTarget))shut(d)});
 d.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{dds.forEach(shut);a.blur()}))});
document.addEventListener('click',e=>{if(!e.target.closest('nav .dd'))dds.forEach(shut)});
addEventListener('keydown',e=>{if(e.key==='Escape')dds.forEach(shut)});
})();
}
