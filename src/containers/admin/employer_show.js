import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getEmployer } from "../../store/actions";
import { Row, Col, Icon, message } from "antd";

class EmployerShow extends Component {
  componentDidMount() {
    const tempid = window.location.href;
    const splitid = tempid.split("placement_dept/employer/");
    const id = splitid[1];
    this.props.getEmployer(id, this.props.admin.token);
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

  render() {
    const data = this.props.admin.employer;
    console.log(data);
    if (data) {
      return (
        <div>
          <Row gutter={16} className="">
            <Col span={3} />
            <Col span={3}>
              <Link to="/placement_dept/employer_list">
                <Icon className="" type="arrow-left" />
              </Link>
            </Col>
            <Col span={14}>
              <h2 className="text-center">Details</h2>
            </Col>
          </Row>
          {/* _id: "5b093cc86dc0600e14110832"
​
batch: "2016"
​
category: "A1"
​
ctc: 10
​
description: "blah"
​
jobType: "J"
​
name: "a"
​
profile: "the boss"
​
studentList: Array [] */}
          <div className="profile-wrapper">
            <Row className="profile-row">
              <Col span={7}>Unique ID:</Col>
              <Col>{data._id}</Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Name:</Col>
              <Col>{data.name}</Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Category:</Col>
              <Col>{data.category}</Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>CTC:</Col>
              <Col>{data.ctc}</Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Description:</Col>
              <Col>{data.description}</Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Job Type:</Col>
              <Col>{data.jobType}</Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Profile:</Col>
              <Col>{data.profile}</Col>
            </Row>
            <Row className="profile-row">
              <Col span={7}>Student Registered:</Col>
              <Col>{data.studentList}</Col>
            </Row>
          </div>
        </div>
      );
    } else {
      return <div>Loading......</div>;
    }
  }
}

function mapStateToProps(state) {
  return { admin: state.admin };
}

export default connect(
  mapStateToProps,
  { getEmployer }
)(EmployerShow);
