import PageHead from "../common/PageHead";
import PageCta from "../common/PageCta";
import { SITE } from "../../data/site";

const MAP_Q = "Delhi+Technological+University,+Shahbad+Daulatpur,+Delhi+110042";

export default function Contact() {
  return (
    <section id="contact" className="site-page">
      <PageHead eyebrow="12 — Get in touch" title={<>Have a challenge?<br />Let’s build.</>}
        intro="For collaborations, sponsorships, research discussions or joining the team, reach out to UGV-DTU." />
      <div className="contact-layout">
        <div className="contact-panel">
          <h3>Contact the team</h3>
          <div className="contact-line"><span className="mono">Email</span><strong><a href={SITE.email.href}>{SITE.email.label}</a></strong></div>
          <div className="contact-line"><span className="mono">Phone</span><strong><a href={SITE.contactPagePhone.href}>{SITE.contactPagePhone.label}</a></strong></div>
          <div className="contact-line"><span className="mono">Instagram</span><strong><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">@ugvdtu ↗</a></strong></div>
        </div>
        <div className="contact-panel">
          <h3>Find us at DTU</h3>
          <div className="contact-line"><span className="mono">Workshop / Team space</span><strong>WT-3 and 4, Wind Tunnel</strong></div>
          <div className="contact-line"><strong>Delhi Technological University</strong><span>Shahbad Daulatpur Village, Rohini, Delhi — 110042</span></div>
        </div>
        <div className="contact-panel map-panel">
          <div className="map-head">
            <h3>Locate DTU on the map</h3>
            <PageCta href={`https://www.google.com/maps/search/?api=1&query=Delhi+Technological+University`}>Open in Google Maps ↗</PageCta>
          </div>
          <div className="map-frame">
            <iframe title="Map of Delhi Technological University" src={`https://www.google.com/maps?q=${MAP_Q}&output=embed`}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </div>
    </section>
  );
}
