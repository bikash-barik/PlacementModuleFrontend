import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { getUserList } from "../../store/actions";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "name"
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "name"
  },
  {
    title: "Student ID",
    dataIndex: "sid",
    key: "sid"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <Link to={`/placement_dept/user/${record.sid}`}>View</Link>
      </span>
    )
  }
];

class UserList extends Component {
  // componentDidMount() {
  //   this.props.getUserList(this.props.admin.token);
  // }

  render() {
    // const data = this.props.admin.list;
    return (
      <div>
        <Table columns={columns}  />
        {/* dataSource={data} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { admin: state.admin };
}

export default connect(
  mapStateToProps,
  { getUserList }
)(UserList);
