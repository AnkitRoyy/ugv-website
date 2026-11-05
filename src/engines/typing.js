/* eslint-disable */
import THREE from '../lib/threeLegacy';

export default function typing() {
  if (window.__eng_typing) return;
  window.__eng_typing = 1;
const T=['Explore projects','Explore achievements','Explore the team'];let ti=0,ci=0,del=false;const ty=document.getElementById('ty');
(function tick(){const s=T[ti];ci+=del?-1:1;ty.textContent=s.slice(0,ci);let w=del?28:65;if(!del&&ci===s.length){del=true;w=1500}else if(del&&ci===0){del=false;ti=(ti+1)%T.length;w=350}setTimeout(tick,w)})();
}
