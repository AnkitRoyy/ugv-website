import './styles/base.css';
import './styles/sections.css';
import './styles/pages.css';
import './styles/extras.css';

import useTheme from './hooks/useTheme';
import useSiteEngines from './hooks/useSiteEngines';
import DeptTransition from './components/layout/DeptTransition';
import BackgroundLayers from './components/layout/BackgroundLayers';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Showcase from './components/sections/Showcase';
import Fleet from './components/sections/Fleet';
import Council from './components/sections/Council';
import Teams from './components/sections/Teams';
import TeamPage from './components/sections/TeamPage';
import BotPage from './components/sections/BotPage';
import Footer from './components/layout/Footer';

export default function App() {
  const [light, toggleTheme] = useTheme();
  useSiteEngines();
  return (
    <>
      <DeptTransition />
      <BackgroundLayers />
      <Navbar light={light} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Showcase />
        <Fleet />
        <Council />
        <Teams />
      </main>
      <TeamPage />
      <BotPage />
      <Footer />
    </>
  );
}
