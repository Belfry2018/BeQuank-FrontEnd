import React from "react";
import { changePassword } from "../../../../../../services/apiUser";
import { Form, Input, Button, message } from "antd";

const FormItem = Form.Item;

class PasswordForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    changePassword: false,
    confirmLoadingPassword: false
  };

  //修改密码的请求
  handleOk = e => {
    this.setState({
      confirmLoadingPassword: true
    });
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        try {
          changePassword(values);
          message.success("密码修改成功");
        } catch (e) {
          let errorMessage = "";
          if (e.name === 418) {
          }
        }
      }
    });
    setTimeout(() => {
      this.setState({
        changePassword: false,
        confirmLoadingPassword: false
      });
    }, 2000);
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("newPassword")) {
      callback("Two passwords that you enter is inconsistent!");
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
      <Form layout={"vertical"} onSubmit={this.handleOk}>
        <FormItem label={"旧密码"}>
          {getFieldDecorator("oriPassword", {
            rules: [
              {
                required: true,
                message: "请输入现在的密码"
              }
            ]
          })(<Input type={"password"} placeholder={"请输入现在的密码"} />)}
        </FormItem>
        <FormItem label="新密码">
          {getFieldDecorator("newPassword", {
            rules: [
              {
                required: true,
                message: "请输入新密码"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input type="password" />)}
        </FormItem>
        <FormItem label="确认密码">
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "清再次输入新密码"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </FormItem>

        <FormItem>
          <Button type="primary" onClick={this.handleOk}>
            修改密码
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(PasswordForm);
