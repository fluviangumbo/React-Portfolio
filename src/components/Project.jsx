import ProjectCard from './ProjectCard';

export default function Project() {
    const projects = [
        {
            // image: './images/WHATEVER_IMAGE', // Don't leave this
            imageAlt: 'A CLI application deployed using PostgreSQL',
            title: 'PostgreSQL CMS for Employers',
            deployed: '',
            repository: 'https://github.com/fluviangumbo/SQL-CLI-App',
        },
        {
            // image: './images/...',
            imageAlt: 'A weather forecast web application',
            title: 'Weather API Web Application',
            deployed: 'https://weather-api-app-uhqg.onrender.com/',
            repository: 'https://github.com/fluviangumbo/Weather-API-App',
        },
    ];

    return (
        <section>
            <ul>
                {
                    projects.map((project, i) => (
                        <ProjectCard /*image={project.image} */ imageAlt={project.imageAlt} title={project.title} deployed={project.deployed} repository={project.repository} key={i} />
                    ))
                }
            </ul>
        </section>
    );
}