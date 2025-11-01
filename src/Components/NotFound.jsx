import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import errorImage from '../assets/error-404.png';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <img 
            src={errorImage} 
            alt="404 Error" 
            className="w-96 h-auto mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Oops, page not found!
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            The page you are looking for is not available.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
