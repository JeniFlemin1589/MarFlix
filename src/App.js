// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CoverPage from './components/CoverPage'; // Import CoverPage component
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Reachme from './components/ReachMe';
import ServiceDetail from './components/ServiceDetails';
import AboutUs from './components/AboutUs';

function App() {
  // State to track if "Get Started" has been clicked
  const [started, setStarted] = useState(false);

  const handleGetStarted = () => {
    setStarted(true); // Update state when "Get Started" is clicked
  };

  return (
    <Router>
      {/* Show Navbar only if "Get Started" has been clicked */}
      {started && <Navbar />}

      {/* Main Content */}
      <Routes>
        {/* CoverPage Route: Display only if "Get Started" hasn't been clicked */}
        {!started && (
          <Route
            path="/"
            element={<CoverPage onGetStarted={handleGetStarted} />}
          />
        )}

        {/* HomePage Route */}
        {started && <Route path="/home" element={<HomePage />} />}

        {/* Other Routes */}
        {started && <Route path="/movies" element={<Services />} />}
        {started && <Route path="/contact" element={<Reachme />} />}
        {started && <Route path="/about" element={<AboutUs />} />}
        {started && <Route path="/services/:id" element={<ServiceDetail />} />}

        {/* Redirect to CoverPage if no route matches */}
        <Route path="*" element={!started ? <CoverPage onGetStarted={handleGetStarted} /> : <HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
