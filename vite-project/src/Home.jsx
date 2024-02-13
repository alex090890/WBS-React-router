import { Link } from "react-router-dom";

import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
      </nav>
      <h1>This is the home page</h1>
      <Link to="/about" className="link"><button>Click to view our about page</button></Link>
      <Link to="/contact" className="link"><button>Click to view our contact pag</button></Link>
    </div>
  );
}

export default Home;