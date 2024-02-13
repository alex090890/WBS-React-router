import { Link } from "react-router-dom"
import { NavLink } from 'react-router-dom'

function About() {
    return (
        <div>
            <nav>
                <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </nav>
            <h1>This is the about page</h1>
            <Link to="/" className="link"><button>Go Home</button></Link>
        </div>
    )
}

export default About