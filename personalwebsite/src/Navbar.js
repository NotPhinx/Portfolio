import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import githubImage from './images/githubLogo.png'; // Relative path from current file to image
import linkedinImage from './images/linkedInLogo.png'; // Relative path from current file to image

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>    
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/workExp" activeClassName="active">Work Experience</NavLink></li>
          <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
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
