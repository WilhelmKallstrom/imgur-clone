import { Link } from "react-router-dom";
import cat from '../cat.jpeg';

function Home() {
    return (
        <div className="container mt-100">
            <p className="text-center fw-bold display-1">Upload your images<br />with ease</p>

            <div className="d-flex justify-content-center mb-5">
            <Link to="/upload" className="btn-lg btn btn-success fw-bold bg-green">New Post</Link>
            </div>

            <img src={cat} className="w-100 rounded-3 shadow-lg mb-5"/>

            <p className="text-center fw-bold small">Made with ❤️ by Wilhelm Källström</p>

        </div>
    );
}

export default Home;