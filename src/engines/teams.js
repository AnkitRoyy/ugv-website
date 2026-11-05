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
  document.getElementById('cc').innerHTML=LEADERSHIP.map(p=>card(p.name,p.role,'',p.image)).join('');
document.querySelectorAll('.w-slice').forEach(el=>el.addEventListener('click',e=>{
  e.preventDefault();switchDepartment(el.dataset.dept);
}));
document.querySelectorAll('#team-mini-switch a').forEach(el=>el.addEventListener('click',e=>{
  e.preventDefault();if(!el.classList.contains('active'))switchDepartment(el.dataset.dept);
}));
document.getElementById('wd-cta').addEventListener('click',e=>{
  const k=e.currentTarget.getAttribute('href').replace('#/','');
  if(TM[k]){e.preventDefault();switchDepartment(k)}
});
}
