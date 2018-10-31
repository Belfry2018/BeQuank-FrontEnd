import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class AskForm extends React.Component {
  state = {};

  //修改密码的请求
  handleOk = e => {
    this.setState({});
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        try {
        } catch (e) {
          let errorMessage = "";
          if (e.name === 418) {
          }
        }
      }
    });
    setTimeout(() => {
      this.props.onClose();
    }, 2000);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout={"vertical"} onSubmit={this.handleOk}>
        <FormItem label={"问题标题"}>
          {getFieldDecorator("questionTitle", {
            rules: [
              {
                required: true,
                message: "请用概括一下您的问题"
              }
            ]
          })(<Input type={"input"} placeholder={"请用概括一下您的问题"} />)}
        </FormItem>
        <FormItem label="问题内容">
          {getFieldDecorator("questionContent", {
            rules: [
              {
                required: true,
                message: "请输入问题内容"
              }
            ]
          })(<Input.TextArea />)}
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={this.handleOk}>
            发送问题(50金币)
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(AskForm);
