import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="d-flex align-items-center gap-4 m-2">
        <Link to='/' className="nav-link">iCoder</Link>
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/about' className="nav-link">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;

