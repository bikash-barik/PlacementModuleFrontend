import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button } from "antd";

//Action Creators
import { initFP } from "../../store/actions";

//Form Layout
import { formItemLayout, tailFormItemLayout } from "../form_layout";

//CSS
import "../../style/forgot_password.css";

const FormItem = Form.Item;

class ForgotPasswordForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.initFP(values);
        this.props.form.resetFields();
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="form-wrapper">
        <FormItem {...tailFormItemLayout}>
          <p>
            Please enter you Student ID below and check your webmail to reset
            your password.
          </p>
        </FormItem>
        <FormItem {...formItemLayout} label="Student ID">
          {getFieldDecorator("sid", {
            rules: [
              { required: true, message: "Please enter your Student ID!" }
            ]
          })(
            <Input
              prefix={<Icon type="user" className="input-icon-style" />}
              placeholder="User ID"
            />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {/* <p>{this.props.forgot.message}</p>  */}
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            // loading={this.props.forgot.loading}
          >
            Send
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const ForgotPassword = Form.create()(ForgotPasswordForm);

function mapStateToProps(state) {
  return { forgot: state.forgot };
}
export default connect(mapStateToProps, { initFP })(ForgotPassword);
