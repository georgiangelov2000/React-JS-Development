import React, { Component } from "react";
import left from "./../resources/left.png";
import right from "./../resources/right.png";

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      focusedEpId: 0,
      imgUrl: "",
    };
    this.getNewEp=(id)=>{
        fetch("http://localhost:9999/episodePreview/" +id)
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        this.setState({focusedEpId:parsedData.id})
        this.setState({ imgUrl: parsedData.url });
      });
    }
  }

  componentDidMount() {
    fetch("http://localhost:9999/episodePreview/" + this.state.focusedEpId)
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((parsedData) => {
        this.setState({ imgUrl: parsedData.url });
      });
  }

  render() {
    return (
      <div className="mySlider">
        <img onClick={()=>{this.getNewEp(Number(this.state.focusedEpId)-1)}} className="left" alt="leftArrow" src={left} />
        <img className="slider" alt="image" src={this.state.imgUrl} />
        <img onClick={()=>{this.getNewEp(Number(this.state.focusedEpId)+1)}} className="right" alt="rightArrow" src={right} />
      </div>
    );
  }
}

export default Slider;
