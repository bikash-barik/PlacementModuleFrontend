import React, { Component ,useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

//auth
import EventBus from "../../common/EventBus";
import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";
import { history } from "../../helpers/history";


import { Layout, Menu, Icon, Button } from "antd";
import { Link } from "react-router-dom";

//CSS
import "../../style/user.css";

const { Sider } = Layout;


  const UserMenu = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
  
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
      history.listen((location) => {
        dispatch(clearMessage()); // clear message when changing location
      });
    }, [dispatch]);
  
    const logOut = useCallback(() => {
      dispatch(logout());
    }, [dispatch]);
  
    useEffect(() => {
      if (currentUser) {
        setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
        setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
      } else {
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
      }
  
      EventBus.on("logout", () => {
        logOut();
      });
  
      return () => {
        EventBus.remove("logout");
      };
    }, [currentUser, logOut]);

  
    return (
      <Sider width={200} className="user-sider">
        <Menu mode="inline" className="user-menu">
          <Menu.Item key="1">
            <Link to="/user/profile">
              <Icon type="user" />Profile
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/user/companys">
              <Icon type="user" />Company List
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/user/new_job">
              <Icon type="user" />New Drive
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/user/applied_job">
              <Icon type="user" />Applied Jobs
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="4">
            <Button href="/home" onClick={logOut}>
              Sign out
            </Button>
          </Menu.Item> */}
        </Menu>
      </Sider>
    );

}

export default UserMenu;
