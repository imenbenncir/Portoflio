import WorldMapBackground from './components/ui/WorldMapBackground';
import GradientMeshBackground from './components/ui/GradientMeshBackground';
import CursorGlow from './components/ui/CursorGlow';
import Navbar from './components/layout/Navbar';
import InfoCard from './components/ui/InfoCard';
import Hero from './components/sections/Hero';
import StartupVision from './components/sections/StartupVision';
import About from './components/sections/About';
import Approach from './components/sections/Approach';
import Projects from './components/sections/Projects';
import Focus from './components/sections/Focus';
import Vision from './components/sections/Vision';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative font-sans text-soft-white bg-primary-dark w-full min-h-screen">
      <GradientMeshBackground />
      <WorldMapBackground />
      <CursorGlow />
      <Navbar />
      <InfoCard />

      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <StartupVision />
        <About />
        <Approach />
        <Projects />
        <Focus />
        <Vision />
        <Contact />
      </main>
    </div>
  );
}

export default App;
