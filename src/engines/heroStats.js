/* eslint-disable */
import { ACH, tier } from '../data/achievements';

export default function heroStats() {
  if (window.__eng_heroStats) return;
  window.__eng_heroStats = 1;
(function(){
const hero=document.getElementById('home'),stats=[...hero.querySelectorAll('.hero-stats b')];
document.getElementById('stRec').dataset.n=ACH.length;
document.getElementById('stGlob').dataset.n=ACH.filter(a=>tier(a[1])==='g').length;
function count(){stats.forEach(b=>{const n=+b.dataset.n,sfx=b.dataset.sfx||'',t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1100),e=1-Math.pow(1-k,3);b.textContent=String(Math.round(n*e)).padStart(2,'0')+(k===1?sfx:'');if(k<1)requestAnimationFrame(f)})(t0)})}
if(hero.classList.contains('go'))count();else new MutationObserver((m,o)=>{if(hero.classList.contains('go')){o.disconnect();count()}}).observe(hero,{attributes:true,attributeFilter:['class']});
})();
}
