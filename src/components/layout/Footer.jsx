import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="sf">
      <div className="sf-main">
        <div className="sf-id">
          <a href="#/" className="sf-brand" aria-label="UGV-DTU home">
            <span className="sf-logo" role="img" aria-label="UGV rover" />
            <span className="sf-name">
              UGV<span>-DTU</span>
            </span>
          </a>
        </div>

        <nav className="sf-links" aria-label="Footer navigation">
          <a href="#/about">About</a>
          <a href="#/fleet">Projects</a>
          <a href="#/sponsors">Sponsors</a>
          <a href="#/council">Team</a>
          <a href="#/visuals">Visuals</a>
          <a href="#/contact">Contact</a>
        </nav>

        <div className="sf-contact">
          <div className="sf-lines">
            <a className="sf-line" href="tel:+917042011047" aria-label="Call +91 70420 11047">
              <FiPhone aria-hidden="true" /> <span>+91 70420 11047</span>
            </a>
            <a className="sf-line" href="mailto:ugv@dtu.ac.in" aria-label="Email ugv@dtu.ac.in">
              <FiMail aria-hidden="true" /> <span>ugv@dtu.ac.in</span>
            </a>
          </div>

          <div className="sf-social">
            <a
              href="https://www.instagram.com/ugvdtu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open UGV-DTU Instagram profile in a new tab"
              title="Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/company/ugv-dtu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open UGV-DTU LinkedIn page in a new tab"
              title="LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="sf-bottom">
        <p>© 2026 UGV-DTU. All rights reserved.</p>

        <p className="sf-credit">
          WebDev by{" "}
          <span>Tushar</span> / <span>Preet Bisla</span> /{" "}
          <span>Himanshu Baghel</span>
        </p>
      </div>
    </footer>
  );
}