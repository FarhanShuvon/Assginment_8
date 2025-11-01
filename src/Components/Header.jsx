import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img src={logo} alt="Hero.io Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-semibold text-gray-800">HERO.IO</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "text-purple-600 font-medium" 
                : "text-gray-700 font-medium hover:text-purple-600"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/apps" 
            className={({ isActive }) => 
              isActive 
                ? "text-purple-600 font-medium" 
                : "text-gray-700 font-medium hover:text-purple-600"
            }
          >
            Apps
          </NavLink>
          <NavLink 
            to="/installation" 
            className={({ isActive }) => 
              isActive 
                ? "text-purple-600 font-medium" 
                : "text-gray-700 font-medium hover:text-purple-600"
            }
          >
            Installation
          </NavLink>
        </div>

        {/* Contribute Button */}
        <a 
          href="https://github.com/FarhanShuvon" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <FaGithub className="text-xl" />
          <span className="font-medium">Contribute</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
