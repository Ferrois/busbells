import React from "react";
import { Link } from "react-router-dom";

class NavLinks extends React.Component{

    render(){
        return(
            <div className="navLinks">
                <Link to="/" className="navBtn">Home</Link>
                <Link to="/contact" className="navBtn">Contact Us</Link>
            </div>

        )
    }
}

export default NavLinks;