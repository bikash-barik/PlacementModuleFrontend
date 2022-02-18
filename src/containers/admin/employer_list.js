import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { getEmployerList } from "../../store/actions";

const columns = [
  {
    title: "Company Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category"
  },
  {
    title: "Job Type",
    dataIndex: "jobType",
    key: "jobType"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <Link to={`/placement_dept/employer/${record._id}`}>View</Link>
      </span>
    )
  }
];

class EmployerList extends Component {
  // componentDidMount() {
  //   this.props.getEmployerList(this.props.admin.token);
  // }

  render() {
    // const data = this.props.admin.list;
    return (
      <div>
        <Table columns={columns} />
        {/* dataSource={data}  */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { admin: state.admin };
}

export default connect(
  mapStateToProps,
  { getEmployerList }
)(EmployerList);
