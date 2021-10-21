import React, { Component } from 'react'
import CompanyService from '../services/CompanyService'

class ViewCompany extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            company: {}
        }
    }

    
    componentDidMount(){
        CompanyService.getCompanyById().then((res) => {
            this.setState({ companys: res.data});
        });
    }


    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> company Name: </label>
                            <div> { this.state.company.comName }</div>
                        </div>
                        <div className = "row">
                            <label> company Address Number: </label>
                            <div> { this.state.company.comAddress }</div>
                        </div>
                        <div className = "row">
                            <label> company Email ID: </label>
                            <div> { this.state.company.comEmail }</div>
                        </div>
                        <div className = "row">
                            <label> company Des Name: </label>
                            <div> { this.state.company.comDescription }</div>
                        </div>
                        
                        
                    </div>
                    <div className = "row right">
                    <a className="btn btn-primary" href="/companys_list"> <img src="https://img.icons8.com/metro/19/ffffff/back.png"/>Back</a>
                 </div>

                    

                </div>
            </div>
        )
    }
}

export default ViewCompany
