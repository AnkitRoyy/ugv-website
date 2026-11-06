/* eslint-disable */
import { card, tilt } from '../lib/cards';
import { DEPTS, LEADERSHIP } from '../data/people';
const TM=Object.fromEntries(Object.entries(DEPTS).map(([k,v])=>[k,[v.name,v.desc,v.idx,v.focus]]));
export const TMAP=TM;
export function previewDept(k){
  const d=TM[k];if(!d)return;
  document.querySelectorAll('.w-slice').forEach(el=>el.classList.toggle('active',el.dataset.dept===k));
  document.querySelectorAll('.w-arc').forEach(el=>el.classList.toggle('active',el.id==='w-arc-'+k));
  document.getElementById('wh-idx').textContent=d[2]+' / 04';
  document.getElementById('wh-name').textContent=d[0];
  document.getElementById('wd-idx').textContent=d[2]+' — Department Dossier';
  document.getElementById('wd-title').textContent=d[0]+' team';
  document.getElementById('wd-desc').textContent=d[1];
  document.getElementById('wd-focus').textContent=d[3];
document.getElementById('wd-heads').textContent=String(DEPTS[k].heads.length).padStart(2,'0')+' Leads';
document.getElementById('wd-members').textContent=String(DEPTS[k].members.length).padStart(2,'0')+' Members';
  const cta=document.getElementById('wd-cta');
  cta.href='#/'+k;
  cta.textContent='Open '+d[0]+' roster ↗';
  const pc=document.getElementById('w-preview-card');
const h=DEPTS[k].heads[0];
pc.innerHTML=h?`<a href="#/${k}" style="display:block">${card(h.name,h.role,'',h.image)}</a>`:'';
  tilt();
}
let deptSwitchTimer=null;
function switchDepartment(k){
  if(!TM[k])return;
  const overlay=document.getElementById('dept-transition');
  document.getElementById('dept-transition-name').textContent=TM[k][0]+' Division';
  overlay.classList.remove('active');
  void overlay.offsetWidth;
  overlay.classList.add('active');
  clearTimeout(deptSwitchTimer);
  deptSwitchTimer=setTimeout(()=>{location.hash='#/'+k;},620);
  setTimeout(()=>overlay.classList.remove('active'),1250);
}
export default function teams() {
  if (window.__eng_teams) return;
  window.__eng_teams = 1;
  document.getElementById('cc').innerHTML=LEADERSHIP.map(p=>card(p.name,p.role,'',p.image,p)).join('');
// department dial: hover / focus previews, click opens. On touch the first tap previews the
// unit and a second tap on the same unit (or the roster button) opens it.
{
  const slices=[...document.querySelectorAll('.w-slice')],wheel=document.getElementById('dept-wheel');
  const order=['software','electrical','research','mechanical'];
  let ptype='mouse',wasActive=false;
  slices.forEach(el=>{
    el.setAttribute('role','button');el.tabIndex=0;el.setAttribute('aria-label','Preview '+TM[el.dataset.dept][0]+' department');
    el.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')previewDept(el.dataset.dept)});
    el.addEventListener('focus',()=>previewDept(el.dataset.dept));
    el.addEventListener('pointerdown',e=>{ptype=e.pointerType;wasActive=el.classList.contains('active')});
    el.addEventListener('click',e=>{
      e.preventDefault();
      if(ptype!=='mouse'&&!wasActive){previewDept(el.dataset.dept);return}
      switchDepartment(el.dataset.dept);
    });
    el.addEventListener('keydown',e=>{
      const i=order.indexOf(el.dataset.dept);
      if(e.key==='Enter'||e.key===' '){e.preventDefault();switchDepartment(el.dataset.dept)}
      else if(e.key==='ArrowRight'||e.key==='ArrowDown'){e.preventDefault();slices.find(s=>s.dataset.dept===order[(i+1)%4]).focus()}
      else if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();slices.find(s=>s.dataset.dept===order[(i+3)%4]).focus()}
    });
  });
}
document.querySelectorAll('#team-mini-switch a').forEach(el=>el.addEventListener('click',e=>{
  e.preventDefault();if(!el.classList.contains('active'))switchDepartment(el.dataset.dept);
}));
document.getElementById('wd-cta').addEventListener('click',e=>{
  const k=e.currentTarget.getAttribute('href').replace('#/','');
  if(TM[k]){e.preventDefault();switchDepartment(k)}
});
}
