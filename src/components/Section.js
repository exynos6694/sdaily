import React from 'react';
import '../style/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Card.css';
import Shuttle1 from './Shuttle1'
import Shuttle2 from './Shuttle2'





const Section = () => {
  return (
    <section class="section">
    
    <div class="container">
      <h2 class="section-title">2025학년도 2학기 셔틀버스 운행시간표</h2><br/>
      <div class="section-grid">
        <div  class="card-box">
          <div class="badge">광운대 방향</div>
          
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