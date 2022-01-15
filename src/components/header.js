import React from "react";
import SliderIcon from "./slider-icon";
import "../components-css/header.css";
import Logo from "./logo.js";
import NavLinks from "./navigation";

class Header extends React.Component{
    render(){
        return (
            <div>
                <div className="container">
                    <div className="left-side">
                        <SliderIcon/>
                        <Logo/> 
                    </div>
                    <div className="right-side">
                        <NavLinks/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;