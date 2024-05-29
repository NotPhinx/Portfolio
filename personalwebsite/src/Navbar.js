import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import githubImage from './images/githubLogo.png'; // Relative path from current file to image
import linkedinImage from './images/linkedInLogo.png'; // Relative path from current file to image

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>    
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-icons">
        <a href="https://github.com/NotPhinx" target="_blank" rel="noopener noreferrer">
            <img src={githubImage} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/ethan-binkley" target="_blank" rel="noopener noreferrer">
            <img src={linkedinImage} alt="LinkedIn" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;