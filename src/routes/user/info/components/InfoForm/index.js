import React from "react";
import { Form, Input, DatePicker, Select, Divider, Button, message } from 'antd';
import styles from "./index.module.less"
import moment from 'moment';
import { setUserProfile } from "../../../../../services/apiUser";

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const Option = Select.Option;

class InfoForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
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

    render() {
        const{ nickName, bio, gender, birthday } = this.props;
        const { getFieldDecorator } = this.props.form;
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };

        return (
            <div className={styles["main"]}>
                <div className={styles.title}>个人信息</div>
                <Divider/>
                <Form layout={"vertical"}
                      className={styles.form}
                      onSubmit={this.handleSubmit}
                >
                    <FormItem
                        label="昵称"
                    >
                        {getFieldDecorator('nickname', {
                            rules: [
                                { required: true, message: '请输入昵称' },
                            ],
                            initialValue: nickName,
                        })(
                           <Input  placeholder={"请输入昵称"}/>
                        )}
                    </FormItem>

                    <FormItem
                        label={"个人简介"}>
                        {getFieldDecorator('bio', {
                            initialValue: bio,
                        })(
                            <Input.TextArea  placeholder={"用几句话介绍一下自己吧"}/>
                        )}
                    </FormItem>

                    <FormItem
                        label="性别"
                    >
                        {getFieldDecorator('gender', {
                            rules: [
                                { required: false, message: '请选择性别' },
                            ],
                            initialValue: gender,
                        })(
                            <Select placeholder="请选择性别">
                                <Option value="male">男</Option>
                                <Option value="female">女</Option>
                                <Option value="secret">保密</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem
                        label="出生年月"
                    >
                        {getFieldDecorator('birthday', {
                            initialValue: moment(birthday, 'YYYY-MM-DD'),
                        })(
                            <MonthPicker />
                        )}
                    </FormItem>

                    <FormItem >
                        <Button type="primary" htmlType="submit">更新信息</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }

}

export default Form.create()(InfoForm);