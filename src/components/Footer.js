import "./Footer.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

const NAV_HEIGHT = 64;

let raf = null;

const smoothScrollTo = (targetY, onDone) => {
  cancelAnimationFrame(raf);

  const startY = window.scrollY;
  const diff = targetY - startY;
  const distance = Math.abs(diff);

  const duration = Math.min(
    4200,
    Math.max(1600, distance * 1.15)
  );

  let start = null;

  const ease = (t) =>
    t < 0.5
      ? 8 * t * t * t * t
      : 1 - Math.pow(-2 * t + 2, 4) / 2;

  const step = (time) => {
    if (!start) start = time;
    const p = Math.min((time - start) / duration, 1);
    window.scrollTo(0, startY + diff * ease(p));
    if (p < 1) {
      raf = requestAnimationFrame(step);
    } else {
      onDone?.();
    }
  };

  raf = requestAnimationFrame(step);
};

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const clickLock = useRef(false);
  const scrollLock = useRef(false);

  const go = (id) => {
    if (clickLock.current) return;

    clickLock.current = true;
    scrollLock.current = true;

    const unlock = () => {
      clickLock.current = false;
      scrollLock.current = false;
    };

    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) {
        unlock();
        return;
      }

      const y =
        el.getBoundingClientRect().top +
        window.scrollY -
        NAV_HEIGHT;

      smoothScrollTo(y, unlock);
    };

    if (isHome) {
      scroll();
    } else {
      navigate("/");
      requestAnimationFrame(() => {
        requestAnimationFrame(scroll);
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h3>
            UGV-<span>DTU</span>
          </h3>
          <p>Autonomous Ground Vehicle Research Team</p>
        </div>

        <div className="footer-center">
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("projects")}>Projects</button>
          <button onClick={() => go("sponsors")}>Sponsors</button>
          <button onClick={() => go("team")}>Team</button>
          <button onClick={() => go("visuals")}>Visuals</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>

        <div className="footer-right">
          <div className="footer-contact">
            <span>📞 +91 9993400267</span>
            <span>✉️ ugv@dtu.ac.in</span>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/ugvdtu/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/ugvdtu/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        WT-3 and 4, Wind Tunnel · Delhi Technological University · Delhi – 110042
        <br />
        © {new Date().getFullYear()} UGV-DTU. All rights reserved.
      </div>

      <div className="footer-credit">
        UGV dev · Ankit Roy
      </div>
    </footer>
  );
}

export default Footer;