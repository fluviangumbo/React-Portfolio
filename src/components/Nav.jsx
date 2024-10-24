import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>                            
            <Link to="/" className="nav">Portfolio</Link>                                
            <Link to="/About" className="nav">About Me</Link>                               
            <Link to="/Contact" className="nav">Contact</Link>                                
            <Link to="/Resume" className="nav">Resume</Link>            
        </div>
    )
}