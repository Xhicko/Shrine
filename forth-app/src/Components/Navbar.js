import React from "react";
import { Link, NavLink } from "react-router-dom";
import './index.css'

const Navbar = () => {

    return(
        <nav className="ui raised  padded segment">
            <a  className="ui teal inverted segment">Xhicko</a>
            <div className="ui right floated header">
                 <button className="ui button"> <NavLink to="/">Home </NavLink> </button>
                 <button className="ui button"> <Link to="/Contact">Contact </Link> </button>
                 <button className="ui button"> <Link to="/About">About </Link> </button>
            </div>
        </nav>
    )

}


export default Navbar