import { Link } from "react-router-dom";
import "./navbar.css";


function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/visit_us">visit us</Link>
          </li>
          <li>
            <Link to="/ambulance">Ambulance</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
      
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
