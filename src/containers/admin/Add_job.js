import React, { Component } from 'react'
import NewJobService from "../../services/New-job";


class CreateJob extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            comName: '',
            jobType: '',
            jobSalary: '',
            jobVacancy: '',
            jobDescription: '',
            jobDate:'',
            jobCriteria:'',
            jobRound:'',
        }
        this.changecomNameHandler = this.changecomNameHandler.bind(this);
        this.changejobTypeHandler = this.changejobTypeHandler.bind(this);
        this.saveOrUpdateJob = this.saveOrUpdateJob.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
           NewJobService.getJobDriveById(this.state.id).then( (res) =>{
                let job = res.data;
                this.setState({
                    comName: job.comName,
                    jobType: job.jobType,
                    jobSalary : job.jobSalary,
                    jobVacancy : job.jobVacancy,
                    jobDescription: job.jobDescription,
                    jobDate: job.jobDate,
                    jobCriteria: job.jobCriteria,
                    jobRound: job.jobRound,

                });
            });
        }        
    }
    saveOrUpdateJob = (e) => {
        e.preventDefault();
        let job = {comName: this.state.comName,jobType: this.state.jobType, jobSalary: this.state.jobSalary, jobVacancy: this.state.jobVacancy,jobDescription: this.state.jobDescription,jobRound: this.state.jobRound,jobDate: this.state.jobDate,jobCriteria: this.state.jobCriteria};
        console.log('job => ' + JSON.stringify(job));

        // step 5
        if(this.state.id === '_add'){
           NewJobService.createJobDrive(job).then(res =>{
                this.props.history.push('/placement_dept/new_job');
            });
        }else{
           NewJobService.updateJobDrive(job, this.state.id).then( res => {
                this.props.history.push('/placement_dept/new_job');
            });
        }
    }
    
    changecomNameHandler= (event) => {
        this.setState({comName: event.target.value});
    }

    changejobTypeHandler= (event) => {
        this.setState({jobType: event.target.value});
    }

    changejobSalaryHandler= (event) => {
        this.setState({jobSalary: event.target.value});
    }

    changejobVacancyHandler= (event) => {
      this.setState({jobVacancy: event.target.value});
  }

    changejobDescriptionHandler= (event) => {
        this.setState({jobDescription: event.target.value});
    }

    changejobDateHandler= (event) => {
      this.setState({jobDate: event.target.value});
  }

  changejobCriteriaHandler= (event) => {
    this.setState({jobCriteria: event.target.value});
}
changejobRoundHandler= (event) => {
  this.setState({jobRound: event.target.value});
}

   
    cancel(){
        this.props.history.push('/placement_dept/new_job');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Job</h3>
        }else{
            return <h3 className="text-center">Update Job</h3>
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
                                  <label className='h5'>Company Name</label>
                                  <input
                                    type="text"
                                    id="form3Example1c"
                                    class="form-control"
                                    placeholder="Company Name"
                                    value={this.state.comName} onChange={this.changecomNameHandler}
                                  />
                                  
                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label className='h5'>Company job Type</label>
                                  <input
                                    type="text"
                                    id="form3Example1c"
                                    class="form-control"
                                    placeholder="Company job Type"
                                    value={this.state.jobType} onChange={this.changejobTypeHandler}
                                  />
                                  
                                </div>
                              </div>
    
                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label className='h5'>Company Salary</label>
                                  <input
                                    type="text"
                                    id="form3Example3c"
                                    class="form-control"
                                    placeholder="Company Salary"
                                    value={this.state.jobSalary} onChange={this.changejobSalaryHandler}
                                  />
                                 
                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label className='h5'>Number Of Vacancy</label>
                                  <input
                                    type="text"
                                    id="form3Example3c"
                                    class="form-control"
                                    placeholder="Number Of Vacancy"
                                    value={this.state.jobVacancy} onChange={this.changejobVacancyHandler}
                                  />
                                 
                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label className='h5'>Date Of Drive</label>
                                   <input
                                    type="date"
                                    id="form3Example3c"
                                    class="form-control"
                                    placeholder="Description"
                                    value={this.state.jobDate} onChange={this.changejobDateHandler}
                                  />
                                  
                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label className='h5'>No. Of Round</label>
                                   <textarea
                                    type="text"
                                    id="form3Example3c"
                                    class="form-control"
                                    placeholder="No. Of Round"
                                    value={this.state.jobRound} onChange={this.changejobRoundHandler}
                                  />
                                  
                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label className='h5'>Criteria</label>
                                   <textarea
                                    type="text"
                                    id="form3Example3c"
                                    class="form-control"
                                    placeholder="Criteria"
                                    value={this.state.jobCriteria} onChange={this.changejobCriteriaHandler}
                                  />
                                  
                                </div>
                              </div>
                              {/* <select width="300" style={{width: "350px"}} size="8" multiple multiple>
      <option value='blue'>Blue</option>
      <option value='green'>Green</option>
      <option value='red'>Red</option>
      <option value='yellow'>Yellow</option>
      <option value='' selected>Select a Color</option>
    </select> */}
    
                              <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label className='h5'>Description</label>
                                   <textarea
                                    type="text"
                                    id="form3Example3c"
                                    class="form-control"
                                    placeholder="Description"
                                    value={this.state.jobDescription} onChange={this.changejobDescriptionHandler}
                                  />
                                  
                                </div>
                              </div>
                              
                              <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button className="btn btn-primary btn-lg" onClick={this.saveOrUpdateJob}>Save</button>
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

export default CreateJob
