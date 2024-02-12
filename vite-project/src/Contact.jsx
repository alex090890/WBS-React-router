import { Link } from "react-router-dom"

function Contact() {
    return (
        <div>
            <h1>This is the contact page</h1>
            <Link to="/" className="link"><button>Go Home</button></Link>
        </div>
    )
}

export default Contact