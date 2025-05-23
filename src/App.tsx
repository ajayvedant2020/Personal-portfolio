import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Publications from './components/sections/Publications';
import Achievements from './components/sections/Achievements';
import Certifications from './components/sections/Certifications';
import Skills from './components/sections/Skills';
import Footer from './components/Footer';

function App() { 
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <Hero />
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
            <div>
              <Experience />
              <Projects />
              <Publications />
            </div>
            <div className="space-y-8">
              <Education />
              <Skills />
              <Achievements />
              <Certifications />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;