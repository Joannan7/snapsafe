'use client';

import React from 'react';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

// Simulate loading of map from the backend (Placeholder)
const Map = () => {
  return (
    <div style={{ textAlign: 'center', padding: '10px', border: '1px dashed #ccc', borderRadius: '10px' }}>
      <div style={{ width: '100%', height: '100%', backgroundColor: '#e0e0e0', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe src="https://urbansharegraph-production.up.railway.app/" style={{width: '100%', height: '73.5vh'}}></iframe>
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <div>
      <Header />
      <Map />
      <Footer />
    </div>
  );
};

export default Layout;
