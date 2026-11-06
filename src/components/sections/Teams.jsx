export default function Teams() {
  return (
    <>
<section className="sec" id="teams">
<div className="mono">03 — Teams</div>
<h2 className="t">Four teams, one vehicle.</h2>


<div className="wheel-stage">
  <div className="wheel-wrap" id="dept-wheel" aria-label="Department Head Selector Wheel">
    
    <a href="#/software" className="w-slice top active" data-dept="software">
      <div className="w-node">
        <span className="mono">01</span>
        <div className="w-bust"></div>
        <span className="w-title">Software</span>
        <span className="w-head-name">Head — Software</span>
      </div>
    </a>

    
    <a href="#/mechanical" className="w-slice left" data-dept="mechanical">
      <div className="w-node">
        <span className="mono">02</span>
        <div className="w-bust"></div>
        <span className="w-title">Mechanical</span>
        <span className="w-head-name">Head — Mechanical</span>
      </div>
    </a>

    
    <a href="#/electrical" className="w-slice right" data-dept="electrical">
      <div className="w-node">
        <span className="mono">03</span>
        <div className="w-bust"></div>
        <span className="w-title">Electrical</span>
        <span className="w-head-name">Head — Electrical</span>
      </div>
    </a>

    
    <a href="#/research" className="w-slice bottom" data-dept="research">
      <div className="w-node">
        <span className="w-title">Research</span>
        <span className="w-head-name">Head — Research</span>
        <div className="w-bust"></div>
        <span className="mono">04</span>
      </div>
    </a>

    
    <svg className="w-svg" viewBox="0 0 200 200">
      <line x1="0" y1="0" x2="200" y2="200" stroke="#2d2d31" strokeWidth="1" />
      <line x1="200" y1="0" x2="0" y2="200" stroke="#2d2d31" strokeWidth="1" />
      
      <path id="w-arc-software" className="w-arc active" d="M 31 31 A 97.5 97.5 0 0 1 169 31" />
      
      <path id="w-arc-electrical" className="w-arc" d="M 169 31 A 97.5 97.5 0 0 1 169 169" />
      
      <path id="w-arc-research" className="w-arc" d="M 169 169 A 97.5 97.5 0 0 1 31 169" />
      
      <path id="w-arc-mechanical" className="w-arc" d="M 31 169 A 97.5 97.5 0 0 1 31 31" />
    </svg>

    
    <div className="w-hub">
      <span className="mono" id="wh-idx">01 / 04</span>
      <b id="wh-name">Software</b>
    </div>
  </div>

  
  <div className="wheel-dossier">
    <div id="w-preview-card"></div>
    <div className="dossier-meta">
      <div className="mono" id="wd-idx">01 — Department Dossier</div>
      <h3 id="wd-title">Software team</h3>
      <p id="wd-desc">ROS, perception, planning and simulation.</p>
      <div className="dossier-specs">
        <div><span>Department Heads</span><span id="wd-heads">02 Leads</span></div>
        <div><span>Active Roster</span><span id="wd-members">10 Members</span></div>
        <div><span>Focus</span><span id="wd-focus">Autonomy & ROS</span></div>
      </div>
      <div>
        <a id="wd-cta" className="btn p" href="#/software">Open Software roster ↗</a>
      </div>
    </div>
  </div>
</div>

</section>
    </>
  );
}
