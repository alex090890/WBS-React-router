import { Link } from "react-router-dom"

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
            <Link to="/" className="link"><button>Go Home</button></Link>
        </div>
    )
}

export default About