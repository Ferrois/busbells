import React from "react";
import "../components-css/logo.css";

class Logo extends React.Component{
    render(){
        return(
            <div className="logo-container">
                <p className="logo">Bus Bells</p>
                <i className="fas fa-bell fa-2x"></i>
            </div>
        )
    }
}

export default Logo;