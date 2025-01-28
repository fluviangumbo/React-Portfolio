export default function Resume() {
    return (
        <section className="resume" >
            <div className="resume-link">
                <a href="https://docs.google.com/document/d/1W8q_r5Q_HEGPfssyZ4NbSgia3fyX4UK0KOtYzU5i4nc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                    See My Resume!
                </a>
            </div>
            <div className="skills">
                <div className="skill-category">
                    <h3>Front-End Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Responsive Design and SEO</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3>Back-End Skills</h3>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>PostgresQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                        <li>Testing (Vitest/Cypress)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}