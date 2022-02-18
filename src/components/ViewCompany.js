import React, { Component } from 'react'
import CompanyService from '../services/comService'

class ViewCompany extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            company: {}
        }
    }

    componentDidMount(){
        CompanyService.getCompanyById(this.state.id).then( res => {
            this.setState({company: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Company Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Company Name: </label>
                            <label> { this.state.company.comName }</label>
                        </div>
                        <div className = "row">
                            <label> Company Address Number: </label>
                            <label> { this.state.company.comAddress }</label>
                        </div>
                        <div className = "row">
                            <label> Company Email ID: </label>
                            <label> { this.state.company.comEmail }</label>
                        </div>
                        <div className = "row">
                            <label> Company Des Name:</label>
                            <label> { this.state.company.comDescription }</label>
                        </div>
                        
                        
                    </div>
                    <div className = "row right">
                    <a className="btn btn-success" href="/companys_list"> <img src="https://img.icons8.com/metro/19/ffffff/back.png"/>Back</a>
                 </div>

                    

                </div>
            </div>
        )
    }
}

export default ViewCompany
