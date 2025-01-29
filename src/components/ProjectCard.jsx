export default function ProjectCard(props) {
    return (
        <div className="project-card">
            <img src={props.image} alt={props.imageAlt} className="project-image" />
            <div className="project-content">
                <h3>{props.title}</h3>
                <a href={props.deployed} target="_blank" rel="noopener noreferrer">Deployed App: {props.link}</a>
                <a href={props.repository} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
        </div>
    );
}




// export default function ProjectCard(props) {
//     return (
//         <div className="project-card" style={{
//             backgroundImage: props.image ? `url(${props.image})` : "none",
//             borderRadius: "10px",
//             border: "1px solid var(--charcoal)",
//             margin: "3px",
//             backgroundPosition: "center",
//             backgroundSize: "fill"
//         }}>
//             <p>{props.title}</p>
//             <a href={props.deployed}>Deployed Application: {props.link}</a>
//             <a href={props.repository}>GitHub Repository</a>
//         </div>
//     )
// };