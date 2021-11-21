import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';


const CompanyPage = ({ component: roles }) => {
    const { user: currentUser } = useSelector((state) => state.auth);
  
    if (!currentUser) {
      return <Redirect to="/login" />;
     
    }
  
    if(currentUser.roles  == "ROLE_USER"){
      return <Redirect to="/company_list" />;
    }else{
      return <Redirect to="/companys_listpage" />;
    }
}

export default CompanyPage;