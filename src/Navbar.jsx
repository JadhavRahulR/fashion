import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          WEARISTY
        </Link>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Categories</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;