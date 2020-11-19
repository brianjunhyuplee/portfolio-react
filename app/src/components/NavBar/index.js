import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
function Navbar() {
    return(
        <nav class="navbar navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li class="navbar-item">
                    <Link to="/">Home</Link>
                </li>
                <li class="navbar-item">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li class="navbar-item">
                    <Link to="/contact">Contact</Link>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar;