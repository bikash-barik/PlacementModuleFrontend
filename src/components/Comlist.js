import React, { Component } from 'react'
import CompanyService from '../services/CompanyService'

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
        this.props.history.push(`/view-company/${id}`);
    }
    editCompany(id){
        this.props.history.push(`/add-company/${id}`);
    }

    componentDidMount(){
        CompanyService.getAll().then((res) => {
            this.setState({ companys: res.data});
        });
    }

    addCompany(){
        this.props.history.push('/add-company/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Company List</h2>
                 <div className = "row">
                    {/* <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button> */}
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> company Name</th>
                                    <th> company Address</th>
                                    <th> company Email</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.companys.map(
                                        company => 
                                        <tr key = {company.id}>
                                             <td> { company.comName} </td>   
                                             <td> {company.comAddress}</td>
                                             <td> {company.comEmail}</td>
                                             <td>
                                                 <button onClick={ () => this.editCompany(company.id)} className="btn btn-primary">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCompany(company.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCompany(company.id)} className="btn btn-primary">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default Comlist