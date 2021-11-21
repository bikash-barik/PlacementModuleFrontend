import React, { Component } from "react";
import { Carousel } from "antd";

export default class Content3 extends Component {
  render() {
    return (
      <Carousel autoplay>
        <div>
          <img
            className="carousel-image"
            src={require("../../assets/images/1.jpg")}
            alt="Loading.."
          />
        </div>
        <div>
          <img
            className="carousel-image"
            src={require("../../assets/images/2.jpg")}
            alt="Loading.."
          />
        </div>
        <div>
          <img
            className="carousel-image"
            src={require("../../assets/images/3.jpg")}
            alt="Loading.."
          />
        </div>
      </Carousel>
    );
  }
}
