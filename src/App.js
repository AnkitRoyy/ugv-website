import './styles/base.css';
import './styles/sections.css';
import './styles/pages.css';
import './styles/extras.css';

import useTheme from './hooks/useTheme';
import useLandingEngines from './hooks/useLandingEngines';
import DeptTransition from './components/layout/DeptTransition';
import BackgroundLayers from './components/layout/BackgroundLayers';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/layout/Footer';

export default function App() {
  const [light, toggleTheme] = useTheme();
  useLandingEngines();
  return (
    <>
      <DeptTransition />
      <BackgroundLayers />
      <Navbar light={light} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
