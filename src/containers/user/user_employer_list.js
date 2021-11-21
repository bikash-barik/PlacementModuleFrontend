import React, { Component } from "react";
import { connect } from "react-redux";
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
  }
];

class UserEmployerList extends Component {
  // componentDidMount() {
  //   this.props.getEmployerList(this.props.user.token);
  // }

  render() {
    // const data = this.props.user.list;
    return (
      <div>
        <p>Fire</p>
        <Table columns={columns}  />
        {/* dataSource={data} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(
  mapStateToProps,
  { getEmployerList }
)(UserEmployerList);
