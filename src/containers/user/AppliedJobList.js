import React, { Component } from "react";
import ApplyJobService from '../../services/ApplyJobService'
import { BrowserRouter as Link } from "react-router-dom";

import {  IoMan, IoBus } from "react-icons/io5";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

import { Col, Row, Container } from "reactstrap";

class AppliedJobList extends Component {

    constructor(props) {
        super(props)

        this.state = {
                applyjobs: []
        }
        this.applyJobs = this.applyJobs.bind(this);
        this.editApplyjob = this.editApplyjob.bind(this);
        this.deleteApplyJob = this.deleteApplyJob.bind(this);
    }

    deleteApplyJob(id){
        ApplyJobService.deleteApplyJob(id).then( res => {
            this.setState({applyjobs: this.state.applyjobs.filter(applyjobs => applyjobs.id !== id)});
        });
    }
    // viewApplyJob(id){
    //     this.props.history.push(`/user/apply_job/${id}`);
    // }
    editApplyjob(id){
        this.props.history.push(`/user/apply_job/${id}`);
    }

    componentDidMount(){
        ApplyJobService.getAll().then((res) => {
            this.setState({ applyjobs: res.data});
        });
    }

    applyJobs(){
        this.props.history.push('/add_company/_add');
    }

  render() {
    // renderStudent(students) {
    return (
      <Container>
        <div className="mt-3">
        <h4>Applied Job Details</h4>
          {/* <Row>
            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  5 Drive
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button block color="success">
                  <Link to="./ShowStudentList.tsx">
                    <span>My Drives</span>
                  </Link>
                </Button>
              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  12 New Drives
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button block>
                  <a href="/user/new_job" className="text-decoration-none text-light">
                 New Drive
                  </a>
                </Button>

              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoBus className="font-size-xl" />
                  0 Placed Student
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>View More</Button>
              </Card>
            </Col>
          </Row> */}
        </div>
        {/* <Container className="mt-4">
          <Row>
            <Col sm="3">
              <Button block color="success" onClick={this.addStudent}>
                <span>Add Student</span>
              </Button>
            </Col>
          </Row>
        </Container> */}
        <Container className="mt-5">
          {/* {this.state.students.map((student) => this.renderStudent(student))} */}
        </Container>
        {
                                    this.state.applyjobs.map(
                                        applyjob => 
          <Row>
            <Col sm="12">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  <span>{ applyjob.comName}</span>
                </CardTitle>
                <CardBody>
                  <Row  key = {applyjob.id}>
                    <Col sm="4" className="text-center">
                      <span className="font-weight-bold"> applyjob  Address: </span>
                      <span>{applyjob.name}</span>
                    </Col>

                   

                    <Col sm="4" className="text-center">
                      <span className="font-weiht-bolder">applyjob  Email:</span>
                      <span>{applyjob.emailId}</span>
                    </Col>

                    <Col sm="4" className="text-center">
                      <span className="font-weith-bold">applyjob Type:</span>
                      <span>{applyjob.regdNo}</span>
                    </Col>

                    
                    
                    
                  </Row>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col sm-6>
                      <Button onClick={ () => this.editApplyjob(applyjob.id)} block outline color="primary">
                        Modify Details
                      </Button>
                    </Col>

                    <Col sm-6>
                      <Button onClick={ () => this.deleteApplyJob(applyjob.id)} block outline color="denger">
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export default AppliedJobList;
