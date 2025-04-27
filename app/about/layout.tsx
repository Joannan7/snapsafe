'use client'; 

import React from 'react';
import Link from 'next/link';
import Header from "@/components/ui/header";
import WhyUse from "@/components/ui/whyUse";
import Footer from "@/components/ui/footer";

const AboutLayout = () => {
  return (
    <div>
      {/* Use the Header component here */}
      <Header />
      

      {/* Main content */}
      <main style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        <h2>Our Mission</h2>
        <p>
          UrbanShare is a citizen-focused platform designed to streamline the reporting of non-emergency issues to the City of Austin. Our mission is to empower residents to actively participate in maintaining and improving their neighborhoods by providing an easy-to-use interface for reporting problems like potholes, graffiti, streetlight outages, and other common urban issues.
        </p>

        <h3>How It Works</h3>
        <p>
          Austin Report Hub makes reporting issues simple:
        </p>
        <ul>
          <li>Submit a detailed report through our easy-to-use form</li>
          <li>Receive a confirmation with your unique reference number</li>
          <li>Track the status of your report as city staff address the issue</li>
        </ul>
        <p>
          Your reports are sent directly to the appropriate department within the city government, ensuring that each issue receives attention from the right teams.
        </p>

        <h3>What to Report</h3>
        <p>
          You can use UrbanShare to report non-emergency issues such as:
        </p>
        <ul>
          <li>Potholes and road damage</li>
          <li>Streetlight outages</li>
          <li>Graffiti</li>
          <li>Illegal dumping or trash</li>
          <li>Sidewalk issues</li>
          <li>Traffic signs problems</li>
          <li>And other non-emergency concerns</li>
        </ul>
        <p>
          Remember: For emergencies, always call 911.
        </p>

        <h3>Privacy & Data Use</h3>
        <p>
          When you submit a report, we collect only the information necessary to address the issue. Your personal information is not being collected.
        </p>

        <Link href="/">
          <button className="btn btn-primary rounded-pill">
            Submit a Report
          </button>
        </Link>

      </main>
      <WhyUse />
      <Footer />
    </div>
  );
};

export default AboutLayout;
