import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Alert, message } from "antd";

//Action Creators
import { signIn } from "../../store/actions";

//Form Layout
import { formItemLayout, tailFormItemLayout } from "../form_layout";

//CSS
import "../../style/signin.css";

const FormItem = Form.Item;

class SignIn extends Component {
  // componentWillReceiveProps(nextProps) {
  //   const admin = nextProps.signin.admin;
  //   const tempMessage = nextProps.signin.message;
  //   if (tempMessage === "Successful Authentication") {
  //     if (admin) {
  //       message.success("Successful Admin Log in");
  //       this.props.history.push("/admin/users");
  //     } else {
  //       message.success("Successful Log in");
  //       this.props.history.push("/user");
  //     }
  //   }
  // }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.signIn(values);
      }
    });
  };

  // showError() {
  //   if (
  //     this.props.signin.message &&
  //     this.props.signin.message !== "Successful Authentication"
  //   ) {
  //     return (
  //       <Alert
  //         className="alert-signin"
  //         message={this.props.signin.message}
  //         type="error"
  //         showIcon
  //       />
  //     );
  //   } else {
  //     return;
  //   }
  // }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form
        className="signin-form-wrapper mx-auto"
        onSubmit={this.handleSubmit}
      >
        <h1 className="heading">Sign in</h1>
        <FormItem {...formItemLayout} label="Student ID">
          {getFieldDecorator("sid", {
            rules: [{ required: true, message: "Enter student ID!" }]
          })(
            <Input
              prefix={<Icon type="user" className="input-icon-style" />}
              placeholder="StudentID"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" className="input-icon-style" />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {/* {this.showError()} */}
          <Link to="/forgot_password">
            <a>Forgot password</a>
          </Link>
          <br />
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            // loading={this.props.signin.loading}
          >
            Sign in
          </Button>
          <br />
          Or <Link to="/signup"><a>Sign up now!</a></Link>
        </FormItem>
      </Form>
    );
  }
}

const SignInForm = Form.create()(SignIn);

function mapStateToProps(state) {
  return { signin: state.signin };
}

export default connect(
  mapStateToProps,
  { signIn }
)(SignInForm);
