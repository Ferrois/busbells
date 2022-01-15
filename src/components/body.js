import React from "react";
import "../components-css/body.css"
import bootstrap from "bootstrap";
import Product from "./product"

class Body extends React.Component{

    render(){
        return(
            <div>
                <div>
                    <img className="bellImage" src="/images/busbell.jpg"></img>
                    <div className="imageOverlay">
                        <p>Singaporean Bus Collectibles</p>
                    </div>
                </div>
                <div className="infoContainer">
                    <div className="infoCard">
                        <i className="fas fa-bus fa-5x"></i>
                        <p className="infoHeader">Authentic Bus Products</p>
                        <p className="infoText">We pledge to only sell authentic Singapore Bus related products, such as license plates or door bells. Our products are never fake.</p>
                    </div>
                    <div className="infoCard">
                        <i className="fas fa-fighter-jet fa-5x"></i>
                        <p className="infoHeader">Fuss-free, Fast<br/>Meet-up/Delivery</p>
                        <p  className="infoText">We meet-up with you to sell our products in a flexible, fast and fuss-free manner so that you do not have to go through the hassle</p>
                    </div>
                </div>
                <div className="productContainer">
                    <div className="productHeader">Our Products</div>
                    <div className="productWrapper">
                        <Product src="images/busbell.jpg" item="Bus Bell Switch" info="Stop button that can be pressed (doesnt come with wiring)" price="10.00"/>
                        <Product src="images/license.jpg" item="License Plate (7474)" info="It stands for 'Go die' in Chinese" price="60.00"/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Body