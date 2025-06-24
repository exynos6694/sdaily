import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../style/App.css'
import Navbar from './Navbar';
import Section from './Section';
import Main from './main';


function App() {
  return (
    <>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      {/* <Link to="/main">Go to About</Link> */}
    </Router>
    
    </>
    
  );
}

export default App;