'use client'; // Ensure this directive is present

import React, { useState } from "react";

const Report = () => {
  const [mode, setMode] = useState<"submit" | "track">("submit");
  const [issueCategory, setIssueCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<FileList | null>(null);

  const handleModeToggle = () => {
    setMode(mode === "submit" ? "track" : "submit");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhotos(event.target.files);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission for submitting a report
    console.log({
      issueCategory,
      location,
      description,
      photos,
    });
  };

  return (
    <div className="container py-5" style={{ maxWidth: "50%" }}>
      {/* Mode Toggle */}
      <div className="text-center mb-5">
        <div className="d-flex justify-content-center gap-3 mb-3">
          <button
            onClick={() => setMode("submit")}
            className={`btn ${mode === "submit" ? "btn-primary" : "btn-secondary"}`}
            style={{ minWidth: "150px" }}
          >
            Submit a Report
          </button>
          <button
            onClick={() => setMode("track")}
            className={`btn ${mode === "track" ? "btn-primary" : "btn-secondary"}`}
            style={{ minWidth: "150px" }}
          >
            Track a Report
          </button>
        </div>
      </div>

      {/* Mode-Specific Form */}
      {mode === "submit" ? (
        <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm" style={{ backgroundColor: "#edebdd" }}>
          <h3 className="mb-4 text-center text-dark">Submit a Report</h3>
          <p className="text-center text-muted mb-4">
            Report non-emergency issues to the City of Austin.
          </p>

          {/* Issue Category */}
          <div className="mb-3">
            <label htmlFor="issueCategory" className="form-label">Issue Category (required)</label>
            <select
              id="issueCategory"
              className="form-select"
              required
              value={issueCategory}
              onChange={(e) => setIssueCategory(e.target.value)}
            >
              <option value="">Select an issue</option>
              <option value="trash">Trash Pickup</option>
              <option value="streetlight">Streetlight Issues</option>
              <option value="potholes">Potholes</option>
              <option value="public-safety">Public Safety</option>
              <option value="animal-control">Animal Control</option>
              {/* Add more options here */}
            </select>
          </div>

          {/* Location */}
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location (required)</label>
            <input
              type="text"
              id="location"
              className="form-control"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description (required)</label>
            <textarea
              id="description"
              className="form-control"
              rows={4}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Photo Upload */}
          <div className="mb-3">
            <label htmlFor="photos" className="form-label">Upload Photos</label>
            <input
              type="file"
              id="photos"
              className="form-control"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">Submit Report</button>
        </form>
      ) : (
        <form className="p-4 rounded shadow-sm" style={{ backgroundColor: "#edebdd" }}>
          <h3 className="mb-4 text-center text-dark">Track a Report</h3>
          <p className="text-center text-muted mb-4">
            Enter your reference number to track the status of your report.
          </p>

          {/* Reference Number */}
          <div className="mb-3">
            <label htmlFor="referenceNumber" className="form-label">Reference Number</label>
            <input
              type="text"
              id="referenceNumber"
              className="form-control"
              placeholder="Enter your reference number"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">Track Report</button>
        </form>
      )}
    </div>
  );
};

export default Report;
