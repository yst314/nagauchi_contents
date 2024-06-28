import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const ProfileSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-4 sm:p-8">
      <nav className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">NAGAUCHI</h1>
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <ul className={`sm:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li><a href="#about" className="text-gray-800 hover:text-purple-600">About</a></li>
          <li><a href="#projects" className="text-gray-800 hover:text-purple-600">Projects</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-purple-600">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-gray-600">
            ながうちです
          </p>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Project 1</h3>
              <p className="text-gray-600">Description of Project 1</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Project 2</h3>
              <p className="text-gray-600">Description of Project 2</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact</h2>
          <div className="flex space-x-4">
          <a href="https://github.com/yourusername" className="text-gray-800 hover:text-purple-600">
            <Github />
          </a>
            <a href="https://linkedin.com/in/yourusername" className="text-gray-800 hover:text-purple-600">
              <Linkedin />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-800 hover:text-purple-600">
              <Mail />
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center text-gray-600 mt-8">
        &copy; {new Date().getFullYear()} Nagauchi. All rights reserved.
      </footer>
    </div>
  );
};

export default ProfileSite;