import React, { Component } from "react";
import { Button, Form, Input, Popover, Progress, Alert, message } from "antd";
import styles from "./index.module.less";
import { Link, withRouter } from "react-router-dom";
import FormInputButton from "../../../components/FormInputButton";
import { register, sendIdentifyCode } from "../../../services/apiAuthorization";

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

const codeButtonMessage = {
  normal: "发送验证码",
  error: "s后重发"
};

class Register extends Component {
  state = {
    confirmDirty: false,
    visible: false,
    codeButtonLoading: false,
    registerLoading: false,
    showError: false,
    codeButtonDisabled: false,
    codeButtonMessage: codeButtonMessage.normal,
    errorMessage: "",
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
    this.props.form.validateFields({ force: true }, async (err, values) => {
      if (!err) {
        try {
          this.setState({ registerLoading: true });
          await register(values);
          this.setState({ registerLoading: false });
          message.success("注册成功，请登录");
          this.props.history.push("/login");
        } catch (e) {
          let errorMessage = "";
          if (e.name === 418) {
            errorMessage = "验证码错";
          } else if (e.name === 419) {
            errorMessage = "邮箱已使用";
          } else {
            errorMessage = "错误的报错信息";
          }
          this.setState({
            errorMessage,
            showError: true,
            registerLoading: false
          });
        }
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

  handleCodeSend = async email => {
    this.setState({ codeButtonLoading: true });
    try {
      await sendIdentifyCode(email);
      this.setState({ showError: false, codeButtonLoading: false });
      let leftTime = 30;
      this.setState({
        codeButtonDisabled: true,
        codeButtonMessage: leftTime + codeButtonMessage.error
      });
      const interval = setInterval(() => {
        this.setState({
          codeButtonDisabled: true,
          codeButtonMessage: leftTime + codeButtonMessage.error
        });
        leftTime -= 1;
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        this.setState({
          codeButtonDisabled: false,
          codeButtonMessage: codeButtonMessage.normal
        });
      }, 30000);
    } catch (e) {
      this.setState({
        showError: true,
        errorMessage: "验证码发送失败",
        codeButtonLoading: false
      });
    } finally {
      this.setState({ codeButtonLoading: false });
    }
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const {
      registerLoading,
      codeButtonLoading,
      showError,
      errorMessage,
      codeButtonMessage,
      codeButtonDisabled
    } = this.state;
    return (
      <div className={styles.main}>
        {showError ? (
          <Alert
            style={{ marginBottom: 24 }}
            message={errorMessage}
            type="error"
          />
        ) : (
          undefined
        )}
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
                disabled={codeButtonDisabled}
                buttonContent={codeButtonMessage}
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
              loading={registerLoading}
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

export default withRouter(Form.create()(Register));
