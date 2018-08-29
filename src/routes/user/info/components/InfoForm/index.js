import React from "react";
import { Form, Input, DatePicker, Select, Divider, Button } from 'antd';
import styles from "./index.module.less"

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
            }
        });
    }

    render() {
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
                >
                    <FormItem
                        label="昵称"
                    >
                        {getFieldDecorator('input', {
                            rules: [
                                { required: true, message: '请输入昵称' },
                            ],
                        })(
                           <Input placeholder={"请输入昵称"}/>
                        )}
                    </FormItem>

                    <FormItem
                        label="性别"
                    >
                        {getFieldDecorator('select', {
                            rules: [
                                { required: false, message: '请选择性别' },
                            ],
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
                        {getFieldDecorator('month-picker', config)(
                            <MonthPicker />
                        )}
                    </FormItem>

                    <FormItem
                        label="注册时间"
                    >
                        {getFieldDecorator('date-picker', config)(
                            <DatePicker disabled={"true"}/>
                        )}
                    </FormItem>

                    <FormItem >
                        <Button type="primary">更新信息</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }

}

export default Form.create()(InfoForm);