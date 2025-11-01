import React from 'react';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import heroImage from '../assets/hero.png';

const Banner = () => {
  return (
    <section className="bg-gray-100  px-6">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          We Build <br /><span className="text-purple-600">Productive </span> Apps
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-8">
          At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        {/* Store Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-lg flex items-center gap-3 hover:shadow-lg transition-shadow">
            <FaGooglePlay className="text-2xl text-blue-600" />
            <span className="font-medium text-gray-800">Google Play</span>
          </button>
          <button className="bg-white border border-gray-300 px-6 py-3 rounded-lg flex items-center gap-3 hover:shadow-lg transition-shadow">
            <FaAppStore className="text-2xl text-blue-600" />
            <span className="font-medium text-gray-800">App Store</span>
          </button>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto">
          <img src={heroImage} alt="App Preview" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
