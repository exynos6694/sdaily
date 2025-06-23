import React from 'react';
import '../style/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainlogo from '../assets/media/main.png';
import main from './main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Section = () => {
  return (
    <section class="section">
    <div class="container">
      <div class="section-grid">
        <div>
          <div class="badge">title</div>
          
          <h1 class="section-title">셔틀버스</h1>
          <p class="section-text">셔틀버스 구역입니다</p>
          <br />
          <p id="typing" class="section-text"></p>

        </div>
        
        <div>
          <div class="badge">title</div>
          
          <h1 class="section-title">지하철</h1>
          <p class="section-text">지하철 구역입니다</p>
          <br />
          <p id="typing" class="section-text"></p>

        </div>
      </div>
    </div>
    
    
  </section>
  
  
  );
};

export default Section;