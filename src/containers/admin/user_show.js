import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUser, approveUser } from "../../store/actions";
import moment from "moment";
import { Row, Col, Button, Icon, message } from "antd";

class UserShow extends Component {
  componentDidMount() {
    const tempSid = window.location.href;
    const splitSid = tempSid.split("admin/user/");
    const sid = splitSid[1];
    this.props.getUser(sid, this.props.admin.token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.admin.message) {
      if (nextProps.admin.message === "Successfully completed request") {
        message.success("Approved!");
      } else {
        message.error("Something went wrong. Try Again");
      }
    }
  }

  handleClick = () => {
    this.props.approveUser(this.props.admin.user.sid, this.props.admin.token);
  };

  render() {
    const data = this.props.admin.user;
    if (data) {
      return (
        <div>
          <Row gutter={16} className="admin-top-row">
            <Col span={3} />
            <Col span={3}>
              <Link to="/placement_dept/users">
                <Icon className="admin-back-arrow" type="arrow-left" />
              </Link>
            </Col>
            <Col span={14}>
              <h2 className="text-center">Profile for {data.sid}</h2>
            </Col>
            <Col span={4}>
              <Button
                size="large"
                type="primary"
                onClick={this.handleClick}
                className="admin-approve-button"
                disabled={this.props.admin.disabled}
              >
                Approve
              </Button>
            </Col>
          </Row>

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
              <Col>{moment(data.dob).format("MMM Do YY")}</Col>
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
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state) {
  return { admin: state.admin };
}

export default connect(
  mapStateToProps,
  { getUser, approveUser }
)(UserShow);
