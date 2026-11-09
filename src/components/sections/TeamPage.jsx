export default function TeamPage() {
  return (
    <>
<section id="team">
<div className="team-top">
  <a className="back mono" href="#/teams">← All teams</a>
  <div className="mini-switch" id="team-mini-switch">
    <a href="#/software" data-dept="software">01 Software</a>
    <a href="#/mechanical" data-dept="mechanical">02 Mechanical</a>
    <a href="#/electrical" data-dept="electrical">03 Electrical</a>
    <a href="#/research" data-dept="research">04 Research</a>
  </div>
</div>
<div className="mono" id="tk"></div><h2 className="t" id="tt" aria-live="polite" style={{"font":"500 clamp(40px,6vw,76px)/1 var(--sans)","letterSpacing":"-.05em","margin":"16px 0 56px"}}>Team</h2>
<div className="gv"><div className="roster-count"><span className="mono">DEPARTMENT ROSTER / ALL PERSONNEL</span><strong>HEADS + MEMBERS IN ONE VIEW</strong></div><div className="mono" style={{"marginBottom":"18px"}}>Team heads</div><div className="heads" id="hd"></div>
<div className="mono" style={{"marginBottom":"18px"}}>Members</div><div className="mem" id="mm"></div></div>
<div className="cv"><div className="car-stage" id="car-stage"></div>
<div className="car-ctrl"><button className="btn" id="car-prev" aria-label="Previous">←</button><span className="mono" id="car-info"></span><button className="btn" id="car-next" aria-label="Next">→</button></div></div></section>
    </>
  );
}
