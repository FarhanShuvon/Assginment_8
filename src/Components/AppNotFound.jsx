import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import errorImage from '../assets/App-Error.png';

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
   
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
        <div className="text-center max-w-2xl">
       
          <div className="mb-8">
            <img 
              src={errorImage} 
              alt="App Not Found" 
              className="w-full max-w-lg mx-auto h-auto"
            />
          </div>

          {/* Error Text */}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            The App you are requesting is not found on our system. please try another apps
          </p>

          {/* Go Back Button */}
          <button
            onClick={() => navigate('/apps')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;
