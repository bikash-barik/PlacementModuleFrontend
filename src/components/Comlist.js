import React, { Component } from "react";
import CompanyService from '../services/comService'
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

class Comlist extends Component {

    constructor(props) {
        super(props)

        this.state = {
                companys: []
        }
        this.addCompany = this.addCompany.bind(this);
        this.editCompany = this.editCompany.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);
    }

    deleteCompany(id){
        CompanyService.deleteCompany(id).then( res => {
            this.setState({companys: this.state.companys.filter(company => company.id !== id)});
        });
    }
    viewCompany(id){
        this.props.history.push(`/view_company/${id}`);
    }
    editCompany(id){
        this.props.history.push(`/add_company/${id}`);
    }

    componentDidMount(){
        CompanyService.getAll().then((res) => {
            this.setState({ companys: res.data});
        });
    }

    addCompany(){
        this.props.history.push('/placement_dept/employer_form/_add');
    }

  render() {
    // renderStudent(students) {
    return (
      <Container>
        <div className="mt-3">
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  16 Company
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button block color="success">
                  <Link to="./ShowStudentList.tsx">
                    <span>Manage Company</span>
                  </Link>
                </Button>
              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  6 Register Student
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button> Manage Placement </Button>
              </Card>
            </Col>

            <Col sm="4">
              <Card body>
                <CardTitle tag="h5">
                  <IoBus className="font-size-xl" />
                  6 Company
                </CardTitle>

                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Manage Company</Button>
              </Card>
            </Col>
          </Row>
        </div>
        <Container className="mt-4">
          <Row>
            <Col sm="3">
              <Button block color="success" onClick={this.addCompany}>
                <span>Add Company</span>
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          {/* {this.state.students.map((student) => this.renderStudent(student))} */}
        </Container>
        {
                                    this.state.companys.map(
                                        company => 
          <Row>
            <Col sm="12">
              <Card body>
                <CardTitle tag="h5">
                  <IoMan className="font-size-xl" />
                  <span>{ company.comName}</span>
                </CardTitle>
                <CardBody>
                  <Row  key = {company.id}>
                    <Col sm="4" className="text-center">
                      <span className="font-weight-bold"> Company  Address: </span>
                      <span>{company.comAddress}</span>
                    </Col>

                   

                    <Col sm="4" className="text-center">
                      <span className="font-weiht-bolder">Company  Email:</span>
                      <span>{company.comEmail}</span>
                    </Col>

                    <Col sm="4" className="text-center">
                      <span className="font-weith-bold">Company Type:</span>
                      <span>{company.comType}</span>
                    </Col>
                    <Col sm="4" className="text-center">
                      <span className="font-weith-bold">Company Des Name:</span>
                      <span>{company.comDescription}</span>
                    </Col>

                    
                    
                  </Row>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col sm-6>
                      <Button onClick={ () => this.editCompany(company.id)} block outline color="success">
                        Edit
                      </Button>
                    </Col>

                    <Col sm-6>
                      <Button onClick={ () => this.deleteCompany(company.id)} block outline color="denger">
                        Delete
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

export default Comlist;
