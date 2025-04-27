import React from "react";

const WhyUse = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#e6e5d5" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="h2 fw-bold" style={{ color: "#5c4033" }}>
            Why Use UrbanShare?
          </h1>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4 d-flex">
            <div className="p-4 bg-white shadow-sm text-center w-100 d-flex flex-column justify-content-start rounded-3">
              <div className="fw-bold" style={{ color: "#5c4033" }}>Easy Reporting</div>
              <div className="small text-muted mt-3">
                Submit issues in minutes with our user-friendly form. No account required.
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="p-4 bg-white shadow-sm text-center w-100 d-flex flex-column justify-content-start rounded-3">
              <div className="fw-bold" style={{ color: "#5c4033" }}>Status Updates</div>
              <div className="small text-muted mt-3">
                Easily track the status of your submitted reports with your reference number.
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 d-flex">
            <div className="p-4 bg-white shadow-sm text-center w-100 d-flex flex-column justify-content-start rounded-3">
              <div className="fw-bold" style={{ color: "#5c4033" }}>Better Austin</div>
              <div className="small text-muted mt-3">
                Help make our city cleaner, safer, and more enjoyable for everyone.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUse;
