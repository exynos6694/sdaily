import React from 'react';
import '../style/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Card.css';
import mainlogo from '../assets/media/main.png';
import Shuttle1 from './Shuttle1'
import Shuttle2 from './Shuttle2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





const Section = () => {
  return (
    <section class="section">
    
    <div class="container">
      <h2 class="section-title">하계방학 운행일정 06.23. ~ 08.29</h2><br/>
      <div class="section-grid">
        <div  class="card-box">
          <div class="badge">광운대</div>
          
          <Shuttle1 />

        </div>
        
        <div  class="card-box">
          <div class="badge">신창</div>
          
          <Shuttle2 />

        </div>
      </div>
    </div>
    
    
  </section>
  
  
  );
};

export default Section;