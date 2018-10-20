import React from "react";
import { Form, Input, DatePicker, Modal, Divider, Button, message } from "antd";
import styles from "../form.module.less";
import moment from "moment";
import { setUserProfile } from "../../../../../services/apiUser";
import SmallPoint from "../../../../../components/SmallPoint";
import PasswordForm from "./PasswordForm/index";

const FormItem = Form.Item;

class AccountForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    changePassword: false,
    confirmLoadingPassword: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { userProfile = {} } = this.props;
        try {
          setUserProfile({ ...userProfile, ...values });
          message.success("修改成功");
        } catch (e) {
          let errorMessage = "";
          if (e.name === 418) {
            errorMessage = "xxx";
          }
        }
      }
    });
  };

  //显示Modal
  handleChangePassword = e => {
    let tmp = this.state.changePassword;
    this.setState({
      changePassword: tmp ? false : true
    });
  };

  handleCancel = () => {
    this.setState({
      changePassword: false
    });
  };

  render() {
    const { id, email, phone, registerTime } = this.props;
    const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };

    return (
      <div className={styles["main"]}>
        <SmallPoint title={"账户管理"} />
        <Form
          layout={"vertical"}
          className={styles.form}
          onSubmit={this.handleSubmit}
        >
          <FormItem label="账户ID">
            {getFieldDecorator("id", {
              initialValue: id
            })(<Input disabled={true} />)}
          </FormItem>

          <Divider />

          <FormItem label="账户密码">
            <Button type="default" onClick={this.handleChangePassword}>
              修改密码
            </Button>
          </FormItem>

          <Divider />

          <FormItem label="邮箱">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "邮箱格式不正确"
                },
                {
                  required: true,
                  message: "请输入您的邮箱"
                }
              ],
              initialValue: email
            })(<Input disabled={true} />)}
          </FormItem>

          <FormItem label="联系电话">
            {getFieldDecorator("phone", {
              initialValue: phone
            })(<Input placeholder={"请输入您的联系电话"} />)}
          </FormItem>

          <FormItem label="注册时间">
            {getFieldDecorator("registerTime", {
              initialValue: moment(registerTime, "YYYY-MM-DD")
            })(<DatePicker disabled={true} />)}
          </FormItem>

          <FormItem>
            <Button type="primary" onClick={this.handleSubmit}>
              更新信息
            </Button>
          </FormItem>
        </Form>

        <Modal
          visible={this.state.changePassword}
          confirmLoading={this.state.confirmLoadingPassword}
          onCancel={this.handleCancel}
          title={"修改密码"}
          footer={[
            <Button key="cancel" onClick={this.handleCancel}>
              取消
            </Button>
          ]}
        >
          <PasswordForm />
        </Modal>
      </div>
    );
  }
}

export default Form.create()(AccountForm);
