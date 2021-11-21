import React, { Component } from "react";
import { Layout, Menu, Icon, Button } from "antd";
import { Link } from "react-router-dom";

//CSS
import "../../style/user.css";

const { Sider } = Layout;

class UserMenu extends Component {
  handleClick = () => {
    localStorage.removeItem("TOKEN");
  };

  render() {
    return (
      <Sider width={200} className="user-sider">
        <Menu mode="inline" className="user-menu">
          <Menu.Item key="1">
            <Link to="/user/profile">
              <Icon type="user" />Profile
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/user/employers">
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

export default UserMenu;
