import React from 'react';
import { Github, Instagram, Linkedin, Mail, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-72 h-72 md:w-[400px] md:h-[400px] relative rounded-full overflow-hidden border-4 border-gray-800 shadow-xl" data-aos="fade-right">
            <img  
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1" data-aos="fade-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Vedant Pandey
            </h1>
            <h2 className="text-2xl md:text-xl font-medium text-gray-300 mb-6">
              Aspiring Data Scientist
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 text-justify">
              I build intelligent, user-focused solutions by combining data science, software engineering, and modern web technologies. With experience in NLP, deep learning, and full-stack development, I enjoy creating applications that are both impactful and efficient.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://drive.google.com/file/d/1uASwIwFia0D2q0pIN76mjK9Lvk0By1i-/view?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-purple-500/20"
              >
                Download CV
              </a>
            </div>

            <div className="flex space-x-5">
              <a href="https://github.com/vedant22p" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vedant22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/vedant22.p" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:vedant.pandey2202@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://leetcode.com/u/user0352V/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Code size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;