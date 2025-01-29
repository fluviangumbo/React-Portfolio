import React from 'react'
import ProjectCard from './ProjectCard';

export default function Project() {
    const projects = [
        {
            image: './src/images/Weather-API-App.png',
            imageAlt: 'A weather forecast web application',
            title: 'Weather API Web Application',
            deployed: 'https://weather-api-app-uhqg.onrender.com/',
            repository: 'https://github.com/fluviangumbo/Weather-API-App',
            link: 'Weather App'
        },
        {
            image: './src/images/Board-Game-Night.png',
            imageAlt: 'A web application for creating groups and organizing board game nights.',
            title: 'Boardgame Night Organizer',
            deployed: 'https://board-game-night.onrender.com',
            repository: 'https://github.com/fluviangumbo/Board-Game-Night',
            link: 'Hatching Meeples'
        },
        {
            image: './src/images/readme-gen-screenshot.png',
            imageAlt: 'A CLI application for generating READMEs',
            title: 'CLI README.md Generator',
            deployed: 'N/A',
            repository: 'https://github.com/fluviangumbo/CLI-README-Generator',
            link: 'N/A'
        },
        {
            image: './src/images/ts-vehicle-screenshot.png',
            imageAlt: 'A CLI app for managing vehicles',
            title: 'TypeScript Vehicle CLI App',
            deployed: 'N/A',
            repository: 'https://github.com/fluviangumbo/TS-Vehicle-App',
            link: 'N/A'
        },
        {
            image: './src/images/SQL-CMS-app-screenshot.png',
            imageAlt: 'A CLI app for managing employees and departments',
            title: 'Employee CMS CLI App',
            deployed: 'N/A',
            repository: 'https://github.com/fluviangumbo/SQL-CLI-App',
            link: 'N/A'
        },
        {
            image: './src/images/Mgmt-Calendar.png',
            imageAlt: 'A weekly organizer for managers/employers',
            title: 'Management Week Organizer',
            deployed: 'https://fluviangumbo.github.io/Management-Calendar/',
            repository: 'https://github.com/fluviangumbo/Management-Calendar',
            link: 'Management Calendar'
        },
    ];

    return (
        <div className="project-container">
            {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
            ))}
        </div>
    );

    // return (
    //     <div className="row">
    //         {
    //             projects.map((project, i) => (
    //                 <div key={i} className="col col-md-6">
    //                     <ProjectCard className="projects" image={project.image} imageAlt={project.imageAlt} title={project.title} deployed={project.deployed} repository={project.repository} link={project.link} key={i} />
    //                 </div>
    //             ))
    //         }
    //     </div>
    // );
}