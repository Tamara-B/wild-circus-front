import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  const [activePage, setActivePage] = React.useState("About Us");
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="header">
      <Link to="/">
        <h1>Wild Circus</h1>
      </Link>
      <div className={menuOpen ? "open header-link" : "header-link"}>
        <Link to="/">
          <h2
            className={
              activePage === "About Us"
                ? "active header-link-item"
                : "header-link-item"
            }
            onClick={(e) => setActivePage(e.target.value)}
          >
            About Us
          </h2>
        </Link>
        <Link to="/performances">
          <h2
            className={
              activePage === "Performances"
                ? "active header-link-item"
                : "header-link-item"
            }
            onClick={(e) => setActivePage(e.target.value)}
          >
            Performances
          </h2>
        </Link>
        <Link to="/prices_and_booking">
          <h2
            className={
              activePage === "Prices&Booking"
                ? "active header-link-item"
                : "header-link-item"
            }
            onClick={(e) => setActivePage(e.target.value)}
          >
            Prices&Booking
          </h2>
        </Link>
      </div>
      <label
        className="hamburger-menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        {!menuOpen ? "☰" : "x"}
      </label>
    </header>
  );
}

export default Header;
