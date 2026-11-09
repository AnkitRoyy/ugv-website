export default function Fleet() {
  return (
    <>
<section className="sec" id="fleet"><div className="mono">02 — Fleet</div><h2 className="t">Our vehicles.</h2>
<div className="roller" id="roller">
 <div className="roll-main">
  <div className="roll-head"><span>No.</span><span>Vehicle</span><span>Type</span><span>Focus</span><span></span></div>
  <div className="drum" id="drum" tabIndex="0" aria-label="Vehicle roller. Scroll, drag or use the arrow keys to roll."><div className="drum-cyl" id="drumCyl"></div><div className="drum-band"></div></div>
  <div className="roll-ctrl"><button className="rbtn" id="rUp" aria-label="Previous vehicle">↑</button><span className="mono" id="rInfo">01 / 07</span><button className="rbtn" id="rDn" aria-label="Next vehicle">↓</button></div>
  <blockquote className="fleet-quote" id="fleetQuote" aria-live="polite"><p></p><cite></cite></blockquote>
 </div>
 <aside className="roll-side" id="rollSide" aria-live="polite"></aside>
</div></section>
    </>
  );
}
