import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../style/footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* <div className="phantom" /> */}
        <div className="style">
          
          <div className="spacing">
            <Link to="/home">Home</Link> | <Link to="/signin">Sign in</Link> |
            <Link to="/signup"> Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
