import React, { Component } from "react";
import UserMenu from "./user_menu";
import Header from "../../components/header/Header";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

//CSS
import "../../style/user.css";


import CompanyList from "../../components/CompanyList";
import UserProfile from "./profile";
import UserEmployerList from "./user_employer_list";
import DetailsEdit from './details_edit'
import New_Job from "./New_job";
const { Content } = Layout;

class UserMain extends Component {
  render() {
    return (
      <Layout>
        {/* <Header/> */}
        <UserMenu />
        <Layout>
          <Content className="user-content">
            <Switch>
              <Route path="/user/profile" component={UserProfile} />
              <Route path="/user/employers" component={CompanyList} />
              <Route path="/user/new_job" component={New_Job} />
              <Route path="/user/details_edit" component={DetailsEdit} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default UserMain;
