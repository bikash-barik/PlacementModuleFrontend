import React, { Component } from 'react'
import CompanySevice from '../services/comService'


class CreateCompany extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            comName: '',
            comAddress: '',
            comEmail: '',
            comType: '',
            comDescription: '',
            

        }
        this.changecomNameHandler = this.changecomNameHandler.bind(this);
        this.changecomAddressHandler = this.changecomAddressHandler.bind(this);
        this.saveOrUpdateCompany = this.saveOrUpdateCompany.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            CompanySevice.getCompanyById(this.state.id).then( (res) =>{
                let company = res.data;
                this.setState({
                    comName: company.comName,
                    comAddress: company.comAddress,
                    comEmail : company.comEmail,
                    comType : company.comType,
                    comDescription: company.comDescription,
                });
            });
        }        
    }
    saveOrUpdateCompany = (e) => {
        e.preventDefault();
        let company = {comName: this.state.comName,comAddress: this.state.comAddress, comEmail: this.state.comEmail, comType: this.state.comType,comDescription: this.state.comDescription};
        console.log('company => ' + JSON.stringify(company));

        // step 5
        if(this.state.id === '_add'){
            CompanySevice.createCompany(company).then(res =>{
                this.props.history.push('/admin/employer_list');
            });
        }else{
            CompanySevice.updateCompany(company, this.state.id).then( res => {
                this.props.history.push('/admin/employer_list');
            });
        }
    }
    
    changecomNameHandler= (event) => {
        this.setState({comName: event.target.value});
    }

    changecomAddressHandler= (event) => {
        this.setState({comAddress: event.target.value});
    }

    changecomEmailHandler= (event) => {
        this.setState({comEmail: event.target.value});
    }

    changecomTypeHandler= (event) => {
      this.setState({comType: event.target.value});
  }

    changecomDescriptionHandler= (event) => {
        this.setState({comDescription: event.target.value});
    }

   
    cancel(){
        this.props.history.push('/admin/employer_list');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Company</h3>
        }else{
            return <h3 className="text-center">Update Compnay</h3>
        }
    }
    render() {
        return (
            <div>
            <section class="">
              <div class="">
                <div class="row d-flex justify-content-center align-items-center">
                  <div class="col-lg-12 col-xl-11">
                    <div class=" text-black">
                      <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                          <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                              {this.getTitle()}
                            </p>
    
                            <form class="mx-1 mx-md-4">
                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="form3Example1c"
                                    class="form-control"
                                    placeholder="Your company Name"
                                    value={this.state.comName} onChange={this.changecomNameHandler}
                                  />
                                  
                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="form3Example1c"
                                    class="form-control"
                                    placeholder="YourCompany Address"
                                    value={this.state.comAddress} onChange={this.changecomAddressHandler}
                                  />
                                  
                                </div>
                              </div>
    
                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                  <input
                                    type="email"
                                    id="form3Example3c"
                                    class="form-control"
                                    placeholder="Your Company Email"
                                    value={this.state.comEmail} onChange={this.changecomEmailHandler}
                                  />
                                 
                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="form3Example3c"
                                    class="form-control"
                                    placeholder="Your Company Type"
                                    value={this.state.comType} onChange={this.changecomTypeHandler}
                                  />
                                 
                                </div>
                              </div>
    
                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                  <textarea
                                    type="text"
                                    id="form3Example3c"
                                    class="form-control"
                                    placeholder="Your Description"
                                    value={this.state.comDescription} onChange={this.changecomDescriptionHandler}
                                  />
                                  
                                </div>
                              </div>
                              
                              <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button className="btn btn-primary btn-lg" onClick={this.saveOrUpdateCompany}>Save</button>
                                 <button className="btn btn-danger btn-lg" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                              </div>
                            </form>
                          </div>
                          <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img
                              src="https://image.freepik.com/free-vector/people-standing-flight-registration-counter-family-baggage-ticket-flat-vector-illustration-travelling-vacation_74855-8511.jpg"
                              class="img-fluid"
                              alt="Sample image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
    }
}

export default CreateCompany
