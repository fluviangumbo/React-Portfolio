export default function ProjectCard(props) {
    return (
        <div className="project-card" style={{
            backgroundImage: props.image ? `url(${props.image})` : "none",
            borderRadius: "10px",
            border: "1px solid var(--charcoal)",
            margin: "3px",
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}>
            <p>{props.title}</p>
            <a href={props.deployed}>Deployed Application</a>
            <a href={props.repository}>GitHub Repository</a>
        </div>
    )
};