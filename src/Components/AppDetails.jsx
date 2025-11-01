import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppNotFound from './AppNotFound.jsx';
import Loading from './Loading.jsx';

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/FarhanShuvon/hero-app-json/refs/heads/main/apps.json')
      .then(response => response.json())
      .then(data => {
        const foundApp = data.find(app => app.id === parseInt(id));
        setApp(foundApp);
        setLoading(false);
        
        // Check if app is already installed (only if app exists)
        if (foundApp) {
          const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
          const isInstalled = installedApps.some(installedApp => installedApp.id === foundApp.id);
          setInstalled(isInstalled);
        }
      })
      .catch(error => {
        console.error('Error fetching app:', error);
        setLoading(false);
      });
  }, [id]);

  const handleInstall = () => {
    // Get existing installed apps
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    
    // Add current app to installed apps
    installedApps.push(app);
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
    
    setInstalled(true);
    toast.success('App installed successfully!', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  if (loading) {
    return <Loading />;
  }

  // Show AppNotFound component if app doesn't exist
  if (!app) {
    return <AppNotFound />;
  }

  const chartData = app.ratings.map(rating => ({
    name: rating.name,
    count: rating.count
  }));

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <ToastContainer />
      <div className="container mx-auto">
        <div className="bg-white rounded-lg p-8 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center items-start">
            <img 
              src={app.image} 
              alt={app.title} 
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{app.title}</h1>
            <p className="text-gray-600 mb-6">
              Developed by <span className="text-purple-600 font-medium">{app.companyName}</span>
            </p>

            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Downloads</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {app.downloads >= 1000000 
                    ? `${(app.downloads / 1000000).toFixed(0)}M` 
                    : `${(app.downloads / 1000).toFixed(0)}K`}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-gray-600">Average Ratings</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{app.ratingAvg}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                  <span className="text-sm text-gray-600">Total Reviews</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {app.reviews >= 1000 ? `${(app.reviews / 1000).toFixed(0)}K` : app.reviews}
                </p>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={installed}
              className={`${
                installed 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-500 hover:bg-green-600'
              } text-white px-8 py-3 rounded-lg font-medium transition-colors`}
            >
              {installed ? `Installed (${app.size} MB)` : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ratings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
