import {
    CREATE_COMPANY,
    RETRIEVE_COMPANYS,
    UPDATE_COMPANY,
    DELETE_COMPANY,
  } from "../actions/types";
  
  const initialState = [];
  
  const companyReducer = (companys = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
    //   case CREATE_COMPANY:
    //     return [...tutorials, payload];
  
      case RETRIEVE_COMPANYS:
        return payload;
  
    //   case UPDATE_TUTORIAL:
    //     return tutorials.map((tutorial) => {
    //       if (tutorial.id === payload.id) {
    //         return {
    //           ...tutorial,
    //           ...payload,
    //         };
    //       } else {
    //         return tutorial;
    //       }
    //     });
  
    //   case DELETE_TUTORIAL:
    //     return tutorials.filter(({ id }) => id !== payload.id);
  
    //   case DELETE_ALL_TUTORIALS:
    //     return [];
  
      default:
        return companys;
    }
  };
  
  export default companyReducer;