// Projects.js
import React from 'react';
import './Projects.css';
import pongPicture from './images/pong-game-card.png';
import useYourBrainPicture from './images/Start Screen.png';
import blackjackPicture from './images/blackjackImage.png';
import portfolioPicture from './images/websiteBackground.png';

function Projects() {
  const projects = [
    {
      name: 'Pong Game',
      image: pongPicture,
      languages: 'Python',
      github: 'https://github.com/NotPhinx/PongProject',
    },
    
    {
      name: 'Use Your Brain',
      image: useYourBrainPicture,
      languages: 'Java',
      github: 'https://github.com/Rayneus/Use-Your-Brain'
    },

    {
      name: 'BlackJackRoguelike',
      image: blackjackPicture,
      languages: 'Python, Pygame',
      github: 'https://github.com/NotPhinx/BlackJackRoguelike'
    },

    {
      name: 'Personal Portfolio',
      image: portfolioPicture,
      languages: 'React, CSS, JavaScript, HTML',
      github: 'https://github.com/NotPhinx/Portfolio'
    }
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      {projects.map((project) => (
        <div className="project-tile" key={project.name}>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>Languages Used: {project.languages}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;