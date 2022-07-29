import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar bg-dark2 fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand mb-0 fw-bold text-white">Imgar</Link>
                <Link to="/upload" className="btn btn-success fw-bold bg-green">New Post</Link>
            </div>
        </nav>
    );
}

export default Navbar;