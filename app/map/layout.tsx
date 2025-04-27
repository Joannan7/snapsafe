'use client';

import React from 'react';

// Simulate loading of map from the backend (Placeholder)
const Map = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', border: '1px dashed #ccc', borderRadius: '10px' }}>
      <h2>Map Placeholder</h2>
      <p>This area will eventually display a map with dynamic data from the backend.</p>
      <div style={{ width: '100%', height: '400px', backgroundColor: '#e0e0e0', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span>Map will be displayed here once backend data is available.</span>
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <div>
      <h1>Map</h1>
      {/* Placeholder content */}
      <Map />
      <p>Data for this map will come from the backend once it's ready. This is just a temporary placeholder.</p>
    </div>
  );
};

export default Layout;
