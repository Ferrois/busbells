import React from "react";
import "../components-css/footer.css"

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="footer">
                    <div className="social-container">
                        <div className="social-seller">
                            <p> Follow/Subscribe ( Seller ) {">>>"}</p>
                            <div className="social-instagram">
                                <a href="https://instagram.com/_9.8.4.8_?utm_medium=copy_link" class="fab fa-instagram fa-3x"></a>
                            </div>
                            <div className="social-youtube">
                                <a href="https://www.youtube.com/channel/UCSujG7v3R3YHq33tpJJz7XQ" class="fab fa-youtube fa-3x"></a>
                            </div>
                        </div>
                        <div className="social-ferrois">
                            <p> Follow/Subscribe ( Coder ) {">>>"}<br/>
                                "Feel free to message me <br/>if you need my help!"
                            </p>
                            <div className="social-instagram">
                                <a href="https://instagram.com/ferroisss?utm_medium=copy_link" class="fab fa-instagram fa-3x"></a>
                            </div>
                            <div className="social-youtube">
                                <a href="https://www.youtube.com/channel/UCv7_eNTdjGMiQ2bCduHpn_Q" class="fab fa-youtube fa-3x"></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyrights">
                         ©Copyrights BusBells
                        <br/>
                         Please contact us if your interested in purchasing any of the products.
                        <br/>
                         Please contact us if your interested in receiving my help in creating a website like this.
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;