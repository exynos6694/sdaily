import React from 'react';
import '../style/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="./" className="logo navbar-brand">SDAILY</a>
        <ul className="nav-menu">
          {/* <li className="nav-item">
            <a href="./" className="nav-link active navbar-text">Home</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link navbar-text">식단표</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link navbar-text">con</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link navbar-text">con</a>
          </li> */}
          {/* <li className="nav-item hover-nav">
            <a href="#" className="nav-link navbar-text">con&or;</a>
            <div className="hover-nav-content">
              <a href="/horse" className="hover-nav-item">con</a>
              <a href="/rainbow" className="hover-nav-item">con</a>
              <a href="/slot" className="hover-nav-item">con</a>
            </div>
          </li> */}
        </ul>
      </div>
  </nav>
  );
};

export default Navbar;