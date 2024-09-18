import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Portfolio</Link>
                </li>
                <li>
                    <Link to="/About">About Me</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Resume">Resume</Link>
                </li>
            </ul>
        </div>
    )
}