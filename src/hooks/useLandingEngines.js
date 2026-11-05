import { useEffect } from 'react';
import typing from '../engines/typing';
import world from '../engines/world';
import brandIntro from '../engines/brandIntro';
import heroUgv from '../engines/heroUgv';
import heroStats from '../engines/heroStats';

// Starts the imperative canvas / animation engines once the landing markup is mounted.
// Order matters: the world engine flags the intro that brandIntro waits for.
export default function useLandingEngines() {
  useEffect(() => {
    world();
    brandIntro();
    typing();
    heroUgv();
    heroStats();
  }, []);
}
