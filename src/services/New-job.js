import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/addjob/";

class NewJobService {

    getAll(){
        return axios.get(API_URL + "jobs", { headers: authHeader() });
    }

    createJobDrive(jobs){
        return axios.post(API_URL + "jobs", jobs, { headers: authHeader() });
    }

    getJobDriveById(jobsId){
        return axios.get(API_URL + "jobs" + '/' + jobsId ,{ headers: authHeader() });
    }

    updateJobDrive(jobs, jobsId){
        return axios.put(API_URL + "jobs" + '/' + jobsId, jobs, { headers: authHeader() });
    }

    deleteJobDrive(jobsId){
        return axios.delete(API_URL + "jobs" + '/' + jobsId,{ headers: authHeader() });
    }
}

export default new NewJobService()