import React from "react";
import { Form, Input, DatePicker, Modal, Divider, Button, message} from 'antd';
import styles from "./index.module.less";
import moment from 'moment';
import { setUserProfile, changePassword } from "../../../../../services/apiUser";

const FormItem = Form.Item;

class AccountForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        changePassword: false,
        confirmLoadingPassword: false,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                try {
                    setUserProfile(values);
                    message.success("修改成功");
                } catch (e) {
                    let errorMessage = "";
                    if (e.name === 418) {
                        errorMessage = "xxx";
                    }
                }
            }
        });
    }

    //显示Modal
    handleChangePassword = (e) => {
        let tmp = this.state.changePassword;
        this.setState({
            changePassword: tmp ? false : true,
        })
    }

    //修改密码的请求
    handleOk = (e) => {
        this.setState({
            confirmLoadingPassword: true,
        });
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                try {
                    changePassword(values);
                    message.success("密码修改成功");
                } catch (e) {
                    let errorMessage = "";
                    if (e.name === 418) {
                        errorMessage = "xxx";
                    }
                }
            }
        });
        setTimeout(() => {
            this.setState({
                changePassword: false,
                confirmLoadingPassword: false,
            });
        }, 2000);
    }

    handleCancel = () => {
        this.setState({
            changePassword: false,
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('newPassword')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    render() {
        const { id, email, phone, registerTime } = this.props;
        const { getFieldDecorator } = this.props.form;
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };

        return (
            <div className={styles["main"]}>
                <div className={styles.title}>账户管理</div>
                <Divider/>
                <Form layout={"vertical"}
                      className={styles.form}
                      onSubmit={this.handleSubmit}
                >
                    <FormItem
                        label="账户ID"
                    >
                        {getFieldDecorator('id', {
                            initialValue: id,
                        })(
                            <Input disabled={"true"} />
                        )}
                    </FormItem>

                    <Divider/>

                    <FormItem
                        label="账户密码">
                        <Button type="default" onClick={this.handleChangePassword} >修改密码</Button>
                    </FormItem>

                    <Divider/>

                    <FormItem
                        label="邮箱"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '邮箱格式不正确',
                            }, {
                                required: true, message: '请输入您的邮箱',
                            }],
                            initialValue: email,
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem
                        label="联系电话"
                    >
                        {getFieldDecorator('phone', {
                            initialValue: phone,
                        })(
                            <Input  placeholder={"请输入您的联系电话"}/>
                        )}
                    </FormItem>

                    <FormItem
                        label="注册时间"
                    >
                        {getFieldDecorator('registerTime', {
                            initialValue: moment(registerTime, 'YYYY-MM-DD'),
                        })(
                            <DatePicker disabled={"true"}/>
                        )}
                    </FormItem>

                    <FormItem >
                        <Button type="primary" htmlType="submit" >更新信息</Button>
                    </FormItem>
                </Form>
                <Modal visible={this.state.changePassword}
                       confirmLoading={this.state.confirmLoadingPassword}
                       onCancel={this.handleCancel}
                       title={"修改密码"}
                       footer={[
                           <Button key="cancel" onClick={this.handleCancel}>取消</Button>,
                       ]}>
                    <Form
                        layout={"vertical"}
                        onSubmit={this.handleOk}>
                        <FormItem
                            label={"旧密码"}>
                            {getFieldDecorator('oriPassword', {
                                rules: [{
                                    required: true, message: '请输入现在的密码',
                                }],
                            })(
                                <Input  placeholder={"请输入现在的密码"}/>
                            )}
                        </FormItem>
                        <FormItem
                            label="新密码"
                        >
                            {getFieldDecorator('newPassword', {
                                rules: [{
                                    required: true, message: '请输入新密码',
                                }, {
                                    validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="password" />
                            )}
                        </FormItem>
                        <FormItem
                            label="确认密码"
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: '清再次输入新密码',
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                        </FormItem>

                        <FormItem>
                            <Button type="primary" htmlType="submit" >修改密码</Button>
                        </FormItem>

                    </Form>
                </Modal>

            </div>
        );
    }

}

export default Form.create()(AccountForm);