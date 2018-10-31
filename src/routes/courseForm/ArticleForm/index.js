import React from "react";
import { Form, Radio, Button, Input } from "antd";
import AvatarUploader from "../../../components/AvatarUploader";
import {
  ADVANCED,
  BEGINNER,
  INTERMEDIATE,
  typeToChinese
} from "../../../utils/TutorialType";

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const { TextArea } = Input;

class Question extends React.Component {
  state = {
    loading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { onSubmit = () => {} } = this.props;
        this.setState({ loading: true });
        await onSubmit(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    return (
      <Form layout={"vertical"} onSubmit={this.handleSubmit}>
        <FormItem label={"标题"}>
          {getFieldDecorator("title", {
            rules: [
              {
                required: true
              }
            ]
          })(<Input style={{ width: "100%" }} placeholder={"请输入标题"} />)}
        </FormItem>
        <FormItem label={"简要描述"}>
          {getFieldDecorator("abstract", {
            rules: [
              {
                required: true
              }
            ]
          })(<TextArea style={{ width: "100%" }} rows={4} />)}
        </FormItem>
        <FormItem label={"教程类型"}>
          {getFieldDecorator("tutorialType", {
            rules: [
              {
                required: true,
                message: "您尚未作出选择"
              }
            ]
          })(
            <RadioGroup>
              <Radio value={BEGINNER}>{typeToChinese(BEGINNER)}</Radio>
              <Radio value={INTERMEDIATE}>{typeToChinese(INTERMEDIATE)}</Radio>
              <Radio value={ADVANCED}>{typeToChinese(ADVANCED)}</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem label="题图">
          {getFieldDecorator("cover", {
            rules: [
              {
                required: true
              }
            ]
          })(
            <AvatarUploader
              width={900}
              height={500}
              specialCode={"?x-oss-process=style/main_cover"}
            />
          )}
        </FormItem>
        <FormItem label={"文章内容"}>
          {getFieldDecorator("content", {
            rules: [
              {
                required: true
              }
            ]
          })(<TextArea style={{ width: "100%" }} rows={10} />)}
        </FormItem>
        <FormItem>
          <Button
            size="large"
            style={{ width: "200px" }}
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(Question);
