import React from 'react'
import ProjectCard from './ProjectCard';

export default function Project() {
    const projects = [ // NEED CLI APP SCREENSHOTS
        {
            image: './src/images/Weather-API-App.png',
            imageAlt: 'A weather forecast web application',
            title: 'Weather API Web Application',
            deployed: 'https://weather-api-app-uhqg.onrender.com/',
            repository: 'https://github.com/fluviangumbo/Weather-API-App',
        },
        {
            image: './src/images/Board-Game-Night.png',
            imageAlt: 'A web application for creating groups and organizing board game nights.',
            title: 'Boardgame Night Organizer',
            deployed: 'https://board-game-night.onrender.com',
            repository: 'https://github.com/fluviangumbo/Board-Game-Night',
        },
        {
            // image: './src/images/...',
            imageAlt: 'A CLI application for generating READMEs',
            title: 'CLI README.md Generator',
            deployed: '',
            repository: 'https://github.com/fluviangumbo/CLI-README-Generator',
        },
        {
            // image: './src/images/...',
            imageAlt: 'A CLI app for managing vehicles',
            title: 'TypeScript Vehicle CLI App',
            deployed: '',
            repository: 'https://github.com/fluviangumbo/TS-Vehicle-App',
        },
        {
            // image: './src/images/...',
            imageAlt: 'A CLI app for managing employees and departments',
            title: 'Employee CMS CLI App',
            deployed: '',
            repository: 'https://github.com/fluviangumbo/SQL-CLI-App',
        },
        {
            image: './src/images/Mgmt-Calendar.png',
            imageAlt: 'A weekly organizer for managers/employers',
            title: 'Management Week Organizer',
            deployed: 'https://fluviangumbo.github.io/Management-Calendar/',
            repository: 'https://github.com/fluviangumbo/Management-Calendar',
        },
    ];

    return (
        <section>
            <div className="row">
                {
                    projects.map((project, i) => (
                        <div key={i} className="col col-md-6">
                            <ProjectCard image={project.image} className="projects" imageAlt={project.imageAlt} title={project.title} deployed={project.deployed} repository={project.repository} key={i} />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}