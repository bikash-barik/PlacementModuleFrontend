import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Form, Input, Button, Alert ,message} from "antd";

//Action Creators
import { signUp } from "../../store/actions";

//Form Layout
import { formItemLayout, tailFormItemLayout } from "../form_layout";

//CSS
import "../../style/signup.css";

const FormItem = Form.Item;

class SignUp extends Component {
  state = {
    confirmDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const tempValue = {
          sid: values.sid,
          email: values.email,
          password: values.password
        };
        this.props.signUp(tempValue);
        this.props.form.resetFields();
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value.length <= 8) {
      callback("Please enter a password with atleat 8 characters long.");
    }
    if (value && value !== form.getFieldValue("password")) {
      callback("The 2 passwords that you have entered are inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value.length <= 8) {
      callback("Please enter a password with atleat 8 characters long.");
    }
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  notWebmail = (rule, value, callback) => {
    const check = "daiict.ac.in";
    if (value && value.includes(check)) {
      callback(
        "Please enter an alternate Email ID which is not your Webmail ID."
      );
    } else {
      callback();
    }
  };

  // showError() {
  //   const message = this.props.signup.message;
  //   if (message && message !== "New user created Successfully") {
  //     return (
  //       <Alert
  //         className="alert-login"
  //         message={this.props.signup.message}
  //         type="error"
  //         showIcon
  //       />
  //     );
  //   } else if (message && message === "New user created Successfully") {
  //     return (
  //       <Alert
  //         className="alert-login"
  //         message="Successfully Registered"
  //         type="success"
  //         showIcon
  //       />
  //     );
  //   }
  // }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form
        className="signup-form-wrapper mx-auto"
        onSubmit={this.handleSubmit}
      >
        <h1 className="heading">Sign Up</h1>
        <FormItem {...formItemLayout} label="Student ID">
          {getFieldDecorator("sid", {
            rules: [
              {
                required: true,
                message: "Please enter a Student ID!"
              }
            ]
          })(
            <Input
              type="number"
              prefix={<Icon type="user" className="input-icon-style" />}
              placeholder="StudentID"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Email">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "Please enter a valid Email ID!"
              },
              {
                required: true,
                message: "Please enter a Email ID!"
              },
              {
                validator: this.notWebmail
              }
            ]
          })(
            <Input
              type="email"
              prefix={<Icon type="mail" className="input-icon-style" />}
              placeholder="Email"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please enter your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(
            <Input
              type="password"
              prefix={<Icon type="lock" className="input-icon-style" />}
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Confirm Password">
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(
            <Input
              type="password"
              onBlur={this.handleConfirmBlur}
              prefix={<Icon type="lock" className="input-icon-style" />}
              placeholder="Confirm Password"
            />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {/* {this.showError()} */}
          <Button
            className="register-button"
            size="large"
            type="primary"
            htmlType="submit"
            // loading={this.props.signup.loading}
          >
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const SignUpForm = Form.create()(SignUp);

function mapStateToProps(state) {
  return { signup: state.signup };
}

export default connect(
  mapStateToProps,
  { signUp }
)(SignUpForm);
