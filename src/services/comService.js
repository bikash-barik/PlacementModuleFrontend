import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/addcompany/";

class ComService {

    getAll(){
        return axios.get(API_URL + "companys", { headers: authHeader() });
    }

    createCompany(company){
        return axios.post(API_URL + "companys", company, { headers: authHeader() });
    }

    getCompanyById(companyId){
        return axios.get(API_URL + "companys" + '/' + companyId ,{ headers: authHeader() });
    }

    updateCompany(company, companyId){
        return axios.put(API_URL + "companys" + '/' + companyId, company, { headers: authHeader() });
    }

    deleteCompany(companyId){
        return axios.delete(API_URL + "companys" + '/' + companyId,{ headers: authHeader() });
    }
}

export default new ComService()