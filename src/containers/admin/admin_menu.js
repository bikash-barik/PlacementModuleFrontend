import React, { Component ,useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

//auth
import EventBus from "../../common/EventBus";
import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";
import { history } from "../../helpers/history";


import { Layout, Menu, Icon, Button } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const AdminMenu = () => {
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
      <Sider width={200} className="admin-sider">
      
        <Menu mode="inline" className="admin-menu">
        
        <Menu.Item key="1">
            <Link to="/placement_dept/profile">
              <Icon type="user" />Profile
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/placement_dept/applied_st_list">
              <Icon type="user" />Appied Students
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/placement_dept/schedulemeeting">
              <Icon type="user" />Schedule Meeting
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/placement_dept/employer_form/_add">
              <Icon type="user" />Company Register Form
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/placement_dept/employer_list">
              <Icon type="user" />Company List
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/placement_dept/new_job">
              <Icon type="user" />New Drive
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="7">
            <Button href="/home" onClick={logOut}>
              Sign out
            </Button>
          </Menu.Item> */}
        </Menu>
      </Sider>
    );
    }

  export default AdminMenu;
