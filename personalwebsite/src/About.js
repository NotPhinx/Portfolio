import React from 'react';
import './About.css';

// About.js

function About() {
    const programmingLanguages = ['C', 'C++', 'HTML', 'CSS', 'ReactJs', 'JavaScript', 'Python', 'Java'];
    const frameworks = ['React', 'Node.js', 'Flask', 'Vue', 'Angular', 'MySQL', 'sqlite3'];


    return (
        <div className="about">
            <h1>About Me</h1>
            <p>I am currently a Senior at the University of Kentucky studying Computer Science. I have a strong passion for Front-End Development but enjoy all aspects of programming.
                I really enjoy Machine Learning and A.I. and have created projects for both. I am currently looking for a job in the field of Software Development. I am a quick learner and am always looking to improve my skills.
            </p>

            <div className="categories">
                <div>
                    <h2>Programming Languages:</h2>
                        <ul>
                            {programmingLanguages.map((language) => (
                                <li key={language}>{language}</li>
                            ))}
                        </ul>
                </div>
                <div>
                    <h2>Database & Frameworks:</h2>
                        <ul>
                            {frameworks.map((framework) => (
                                <li key={framework}>{framework}</li>
                            ))}
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default About;