import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

//CSS
import "../../style/admin.css";

// Comonents
import AdminMenu from "./admin_menu";
import UserList from "./user_list";
import UserShow from "./user_show";
import EmployerForm from "./employer_form";
import EmployerList from "./employer_list";
import EmployerShow from "./employer_show";

const { Content } = Layout;

class AdminMain extends Component {
  render() {
    return (
      <Layout className="admin-main">
        <AdminMenu />
        <Layout>
          <Content className="admin-content">
            <Switch>
              <Route path="/admin/employer_list" component={EmployerList} />
              <Route path="/admin/employer_form" component={EmployerForm} />
              <Route path="/admin/users" component={UserList} />
              <Route path="/admin/employer/:id" component={EmployerShow} />
              <Route path="/admin/user/:sid" component={UserShow} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AdminMain;
