import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import downloadIcon from '../assets/icon-downloads.png';
import starIcon from '../assets/icon-ratings.png';
import Loading from './Loading';

const AllApps = () => {
  const navigate = useNavigate();
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/FarhanShuvon/hero-app-json/main/apps.json')
      .then(response => response.json())
      .then(data => {
        setApps(data);
        setFilteredApps(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching apps:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredApps(apps);
    } else {
      const filtered = apps.filter(app =>
        app.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredApps(filtered);
    }
  }, [searchQuery, apps]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Our All Applications</h1>
            <p className="text-gray-600 text-lg">
              Explore All Apps on the Market developed by us. We code for Millions
            </p>
          </div>

          {/* FIXED: Search bar now responsive */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                ({filteredApps.length}) Apps Found
              </h3>
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="search Apps"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredApps.map(app => (
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
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No App Found</h3>
              <p className="text-gray-600">Try searching with different keywords</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllApps;
