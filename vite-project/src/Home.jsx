import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="/about" className="link"><button>Click to view our about page</button></Link>
      <Link to="/contact" className="link"><button>Click to view our contact pag</button></Link>
    </div>
  );
}

export default Home;