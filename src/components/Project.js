import React from 'react';
import './Project.css';

const Project = ({ title, description, link, image }) => {
    return (
        <div className="project-card">
            <a href={link || '#'} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="project-image" />
                <div className="project-info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {link && (
                        <p className="project-link">
                            <a href={link} target="_blank" rel="noopener noreferrer">Ver projeto</a>
                        </p>
                    )}
                </div>
            </a>
        </div>    
    );
};

export default Project;
