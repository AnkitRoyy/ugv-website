export default function BotPage() {
  return (
    <>
<section id="bot">
<div className="team-top"><a className="back mono" href="#/fleet">← Fleet</a><div className="mini-switch" id="bot-sw"></div></div>
<div className="mono" id="bot-k"></div><h2 className="t" id="bot-t" style={{"font":"500 clamp(40px,6vw,76px)/1 var(--sans)","letterSpacing":"-.05em","margin":"16px 0 56px"}}></h2>
<div className="bot-grid"><div id="bot-hero"></div>
<div className="bot-info"><p id="bot-d"></p><div className="specs" id="bot-s"></div>
<div className="cta"><a className="btn" id="bot-prev" href="#/fleet">← Previous</a><a className="btn p" id="bot-next" href="#/fleet">Next →</a></div></div></div></section>
    </>
  );
}
