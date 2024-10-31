import ProjectCard from './ProjectCard';

export default function Project() {
    const projects = [
        {
            // image: './images/...',
            imageAlt: 'A weather forecast web application',
            title: 'Weather API Web Application',
            deployed: 'https://weather-api-app-uhqg.onrender.com/',
            repository: 'https://github.com/fluviangumbo/Weather-API-App',
        },
        {
            // image: './images/WHATEVER_IMAGE', // Don't leave this
            imageAlt: 'A web application for creating groups and organizing board game nights.',
            title: 'Boardgame Night Organizer',
            deployed: 'https://board-game-night.onrender.com',
            repository: 'https://github.com/fluviangumbo/Board-Game-Night',
        },
        {
            // image: './images/...'
            imageAlt: 'A CLI application for generating READMEs',
            title: 'CLI README.md Generator',
            deployed: '',
            repository: 'https://github.com/fluviangumbo/CLI-README-Generator',
        },
        {
            // image: './images/...'
            imageAlt: 'A CLI app for managing vehicles',
            title: 'TypeScript Vehicle CLI App',
            deployed: '',
            repository: 'https://github.com/fluviangumbo/TS-Vehicle-App',
        },
        {
            // image: './images/...'
            imageAlt: 'A weekly organizer for managers/employers',
            title: 'Management Week Organizer',
            deployed: 'https://fluviangumbo.github.io/Management-Calendar/',
            repository: 'https://github.com/fluviangumbo/Management-Calendar',
        },
    ];

    return (
        <section>
            <ul>
                {
                    projects.map((project, i) => (
                        <ProjectCard /*image={project.image} */ className="project-card" imageAlt={project.imageAlt} title={project.title} deployed={project.deployed} repository={project.repository} key={i} />
                    ))
                }
            </ul>
        </section>
    );
}