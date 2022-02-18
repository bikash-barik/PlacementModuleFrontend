import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Ant Desgin CSS file
import "antd/dist/antd.css";

// custom component
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import CompanysList from "./components/Comlist";
import CompanyList from "./components/CompanyList";
import CompanyPage from "./components/Pages/CompanyPage";
import ViewCompany from "./components/ViewCompany";
import CreateCompany from "./components/CreateCompany";
import Location from "./components/footer/location";
import { history } from "./helpers/history";

//custom
import Dashboard from "./components/Pages/Dashboard";
import Header from "./components/header/Header";
import Home from "./components/home/index";
import UserMain from "../src/containers/user/index";
import AdminMain from "../src/containers/admin/index";

import SignUpForm from "./containers/signup/index";
import SignInForm from "./containers/signin/index";
import ForgotPassword from "./containers/forgot_password/forgot_password";
import ResetPassword from "./containers/reset_password/reset_password";
import Test from "./containers/admin/test";
const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <div className="">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/user" component={UserMain} />
            <Route path="/placement_dept" component={AdminMain} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/signin" component={SignInForm} />
            <Route path="/forgot_password" component={ForgotPassword} />
            <Route path="/reset_password" component={ResetPassword} />
            <Route path="/Location" component={Location} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/companys_list" component={CompanyPage} />
            <Route path="/company_list" component={CompanyList} />
            <Route path="/companys_listpage" component={CompanysList} />
            <Route path="/add_company/:id" component={CreateCompany}></Route>
            <Route path="/view_company/:id" component={ViewCompany}></Route>
            <Route path="/test" component={Test}></Route>
          </Switch>
        </div>

        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </Router>
  );
};

export default App;
