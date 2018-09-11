import React from "react";
import { Form, Icon, Input, Button, Alert, message } from "antd";
import { Link, withRouter } from "react-router-dom";
import { login } from "../../../services/apiAuthorization";
import {
  clearAuthorization,
  setAuthorization
} from "../../../utils/authorization";

class NormalLoginForm extends React.Component {
  state = {
    showError: false,
    errorMessage: "用户名或密码错",
    loginLoading: false
  };

  componentDidMount() {
    clearAuthorization();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        try {
          this.setState({ loginLoading: true });
          const data = await login(values);
          setAuthorization(data);
          this.setState({ loginLoading: false });
          this.props.history.push("/");
          message.success("登陆成功");
        } catch (e) {
          let errorMessage = "";
          // if (e.name === 421) {
          errorMessage = "用户名或密码错";
          // }
          this.setState({
            errorMessage,
            showError: true,
            registerLoading: false
          });
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { showError, errorMessage, loginLoading } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        {showError ? (
          <Alert
            style={{ marginBottom: 24 }}
            message={errorMessage}
            type="error"
          />
        ) : (
          undefined
        )}

        <Form.Item>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              size="large"
              prefix={
                <Icon
                  type="user"
                  style={{ color: "rgba(0,0,0,.25)", width: "100%" }}
                />
              }
              placeholder="邮 箱"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              size="large"
              prefix={
                <Icon
                  type="lock"
                  style={{ color: "rgba(0,0,0,.25)", width: "100%" }}
                />
              }
              type="password"
              placeholder="密 码"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            loading={loginLoading}
            style={{ width: "100%", marginBottom: 5 }}
          >
            登 陆
          </Button>
          Or <Link to="/register">立即注册</Link>
        </Form.Item>
      </Form>
    );
  }
}

export default withRouter(Form.create()(NormalLoginForm));
