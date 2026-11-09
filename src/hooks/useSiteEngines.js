import { useEffect } from 'react';
import { installAnchorGlide } from '../lib/motion';
import typing from '../engines/typing';
import world from '../engines/world';
import brandIntro from '../engines/brandIntro';
import heroUgv from '../engines/heroUgv';
import heroStats from '../engines/heroStats';
import showcase from '../engines/showcase';
import fleet from '../engines/fleet';
import teams from '../engines/teams';
import achievements from '../engines/achievements';
import research from '../engines/research';
import router from '../engines/router';
import nav from '../engines/nav';

// Starts the imperative canvas / interaction engines once the page markup is mounted.
// Order matters: world flags the intro that brandIntro waits for, and the router runs last
// because it reads the DOM the other engines fill in.
export default function useSiteEngines() {
  useEffect(() => {
    // each engine is isolated so one failure (e.g. no WebGL) cannot stop the rest
    const safely = (name, fn) => {
      try { fn(); } catch (err) { console.error(`[engine:${name}]`, err); }
    };
    safely('anchors', installAnchorGlide);
    safely('world', world);
    safely('brandIntro', brandIntro);
    safely('typing', typing);
    safely('heroUgv', heroUgv);
    safely('heroStats', heroStats);
    safely('showcase', showcase);
    safely('fleet', fleet);
    safely('teams', teams);
    safely('achievements', achievements);
    safely('research', research);
    safely('router', router);
    safely('nav', nav);
  }, []);
}
