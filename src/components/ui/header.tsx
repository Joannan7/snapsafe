'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="container-fluid bg-light py-3 border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <h1 className="text-warning mb-0" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          UrbanShare
        </h1>

        {/* Navigation Menu */}
        <nav>
          <ul className="d-flex list-unstyled mb-0">
            <li className="mx-3">
              <Link href="/" className="text-dark text-decoration-none px-3 py-2 rounded hover-bg-primary">
                Home
              </Link>
            </li>
            <li className="mx-3">
              <Link href="/about" className="text-dark text-decoration-none px-3 py-2 rounded hover-bg-primary">
                About
              </Link>
            </li>
            <li className="mx-3">
              <Link href="/map" className="text-dark text-decoration-none px-3 py-2 rounded hover-bg-primary">
                Map
              </Link>
            </li>
          </ul>
        </nav>

        {/* Submit Button */}
        <Link href="/submit-report">
          <button className="btn btn-success rounded-pill px-4 py-2">
            Submit Report
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
