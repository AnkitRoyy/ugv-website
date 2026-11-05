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
import router from '../engines/router';
import nav from '../engines/nav';

// Starts the imperative canvas / interaction engines once the page markup is mounted.
// Order matters: world flags the intro that brandIntro waits for, and the router runs last
// because it reads the DOM the other engines fill in.
export default function useSiteEngines() {
  useEffect(() => {
    installAnchorGlide();
    world();
    brandIntro();
    typing();
    heroUgv();
    heroStats();
    showcase();
    fleet();
    teams();
    router();
    nav();
  }, []);
}
