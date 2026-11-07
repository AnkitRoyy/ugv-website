/* eslint-disable */
import { glide } from '../lib/motion';

export default function achievements() {
  if (window.__eng_achievements) return;
  window.__eng_achievements = 1;
(function(){
const btns=[...document.querySelectorAll('.ach-filter button')],rows=[...document.querySelectorAll('.ach-row')],more=document.getElementById('achMore'),LIM=6;
let f='all',open=false,k=0;
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.style.transitionDelay=((k++%6)*60)+'ms';x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
function apply(){let n=0;
 rows.forEach(r=>{const ok=f==='all'||r.dataset.t===f;r.hidden=!ok;if(!ok){r._v=0;r.classList.remove('in');io.unobserve(r);return}
  const show=open||n<LIM;n+=show?1:0;r.classList.toggle('cut',!show);
  if(!show){r._v=0;r.classList.remove('in');io.unobserve(r)}else if(!r._v){r._v=1;r.classList.remove('in');io.unobserve(r);io.observe(r)}});
 const total=rows.filter(r=>!r.hidden).length;more.hidden=total<=LIM;more.classList.toggle('open',open);more.setAttribute('aria-expanded',open);
 more.querySelector('span').textContent=open?'Show less':'Show more ('+(total-LIM)+')'}
btns.forEach(b=>b.addEventListener('click',()=>{f=b.dataset.f;btns.forEach(x=>x.classList.toggle('on',x===b));rows.forEach(r=>r._v=0);k=0;apply()}));
more.addEventListener('click',()=>{open=!open;k=0;apply();if(!open){const t=document.querySelector('.ach-filter').getBoundingClientRect().top;if(t<80)glide(Math.max(0,scrollY+t-110))}});
apply();
})();
}
