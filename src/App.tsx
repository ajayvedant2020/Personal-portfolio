import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sidebar from './components/Sidebar';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out',
    });
  }, []);

  return (
    <main className="main">
      <Sidebar />
      
      <div className="main-content">
        <About />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    </main>
  );
}

export default App;