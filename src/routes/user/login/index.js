import React from "react";
import { Form, Icon, Input, Button} from "antd";
import {Link} from "react-router-dom";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
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
            style={{ width: "100%", marginBottom:5 }}
          >
            登 陆
          </Button>
          Or <Link to="/register">立即注册</Link>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(NormalLoginForm);
