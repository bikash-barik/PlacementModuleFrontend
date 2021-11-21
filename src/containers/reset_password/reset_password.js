import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Form, Input, Button } from "antd";

//Action Creators
import { resetPassword } from "../../store/actions";

//Form Layout
import { formItemLayout, tailFormItemLayout } from "../form_layout";

//CSS
import "../../style/reset_password.css";

const FormItem = Form.Item;

class ResetPassword extends Component {
  state = {
    confirmDirty: false,
    token: "",
    message: ""
  };

  componentWillMount(state) {
    const tempUrl = window.location.href;
    const splitUrl = tempUrl.split("=");
    const tempToken = splitUrl[1];
    this.setState({ token: tempToken });
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  //   if (
  //     nextProps.reset.message === "Error. Could not update password." ||
  //     nextProps.reset.message === "Server Error. Something Broke!"
  //   ) {
  //     alert(
  //       "Error. Could not update password because of some issue. Please try again."
  //     );
  //   } else if (nextProps.reset.message === "Password Successfully updated.") {
  //     this.setState({
  //       message: nextProps.reset.message + " Redirecting to login ......."
  //     });
  //     setTimeout(props => {
  //       this.props.history.push("/login");
  //     }, 2000);
  //   }
  // }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const tempValue = {
          token: this.state.token,
          password: values.password
        };
        this.props.resetPassword(tempValue);
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
    if (value && value !== form.getFieldValue("password")) {
      callback("The 2 passwords that you have entered are inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="form-wrapper" onSubmit={this.handleSubmit}>
        <FormItem {...tailFormItemLayout}>
          <p>Please enter your new password below.</p>
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your new password!"
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
              prefix={<Icon type="lock" className="input-icon-style" />}
              placeholder="Confirm Password"
              onBlur={this.handleConfirmBlur}
            />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <p>{this.state.message}</p>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            // loading={this.props.reset.loading}
          >
            Reset Password
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const ResetPasswordForm = Form.create()(ResetPassword);

function mapStateToProps(state) {
  return { reset: state.reset };
}

export default connect(mapStateToProps, { resetPassword })(ResetPasswordForm);
