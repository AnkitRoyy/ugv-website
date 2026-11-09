/* eslint-disable */
import { glide, cancelGlide } from '../lib/motion';
import { card, tilt } from '../lib/cards';
import { DEPTS } from '../data/people';
import { RS } from '../data/research';
import { BLOGS as blogIndex } from '../data/blogs';
import { TMAP as TM, previewDept } from './teams';
import { showBot, disposeBotModel } from './fleet';
const SOLO=['ugvc','isdc','igvc'];
export function route(){const tk=document.getElementById('tk'),tt=document.getElementById('tt'),hd=document.getElementById('hd'),mm=document.getElementById('mm');
  const raw=location.hash.replace('#/','');
  const bm=raw.match(/^bot\/(\d+)$/);
  if(!bm)disposeBotModel();
  const k= raw==='projects' ? 'show' : raw;
  document.body.classList.remove('t','b','pg');
  document.querySelectorAll('.site-page.active').forEach(x=>x.classList.remove('active'));
  const pm=raw.match(/^papers\/([\w-]+)$/);
  const bl=raw.match(/^blogs\/([\w-]+)$/);
const soloId=SOLO.includes(raw)?raw:(pm&&RS.some(r=>r.id===pm[1])?'rs-'+pm[1]:(bl&&blogIndex.some(b=>b.slug===bl[1])?'blog-'+bl[1]:''));
  const soloEl=soloId&&document.getElementById(soloId);
  if(soloEl){
    soloEl.classList.add('active');
    document.body.classList.add('pg');
    document.body.dataset.pg=pm?'papers':bl?'blogs':raw;
    cancelGlide();
    scrollTo({top:0,behavior:'instant'});
  }else if(bm){
    showBot(+bm[1]-1);
    document.body.classList.add('b');
    scrollTo({top:0,behavior:'instant'});
  }else if(TM[k]){
    previewDept(k);
    document.body.classList.add('t');
    tk.textContent='Team — '+TM[k][1];
    tt.textContent=TM[k][0]+' team';
    document.getElementById('team').classList.remove('is-car');
    hd.innerHTML=DEPTS[k].heads.map(p=>card(p.name,p.role,'',p.image,p)).join('');
    mm.innerHTML=DEPTS[k].members.map(p=>card(p.name,p.role,'',p.image,p)).join('');
    document.querySelector('#team .gv').style.display='block';
    document.querySelectorAll('#team-mini-switch a').forEach(el=>el.classList.toggle('active',el.dataset.dept===k));
    scrollTo({top:0,behavior:'instant'});
  }else{
    const e=document.getElementById(k);
    if(e)setTimeout(()=>glide(e),20);else if(!k&&route.n)glide(0);
  }
  tilt();
}
export default function router() {
  if (window.__eng_router) return;
  window.__eng_router = 1;
  previewDept('software');
  addEventListener('hashchange',route);route();route.n=1;
}
