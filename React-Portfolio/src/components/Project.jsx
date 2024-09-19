import ProjectCard from './ProjectCard';

export default function Project() {
    const projects = [
        {
            image: './images/WHATEVER_IMAGE', // Don't leave this
            title: 'PostgreSQL CMS for Employers',
            deployed: '',
            repository: 'https://github.com/fluviangumbo/SQL-CLI-App',
        },
        {
            image: './images/...',
            title: 'Weather API Web Application',
            deployed: 'https://weather-api-app-uhqg.onrender.com/',
            repository: 'https://github.com/fluviangumbo/Weather-API-App',
        },
    ];

    return (
        <section>
            <ul>
                {
                    projects.map((project) => {
                        <ProjectCard image={project.image} title={project.title} deployed={project.deployed} repository={project.repository} />
                    })
                }
            </ul>
        </section>
    );
}