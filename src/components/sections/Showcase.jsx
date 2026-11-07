import { glide } from '../../lib/motion';

export default function Showcase() {
  function skipProjects(event) {
    event.preventDefault();
    const fleet = document.getElementById('fleet');
    if (!fleet) return;
    window.history.replaceState(window.history.state, '', '#/fleet');
    glide(fleet);
  }

  return (
    <>
<section id="show" className="project-section"><div className="stick"><canvas id="gl"></canvas>
<div className="rail" id="rail"><b></b><b></b><b></b></div>
<div className="panel" id="pn"><div className="mono" id="pk"></div><h2 id="pt"></h2><p id="pd"></p><div className="specs" id="ps"></div></div>
<div className="lab mono"><span id="lab">Scroll to rotate · 1 / 3 projects · illustrative model</span></div>
<a className="btn show-skip" href="#/fleet" onClick={skipProjects}>Skip projects <span aria-hidden="true">↓</span></a></div></section>
    </>
  );
}
