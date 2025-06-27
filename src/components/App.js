import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../style/App.css'
import Navbar from './Navbar';
import Section from './Section';



function App() {
  return (
    <>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<Section />} />
      </Routes>
    </Router>
    
    </>
    
  );
}

export default App;