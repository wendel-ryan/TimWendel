import "../styles/footer.css";
import Linkedin from "/linkedin.png";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="social-icons">
        <img className="footer-icon" src={Linkedin} alt="none" />
      </div>
      <ul className="footer-items" id="footer-items">
        <li>
          <Link className="footer-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="footer-link" to="/about">
            History
          </Link>
        </li>
        <li>
          <Link className="footer-link" to="/about">
            Home
          </Link>
        </li>
        <li>
          <Link className="footer-link" to="/about">
            Menu
          </Link>
        </li>
        <li>
          <Link className="footer-link" to="/about">
            Contact
          </Link>
        </li>
      </ul>
      <p>Proudly Serving Mason City for over X years.</p>
    </footer>
  );
}
