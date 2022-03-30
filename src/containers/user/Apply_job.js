import React, { Component } from 'react'
import ApplyJobSevice from '../../services/ApplyJobService'
import { Label } from "reactstrap";


class CreateCompany extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            comName: '',
            name: '',
            emailId: '',
            regdNo: '',
           
            

        }
        this.changecomNameHandler = this.changecomNameHandler.bind(this);
        this.changenameHandler = this.changenameHandler.bind(this);
        this.saveOrUpdateApplyJob = this.saveOrUpdateApplyJob.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
          ApplyJobSevice.getApplyJobById(this.state.id).then( (res) =>{
                let applyjob = res.data;
                this.setState({
                    comName: applyjob.comName,
                    name: applyjob.name,
                    email : applyjob.email,
                    regdNo : applyjob.regdNo,
                   
                });
            });
        }        
    }
    saveOrUpdateApplyJob = (e) => {
        e.preventDefault();
        let applyjob = {
          comName: this.state.comName,
          name: this.state.name, 
          email: this.state.email, 
          regdNo: this.state.regdNo,
        };
        console.log('applyjob => ' + JSON.stringify(applyjob));
        console.log("jdsgsbgdvjks")
        // step 5
        if(this.state.id === '_add'){
          ApplyJobSevice.createApplyJob(applyjob).then(res =>{
                this.props.history.push("/user/new_job");
            });
        }else{
          ApplyJobSevice.updateApplyJob(applyjob, this.state.id).then( res => {
                this.props.history.push("/user/new_job");
            });
        }
    }
    
    changecomNameHandler= (event) => {
        this.setState({comName: event.target.value});
    }

    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeemailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeregdNoHandler= (event) => {
      this.setState({regdNo: event.target.value});
  }

   

   
    cancel(){
      if(this.state.id === '_add'){
        return this.props.history.push('/user/new_job');
    }else{
        return this.props.history.push('/user/applied_job');
    }
        
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Apply For New Drive</h3>
        }else{
            return <h3 className="text-center">Update Details</h3>
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
                                <label className='h5'>Your company Name</label>
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
                                <label className='h5'>Enter Your Name</label>
                                  <input
                                    type="text"
                                    id="form3Example1c"
                                    class="form-control"
                                    placeholder="Enter Your Name"
                                    value={this.state.name} onChange={this.changenameHandler}
                                  />
                                  
                                </div>
                              </div>
    
                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label className='h5'>Your Email</label>
                                  <input
                                    type="email"
                                    id="form3Example3c"
                                    class="form-control"
                                    placeholder="Your Email"
                                    value={this.state.email} onChange={this.changeemailHandler}
                                  />
                                 
                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label className='h5'>Your Regd No.</label>
                                  <input
                                    type="number"
                                    id="form3Example3c"
                                    class="form-control"
                                    placeholder="Your Regd No."
                                    value={this.state.regdNo} onChange={this.changeregdNoHandler}
                                  />
                                 
                                </div>
                              </div>
                              <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                            <Label className="h5">Uplod CV</Label>
                              <input
                                type="file"
                                id="form3Example3c"
                                class="form-control"
                                placeholder="Meeting with abc persion.."
                                // value={this.state.comType}
                                // onChange={this.changecomTypeHandler}
                              />
                            </div>
                          </div>
    
                              
                              <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button className="btn btn-primary btn-lg" onClick={this.saveOrUpdateApplyJob}>Apply</button>
                                 <button className="btn btn-danger btn-lg" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                              </div>
                            </form>
                          </div>
                          <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img
                              src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2017/06/05064459/Applying-for-Jobs-Online-When-You%E2%80%99re-Laid-Off.jpg"
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
