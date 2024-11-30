import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Using Routes instead of Switch
import './App.css';
import Header from './header'; // Import the Header component
import PhotoGallery from './gallery'; // Import the PhotoGallery component
import MeetTheArtist from './meetTheArtist.js'; // Import the MeetTheArtist component
import CommissionRequest from './commision';  // Import CommissionRequest component
import ContactUs from './contact.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        {/* Define routes for different pages */}
        <Routes>
          {/* Default route (Home) */}
          <Route path="/" element={<PhotoGallery />} />

          {/* Commission Request route */}
          <Route path="/commission" element={<CommissionRequest />} />

          {/* You can add more routes for other pages */}
          <Route path="/portfolio" element={<PhotoGallery />} />
    
          <Route path="/meettheartist" element={<MeetTheArtist />} /> {/* Route for Meet the Artist */}
    
          <Route path="/contact" element=
          {<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;