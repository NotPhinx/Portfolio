import React from "react";
import "./workExp.css";

function workExp() {
    const experiences = [
        {
            name: 'ACCESS Undergraduate Researcher',
            employer: 'University of Kentucky',
            start: 'January 2024',
            end: 'Present',
            description: "Developing user support capabilities, systems and tools, and associated documentation and training materials. Including support for emerging A.I. applications as part of the ACCESS project."
            
        },
        {
            name: 'Golf and Country club Pro Shop Attendant',
            employer: 'Hopkinsville Golf and Country Club',
            start: 'May 2019',
            end: 'August 2021',
            description: "Assisted customers with golf equipment, clothing, and accessories. Managed inventory and restocked shelves. Provided excellent customer service and resolved customer complaints. Operated cash register and processed payments. Maintained a clean and organized pro shop as well as clean the range and provide golf course maintenance."


        }
    ];
    return (
        <div className="workExp"> 
            <h1>Work Experience</h1>
            {experiences.map((experiences) => (
                <div className="experience-tile" key={experiences.name}>
                    <h2>{experiences.name}</h2>
                    <i><h3>{experiences.employer}</h3></i>
                    <p>{experiences.start} - {experiences.end}</p>
                    <p>{experiences.description}</p>
                </div>
            ))}
        </div>

    );  

}

export default workExp;
