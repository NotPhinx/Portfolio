import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Portfolio/" element={<Home />} />
        <Route path="/Portfolio/about" element={<About />} />
        <Route path="/Portfolio/projects" element={<Projects />} />
        <Route path="/Portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}


export default App;
