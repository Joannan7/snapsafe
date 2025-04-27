import React from "react";

const Footer = () => {
  return (
    <footer className="text-light py-4" style={{ backgroundColor: "#343a40" }}>
      <div className="container">
        <div className="row align-items-start">
          
          {/* Brand Section */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold mb-2" style={{ color: "#e0872d" }}>UrbanShare</h6>
            <p className="mb-1 small">
              An easy way for citizens to report non-emergency issues to the City of Austin.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold mb-2" style={{ color: "#e0872d" }}>Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-light text-decoration-none small">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none small">About</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold mb-2" style={{ color: "#e0872d" }}>Contact</h6>
            <p className="small mb-1"><strong>For emergencies:</strong> Call 911.</p>
            <p className="small mb-0"><strong>Non-emergency police matters:</strong> Call 311.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
