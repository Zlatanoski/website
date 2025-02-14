import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Computer Science Student & <span className="text-blue-600">passionate to be a Software Developer</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Passionate about building innovative solutions and exploring new technologies. 
              Currently pursuing a Computer Science degree in University of Primorska with a focus on learning new languages and web development.
            </p>
            <div className="flex space-x-4">
              <a href="#projects" 
                 className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a href="#contact" 
                 className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="IMG_6984.jpg"
              alt="Professional headshot"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}