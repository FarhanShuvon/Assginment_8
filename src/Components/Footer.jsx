import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src={logo} alt="Hero.io Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-semibold">HERO.IO</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building innovative apps designed to make everyday life simpler, smarter, and more exciting.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <FaFacebook />
              </a>
              <a href="https://github.com/FarhanShuvon" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <FaGithub />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apps" className="text-gray-400 hover:text-purple-500 transition-colors">
                  All Apps
                </Link>
              </li>
              <li>
                <Link to="/installation" className="text-gray-400 hover:text-purple-500 transition-colors">
                  My Installations
                </Link>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Apps */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Apps</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Forest: Focus Timer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  SmPlan: Task Manager
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Alarmy: Alarm Clock
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Notion: Productivity
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Headspace: Meditation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MdEmail className="text-purple-500 text-xl mt-1" />
                <div>
                  <p className="text-gray-400">contact@hero.io</p>
                  <p className="text-gray-400">support@hero.io</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MdPhone className="text-purple-500 text-xl mt-1" />
                <div>
                  <p className="text-gray-400">+880 1234-567890</p>
                  <p className="text-gray-400">+880 9876-543210</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-purple-500 text-xl mt-1" />
                <p className="text-gray-400">
                  Dhaka, Bangladesh
                  <br />
                  Available 24/7
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © 2025 HERO.IO - All rights reserved
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-purple-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-purple-500 transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-purple-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
