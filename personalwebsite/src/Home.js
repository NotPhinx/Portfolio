import React from 'react';

import './Home.css'; 

function Home() {
    const name = "Ethan Binkley";

    return (
        <div className="home">
            <h1 className="title">{name}</h1>
            <h2 className="Occupation">Software Developer</h2>
        </div>
    );
}

export default Home;