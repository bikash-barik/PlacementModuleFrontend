import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/applyjob/";

class ApplyJobService {

    getAll(){
        return axios.get(API_URL + "applyjobs", { headers: authHeader() });
    }

    createApplyJob(applyjob){
        return axios.post(API_URL + "applyjobs", applyjob, { headers: authHeader() });
    }

    getApplyJobById(applyjobId){
        return axios.get(API_URL + "applyjobs" + '/' + applyjobId ,{ headers: authHeader() });
    }

    updateApplyJob(applyjob, applyjobId){
        return axios.put(API_URL + "applyjobs" + '/' + applyjobId, applyjob, { headers: authHeader() });
    }

    deleteApplyJob(applyjobId){
        return axios.delete(API_URL + "applyjobs" + '/' + applyjobId,{ headers: authHeader() });
    }
}

export default new ApplyJobService()