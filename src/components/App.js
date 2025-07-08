import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style/App.css'
import '../style/Navbar.css';
import Navbar from './Navbar';
import Section from './Section';
import Footer from './Footer';


function App() {
  return (
    <>
      {/* <Router>
        <Routes>
        <nav className="navbar">
          <Navbar />
        </nav>
          <Route path="/" element={<Section />} />
        </Routes>
      </Router> */}
      
      <Navbar />
      <Section />
      <Footer />

    </>
    
  );
}

export default App;