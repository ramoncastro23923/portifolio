import React from 'react';
import Project from './Project';
import './Projects.css';

import secretWordGif from '../assets/secretWord.gif';
import todoList from '../assets/todoList.gif';
import weatherApp from '../assets/weatherApp.gif';


const projects = [
    { title: 'Secret Word', description: 'Um minigame de adivinhar palavras.', image: secretWordGif, link: 'https://github.com/ramoncastro23923/secretword11' },
    { title: 'Todo List', description: 'Um projeto para monitorar uma lista de afazeres.', image: todoList, link:'https://github.com/ramoncastro23923/todoList' },
    { title: 'WeatherApp', description: 'Um projeto para saber a previsão do tempo.', image: weatherApp, link: 'https://github.com/ramoncastro23923/Sistema-de-Previs-o-do-Tempo' },
];

const Projects = () => {
    return (
        <section id="projects" className="projects" data-aos="fade-up">
            <div className="container">
                <h2>Projetos</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Project key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
