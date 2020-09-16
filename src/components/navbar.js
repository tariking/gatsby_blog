import React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span>tariking Blog</span>
      </Link>
      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to="/">home</Link>
        </li>
        <li className="navbar__li">
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;