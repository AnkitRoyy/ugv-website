import PageHead from "../common/PageHead";
import PageCta from "../common/PageCta";
import { SPONSORS } from "../../data/sponsors";

export default function Sponsors() {
  return (
    <section id="sponsors" className="site-page">
      <PageHead eyebrow="09 — Partners" title={<>Backed by belief.<br />Built together.</>}
        intro="Our sponsors and partners help turn ambitious engineering ideas into working systems." />
      <div className="sponsor-grid">
        {SPONSORS.map((s, i) => (
          <div className="sponsor-tile" key={s.name}>
            <div className="sponsor-logo"><img src={s.logo} alt={s.name} loading="lazy" /></div>
            <small>Partner {String(i + 1).padStart(2, "0")}</small>
          </div>
        ))}
      </div>
      <PageCta to="/contact">Become a sponsor ↗</PageCta>
    </section>
  );
}
