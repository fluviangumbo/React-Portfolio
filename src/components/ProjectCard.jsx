export default function ProjectCard(props) {
    return (
        <li>
            <img alt={props.imageAlt} src={props.image} />
            <p>{props.title}</p>
            <a href={props.deployed}>Deployed Application</a>
            <a href={props.repository}>GitHub Repository</a>
        </li>
    )
};