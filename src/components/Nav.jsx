import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>                            
            <Link to="/" className="nav">About Me</Link>                               
            <Link to="/Projects" className="nav">Portfolio</Link>                                
            <Link to="/Resume" className="nav">Resume</Link>            
            <Link to="/Contact" className="nav">Contact</Link>                                
        </div>
    )
}