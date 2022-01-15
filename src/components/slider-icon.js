import React from "react"
import "../components-css/slider-icon.css"


class SliderIcon extends React.Component{
    toggleSlider = () => {
        // sliderIcon state toggler
        if (this.state.sliderActive === true){
            this.setState({
                sliderActive: false
            });
        }else{
            this.setState({
                sliderActive: true
            });
        }
    }

    state = {
        sliderActive : false
    }

    render(){
        // const { sliderActive } = this.state;

        return(
            <div>
                <div className={`sliderTray ${this.state.sliderActive ? "isActive" : "isHidden"}`}></div>
                <div className={`sliderIcon ${this.state.sliderActive ? "isActive" : "isHidden"}`}onClick={this.toggleSlider}>
                    <div className="sliderBar"></div>
                </div>
            </div>
        )
    }
}

// var sliderIcon = document.querySelector(".sliderIcon");
// sliderIcon.addEventListener("click",() => {
//     alert("ferrois");
// })

export default SliderIcon

