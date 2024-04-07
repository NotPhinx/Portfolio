import React from 'react';
import './App.css';
import blackGoldfishImage from './images/blackgoldfish2_600x400.png';
import githubMarkImage from './images/GitHub-Mark-ea2971cee799-removebg-preview.png';
import linkedInImage from './images/LI-In-Bug-removebg-preview.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={blackGoldfishImage} style={{ backgroundColor: 'transparent' }} />
        <h1>Ethan Binkley</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Hi, my name is Ethan Binkley and welcome to my portfolio. I am a Computer Science student at the University of Kentucky and have a strong interest in Front-end development as well as game design but I am open to learn anything!</p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>Pong Project</li>
            <li>BlackJack Rogue-like</li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>

          <button className="button" onClick={() => window.location.href = 'https://github.com/NotPhinx'} style={{ backgroundColor: 'black' }}>
            <img src={githubMarkImage} style={{ width: '100px', height: '100px', backgroundColor: 'black' }} />
          </button>
          <button className="button" onClick={() => window.location.href = 'https://www.linkedin.com/in/ethan-binkley-1515102b2/'} style={{ backgroundColor: 'black' }}>
            <img src={linkedInImage} style={{ width: '100px', height: '100px', backgroundColor: 'black' }} />
          </button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Ethan Binkley</p>
      </footer>
    </div>
  );
}


export default App;
