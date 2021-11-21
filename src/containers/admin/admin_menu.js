import React, { Component } from "react";
import { Layout, Menu, Icon, Button } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

class AdminMenu extends Component {
  handleClick = () => {
    localStorage.removeItem("TOKEN");
  };

  render() {
    return (
      <Sider width={200} className="admin-sider">
        <Menu mode="inline" className="admin-menu">
          <Menu.Item key="1">
            <Link to="/admin/users">
              <Icon type="user" />Users
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin/employer_form">
              <Icon type="user" />Company Register Form
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/admin/employer_list">
              <Icon type="user" />Company List
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Button href="/home" onClick={this.handleClick}>
              Sign out
            </Button>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default AdminMenu;
