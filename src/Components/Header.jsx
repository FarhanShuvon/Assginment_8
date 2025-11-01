import React from 'react';
import { FaGithub } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img src={logo} alt="Hero.io Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-semibold text-gray-800">HERO.IO</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#home" className="text-purple-600 font-medium hover:text-purple-700">
            Home
          </a>
          <a href="#apps" className="text-gray-700 font-medium hover:text-purple-600">
            Apps
          </a>
          <a href="#installation" className="text-gray-700 font-medium hover:text-purple-600">
            Installation
          </a>
        </div>

        {/* Contribute Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <FaGithub className="text-xl" />
          <span className="font-medium">Contribute</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
