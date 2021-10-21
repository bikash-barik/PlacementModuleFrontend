// import http from "../http-common";
import authHeader from "./auth-header";
import axios from "axios";

const API_URL = "http://localhost:8080/api/addcompany/";

const getAll = () => {
  return axios.get(API_URL + "companys", { headers: authHeader() });
  
};
// console.log("fvdxfvdxfbsdf"+getAll)

// const getAll = () => {
//   return http.get("/companys");
// };

// const get = id => {
//   return http.get(`/tutorials/${id}`);
// };

// const create = data => {
//   return http.post("/tutorials", data);
// };

// const update = (id, data) => {
//   return http.put(`/tutorials/${id}`, data);
// };

// const remove = id => {
//   return http.delete(`/tutorials/${id}`);
// };




const CompanyService = {
  getAll,
  // get,
  // create,
  // update,
  // remove,
 
  
};

export default CompanyService;
