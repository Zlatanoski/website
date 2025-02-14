import React from 'react';
import { Menu, Github as GitHub, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Portfolio</h1>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/Zlatanoski" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-600 transition-colors">
              <GitHub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/david-zlatanoski-731747217/" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:d@zlatanoski.tech" className="hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}