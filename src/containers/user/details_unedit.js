import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { fetchUserProfile } from "../../store/actions";

import moment from "moment";

class DetailsUnedit extends Component {
  // componentDidMount() {
  //   this.props.fetchUserProfile(this.props.user.token);
  // }
  render() {
    const data = this.props;
    if (data) {
      return (
        <div className="profile-wrapper">
          <Row className="profile-row">
            <Col span={7}>First Name:</Col>
            <Col>Bikash</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Middle Name:</Col>
            <Col>Ku.</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Last Name:</Col>
            <Col>Barik</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Email:</Col>
            <Col>bikash@gmail.com</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Date of Birth:</Col>
            {/* <Col>{moment(data.dob).format("MMM Do YY")}</Col> */}
            <Col>28-02-2001</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Gender:</Col>
            <Col>Male</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Mobile Number:</Col>
            <Col>7978699120</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Alternative Mobile Number:</Col>
            <Col>9937936307</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Father's Name:</Col>
            <Col>Raj Kumar Barik</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Father's Mobile Number:</Col>
            <Col>7978692558</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Mother's Name:</Col>
            <Col>Panchali Barik</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Mother's Mobile Number:</Col>
            <Col>9989758965</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Permanent Address:</Col>
            <Col>Rourakela</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Current Address:</Col>
            <Col>Bhubaneswar</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Class 10 Grade Points (out of 10):</Col>
            <Col>8.7</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Class 12 Grade Points (out of 10):</Col>
            <Col>8.5</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Cumulative Performance Index:</Col>
            <Col>9.3</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Degree Branch:</Col>
            <Col>CSE</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Current Backlogs:</Col>
            <Col>0</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Total Backlogs:</Col>
            <Col>0</Col>
          </Row>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { fetchUserProfile })(DetailsUnedit);
