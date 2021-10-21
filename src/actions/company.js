import {
    CREATE_COMPANY,
    RETRIEVE_COMPANYS,
    UPDATE_COMPANY,
    DELETE_COMPANY,
    
  } from "./types";
  
  import CompanyDataService from "../services/CompanyService";
  
  // export const createCompany = (title, description) => async (dispatch) => {
  //   try {
  //     const res = await CompanyDataService.create({ title, description });
  
  //     dispatch({
  //       type: CREATE_COMPANY,
  //       payload: res.data,
  //     });
  
  //     return Promise.resolve(res.data);
  //   } catch (err) {
  //     return Promise.reject(err);
  //   }
  // };
  
  export const retrieveCompanys = () => async (dispatch) => {
    try {
      const res = await CompanyDataService.getAll();
  console.log(res)
      dispatch({
        type: RETRIEVE_COMPANYS,
        payload: res.data,
        
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  // export const updateTutorial = (id, data) => async (dispatch) => {
  //   try {
  //     const res = await CompanyDataService.update(id, data);
  
  //     dispatch({
  //       type: UPDATE_TUTORIAL,
  //       payload: data,
  //     });
  
  //     return Promise.resolve(res.data);
  //   } catch (err) {
  //     return Promise.reject(err);
  //   }
  // };
  
  // export const deleteTutorial = (id) => async (dispatch) => {
  //   try {
  //     await CompanyDataService.remove(id);
  
  //     dispatch({
  //       type: DELETE_TUTORIAL,
  //       payload: { id },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  
  // export const deleteAllTutorials = () => async (dispatch) => {
  //   try {
  //     const res = await CompanyDataService.removeAll();
  
  //     dispatch({
  //       type: DELETE_ALL_TUTORIALS,
  //       payload: res.data,
  //     });
  
  //     return Promise.resolve(res.data);
  //   } catch (err) {
  //     return Promise.reject(err);
  //   }
  // };
  

  