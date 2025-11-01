import React from 'react';

const Stats = () => {
  return (
    <section className="bg-purple-600 py-16 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {/* Total Downloads */}
          <div>
            <p className="text-lg mb-2 opacity-90">Total Downloads</p>
            <h3 className="text-6xl font-bold mb-2">29.6M</h3>
            <p className="text-sm opacity-80">21% More Than Last Month</p>
          </div>

          {/* Total Reviews */}
          <div>
            <p className="text-lg mb-2 opacity-90">Total Reviews</p>
            <h3 className="text-6xl font-bold mb-2">906K</h3>
            <p className="text-sm opacity-80">46% More Than Last Month</p>
          </div>

          {/* Active Apps */}
          <div>
            <p className="text-lg mb-2 opacity-90">Active Apps</p>
            <h3 className="text-6xl font-bold mb-2">132+</h3>
            <p className="text-sm opacity-80">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
