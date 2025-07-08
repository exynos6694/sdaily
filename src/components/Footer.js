import React from 'react';
import '../style/Navbar.css';
import {Github} from 'lucide-react';




const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-container">
      <div>
        <a href="https://github.com/exynos6694/sdaily"><Github />CSE 25최재성</a><br />
        <p>문의: egsi43026@gmail.com</p>
      </div>
    </div>
    
    </footer>
  );
};

export default Footer;