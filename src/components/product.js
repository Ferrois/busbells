import React from "react";
import "../components-css/product.css";
import { Link } from "react-router-dom";

class Product extends React.Component{
    constructor(props){
        super(props);
        this.img = props.src;
        this.item = props.item;
        this.info =  props.info;
        this.price = props.price;
    }
    
    render(){
        return(
            <div>
                <div className="productCard">
                    <img src={this.img ? this.img : "images/default.jpg"}className="productImage"></img>
                    <div className="productText">
                        <p className="productItem">{this.item ? this.item : "This product has been sold"}</p>
                        <p className="productInfo">{this.info ? this.info : "This product sold!!"}</p>
                    </div>
                    <div className="productPrice">
                        <p>SGD {this.price ? this.price : 69.69}</p>
                        <Link to={this.item ? "contact" : "/"} class="productBtn">{this.item ? "Buy" : "NFS"}</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;