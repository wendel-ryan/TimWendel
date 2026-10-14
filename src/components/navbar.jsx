import "../styles/navbar.css";
import Bars from "/bars.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navToggle = () => {
    const menu = document.getElementById("nav-items");
    console.log("toggle");
    console.log(menu.style.display);
    if (menu.style.display == "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  };

  return (
    <nav className="navbar">
      <img className="nav-logo" src="none" alt="None" />
      <ul className="nav-items" id="nav-items">
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/history">
            Services
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/menu">
            Testimonials
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <img className="bars" src={Bars} alt="None" onClick={() => navToggle()} />
    </nav>
  );
}
