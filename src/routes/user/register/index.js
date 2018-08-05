import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Popover,
  Progress,
  Alert,
} from "antd";
import styles from "./index.module.less";
import { Link } from "react-router-dom";
import FormInputButton from "../../../components/FormInputButton";
import {sendIdentifyCode} from "../../../services/apiAuthorization";

const passwordStatusMap = {
  ok: <div className={styles.success}>强度：强</div>,
  pass: <div className={styles.warning}>强度：中</div>,
  poor: <div className={styles.error}>强度：太短</div>
};

const passwordProgressMap = {
  ok: "success",
  pass: "normal",
  poor: "exception"
};

class Register extends Component {
  state = {
    confirmDirty: false,
    visible: false,
    codeButtonLoading: false,
    showError: false,
    errorMessage:"",
    help: ""
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getPasswordStatus = () => {
    const { form } = this.props;
    const value = form.getFieldValue("password");
    if (value && value.length > 9) {
      return "ok";
    }
    if (value && value.length > 5) {
      return "pass";
    }
    return "poor";
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields({ force: true }, (err, values) => {
      if (!err) {
      }
    });
  };

  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("两次输入的密码不匹配!");
    } else {
      callback();
    }
  };

  checkPassword = (rule, value, callback) => {
    if (!value) {
      this.setState({
        help: "请输入密码！",
        visible: !!value
      });
      callback("error");
    } else {
      this.setState({
        help: ""
      });
      if (!this.state.visible) {
        this.setState({
          visible: !!value
        });
      }
      if (value.length < 6) {
        callback("error");
      } else {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(["confirm"], { force: true });
        }
        callback();
      }
    }
  };

  renderPasswordProgress = () => {
    const { form } = this.props;
    const value = form.getFieldValue("password");
    const passwordStatus = this.getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };

  handleCodeSend = async (email) => {
    this.setState({codeButtonLoading:true});
    try {
      await sendIdentifyCode(email);
    }catch (e) {
      this.setState({showError:true,
        errorMessage:"验证码发送失败"
      })
    }finally {
      this.setState({codeButtonLoading:false});
    }
  };

  render() {
    const { form, submitting } = this.props;
    const { getFieldDecorator } = form;
    const { codeButtonLoading,showError,errorMessage } = this.state;
    return (
      <div className={styles.main}>
        {showError?<Alert message={errorMessage} type="error" />:undefined}
        <Form layout={"horizontal"} onSubmit={this.handleSubmit}>
          <Form.Item label={"昵称"}>
            {getFieldDecorator("nickname", {
              rules: [
                {
                  required: true,
                  message: "请输入昵称！"
                }
              ]
            })(<Input size="large" placeholder="昵称" />)}
          </Form.Item>
          <Form.Item label={"邮箱"}>
            {getFieldDecorator("email", {
              rules: [
                {
                  required: true,
                  message: "请输入邮箱！"
                }
              ]
            })(
              <FormInputButton
                loading={codeButtonLoading}
                buttonEvent={this.handleCodeSend}
                size="large"
                placeholder="账户名"
                buttonContent="发送验证码"
              />
            )}
          </Form.Item>
          <Form.Item label={"验证码"}>
            {getFieldDecorator("identifyCode", {
              rules: [
                {
                  required: true,
                  message: "请输入验证码！"
                }
              ]
            })(<Input size="large" placeholder="验证码" />)}
          </Form.Item>
          <Form.Item label={"密码"} help={this.state.help}>
            <Popover
              content={
                <div style={{ padding: "4px 0" }}>
                  {passwordStatusMap[this.getPasswordStatus()]}
                  {this.renderPasswordProgress()}
                  <div style={{ marginTop: 10 }}>
                    请至少输入 6 个字符。请不要使用容易被猜到的密码。
                  </div>
                </div>
              }
              overlayStyle={{ width: 240 }}
              placement="right"
              visible={this.state.visible}
            >
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true
                  },
                  {
                    validator: this.checkPassword
                  }
                ]
              })(
                <Input
                  size="large"
                  type="password"
                  placeholder="至少6位密码，区分大小写"
                />
              )}
            </Popover>
          </Form.Item>
          <Form.Item label={"再次输入密码"}>
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "请确认密码！"
                },
                {
                  validator: this.checkConfirm
                }
              ]
            })(<Input size="large" type="password" placeholder="确认密码" />)}
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              loading={submitting}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              注册
            </Button>
            <Link className={styles.login} to="/login">
              使用已有账户登录
            </Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Register);
