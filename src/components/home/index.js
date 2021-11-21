import React, { Component } from "react";
import "../../style/home.css";
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";
import Footer from "../footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Content1 />
        {/* <Content2 />   */}
        <Content3 />
        <Footer />
      </div>
    );
  }
}

export default Home;
