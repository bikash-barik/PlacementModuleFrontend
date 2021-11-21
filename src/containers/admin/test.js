import React, { Component } from "react";
import StudentService from "../../../src/services/comService";
import { BrowserRouter as Link } from "react-router-dom";

import { IoSchoolOutline, IoMan, IoBus } from "react-icons/io5";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardFooter,
  NavbarBrand,
  Navbar,
} from "reactstrap";

import { Col, Row, Container } from "reactstrap";

class Test extends Component {
  // constructor(props) {
  //     super(props)

  //     this.state = {
  //             students: []
  //     }
  //     this.addStudent = this.addStudent.bind(this);
  //     this.editStudent = this.editStudent.bind(this);
  //     this.deleteStudent = this.deleteStudent.bind(this);
  // }

  // deleteStudent(id){
  //     StudentService.deleteStudent(id).then( res => {
  //         this.setState({students: this.state.students.filter(student => student.id !== id)});
  //     });
  // }
  // viewStudent(id){
  //     this.props.history.push(`/view_student/${id}`);
  // }
  // editStudent(id){
  //     this.props.history.push(`/add_student/${id}`);
  // }

  // componentDidMount(){
  //     StudentService.getStudents().then((res) => {
  //         this.setState({ students: res.data});
  //     });
  // }

  // addStudent(){
  //     this.props.history.push('/add-student/_add');
  // }

  render() {
    return (
      <Container>
        <div className="mt-3">
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  100 Students
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button block color="success">
                  <Link to="./ShowStudentList.tsx">
                    <span>Manage Student</span>
                  </Link>
                </Button>
              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  25 Driver
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button> Manage Driver </Button>
              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoBus className="font-size-xl" />
                  17 Bus
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Manage Bus</Button>
              </Card>
            </Col>
          </Row>
        </div>
        <Container className="mt-4">
          <Row>
            <Col sm="3">
              <Button block color="success" onClick={this.toggle}>
                <span>Add Student</span>
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          {/* {this.state.students.map((student) => this.renderStudent(student))} */}
        </Container>
        <Row>
          <Col sm="12">
            <Card body>
              <CardTitle tag="h5">
                <IoMan className="font-size-xl" />
                <span>Student Name</span>
              </CardTitle>
              <CardBody>
                <Row>
                  <Col sm="4" className="text-center">
                    <span className="font-weight-bold"> Class : </span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">StartDate :</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">EndDate :</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">DriverName :</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">Driver Number :</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">ConductorName :</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">Conductor Number :</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">StudentNumber :</span>
                  </Col>

                  <Col sm="4" className="text-center">
                    <span className="font-weith-bold">BusNo :</span>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col sm-6>
                    <Button block outline color="primary">
                      Edit
                    </Button>
                  </Col>

                  <Col sm-6>
                    <Button block outline color="denger">
                      Delete
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Test;
