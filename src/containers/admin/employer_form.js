import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Select, Input, Button, InputNumber } from "antd";

import { employerAdd } from "../../store/actions";

const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;

class EmployerFormModule extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        console.log(this.props.admin.token);
        this.props.employerAdd(values, this.props.admin.token);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <h1 className="employer-form-title">Company Register Form</h1>
        <Form className="module-wrapper" onSubmit={this.handleSubmit}>
          <FormItem className="employer-form-field" label="Company Name">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please enter a Company Name."
                }
              ]
            })(<Input type="text" placeholder="Company Name" />)}
          </FormItem>
          <FormItem className="employer-form-field" label="Category">
            {getFieldDecorator("category", {
              rules: [
                {
                  required: true,
                  message: "Please select the category."
                }
              ]
            })(
              <Select placeholder="Category">
                <Option value="A1">A1</Option>
                <Option value="A">A</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="CTC">
            {getFieldDecorator("ctc", {
              rules: [
                {
                  required: true,
                  message: "Please enter your password!"
                }
              ]
            })(
              <InputNumber
                className="employer-form-field-ctc"
                placeholder="CTC"
              />
            )}
          </FormItem>
          <FormItem className="employer-form-field" label="Description">
            {getFieldDecorator("description", {
              rules: [
                {
                  required: true,
                  message: "Please enter your description."
                }
              ]
            })(<TextArea rows={4} />)}
          </FormItem>
          <FormItem className="employer-form-field" label="Profile">
            {getFieldDecorator("profile", {
              rules: [
                {
                  required: true,
                  message: "Please enter a Profile."
                }
              ]
            })(<Input type="text" placeholder="Profile" />)}
          </FormItem>
          <FormItem className="employer-form-field" label="Job Type">
            {getFieldDecorator("jobType", {
              rules: [
                {
                  required: true,
                  message: "Please select a jobType."
                }
              ]
            })(
              <Select placeholder="Job Type">
                <Option value="I2">2 Month Internship</Option>
                <Option value="I6">6 Month Internship</Option>
                <Option value="J">Job</Option>
                <Option value="I+J">Internship and Job</Option>
              </Select>
            )}
          </FormItem>
          <FormItem className="employer-form-field" label="Batch">
            {getFieldDecorator("batch", {
              rules: [
                {
                  required: true,
                  message: "Please enter a Batch."
                }
              ]
            })(<Input type="text" placeholder="Batch" />)}
          </FormItem>
          <FormItem>
            <Button size="large" type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const EmployerForm = Form.create()(EmployerFormModule);

function mapStateToProps(state) {
  return {
    admin: state.admin
  };
}

export default connect(
  mapStateToProps,
  { employerAdd }
)(EmployerForm);
