import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import downloadIcon from '../assets/icon-downloads.png';
import starIcon from '../assets/icon-ratings.png';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    loadInstalledApps();
  }, []);

  const loadInstalledApps = () => {
    const apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalledApps(apps);
  };

  const handleUninstall = (appId) => {
    const apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    const updatedApps = apps.filter(app => app.id !== appId);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    
    toast.success('App uninstalled successfully!', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...installedApps];
    
    if (order === 'high-low') {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (order === 'low-high') {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }
    
    setInstalledApps(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Your Installed Apps</h1>
            <p className="text-gray-600 text-lg">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          {/* FIXED: Responsive layout */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {installedApps.length} Apps Found
              </h3>
            </div>

            <div className="relative w-full md:w-auto">
              <select
                value={sortOrder}
                onChange={(e) => handleSort(e.target.value)}
                className="w-full md:w-auto px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              >
                <option value="default">Sort By Size</option>
                <option value="high-low">High-Low</option>
                <option value="low-high">Low-High</option>
              </select>
            </div>
          </div>

          {installedApps.length > 0 ? (
            <div className="space-y-4">
              {installedApps.map(app => (
                <div
                  key={app.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center justify-between gap-4"
                >
                  <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="text-center md:text-left">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {app.title}
                      </h3>
                      <div className="flex items-center gap-4 justify-center md:justify-start">
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
                        <span className="text-sm text-gray-600">{app.size} MB</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full md:w-auto"
                  >
                    Uninstall
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Installed Apps</h3>
              <p className="text-gray-600">Install some apps to see them here</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Installation;
