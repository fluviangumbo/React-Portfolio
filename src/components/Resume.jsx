export default function Resume() {
    return (
        <section className="resume" >
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