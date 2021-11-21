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
            <Col>{data.firstName}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Middle Name:</Col>
            <Col>{data.middleName}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Last Name:</Col>
            <Col>{data.lastName}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Email:</Col>
            <Col>{data.email}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Date of Birth:</Col>
            {/* <Col>{moment(data.dob).format("MMM Do YY")}</Col> */}
            <Col></Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Gender:</Col>
            <Col>{data.gender}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Mobile Number:</Col>
            <Col>{data.mobileNumber}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Alternative Mobile Number:</Col>
            <Col>{data.altMobileNumber}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Father's Name:</Col>
            <Col>{data.fatherName}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Father's Mobile Number:</Col>
            <Col>{data.fatherMobile}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Mother's Name:</Col>
            <Col>{data.motherName}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Mother's Mobile Number:</Col>
            <Col>{data.motherMobile}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Permanent Address:</Col>
            <Col>{data.permanentAddress}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Current Address:</Col>
            <Col>{data.currentAddress}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Class 10 Grade Points (out of 10):</Col>
            <Col>{data.class10grade}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Class 12 Grade Points (out of 10):</Col>
            <Col>{data.class12grade}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Cumulative Performance Index:</Col>
            <Col>{data.cpi}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Degree Branch:</Col>
            <Col>{data.branch}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Current Backlogs:</Col>
            <Col>{data.currentBacklogs}</Col>
          </Row>
          <Row className="profile-row">
            <Col span={7}>Total Backlogs:</Col>
            <Col>{data.totalBacklogs}</Col>
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
