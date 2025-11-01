import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import downloadIcon from '../assets/icon-downloads.png';
import starIcon from '../assets/icon-ratings.png';
import Loading from './Loading.jsx';

const AppSection = () => {
  const navigate = useNavigate();
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/FarhanShuvon/hero-app-json/main/apps.json')
      .then(response => response.json())
      .then(data => {
        setApps(data.slice(0, 8));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching apps:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Trending Apps</h2>
          <p className="text-gray-600 text-lg">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {apps.map(app => (
            <div 
              key={app.id}
              onClick={() => navigate(`/app/${app.id}`)}
              className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="bg-gray-200 rounded-lg mb-4 h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-gray-900 mb-3 text-base">
                {app.title}
              </h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-green-500">
                  <img src={downloadIcon} alt="downloads" className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {app.downloads >= 1000000 
                      ? `${(app.downloads / 1000000).toFixed(0)}M` 
                      : `${(app.downloads / 1000).toFixed(0)}K`}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-orange-500">
                  <img src={starIcon} alt="rating" className="w-4 h-4" />
                  <span className="text-sm font-medium">{app.ratingAvg}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => navigate('/apps')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-lg font-medium transition-colors"
          >
            Show All
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
