import React from "react";
import { Form, Input, DatePicker, Select, Divider, Button } from 'antd';
import styles from "./index.module.less"

const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const Option = Select.Option;

class AccountForm extends React.Component {
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
                <div className={styles.title}>账户信息</div>
                <Divider/>
                <Form layout={"vertical"}
                      className={styles.form}
                >
                    <FormItem
                        label="邮箱"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '邮箱格式不正确',
                            }, {
                                required: true, message: '请输入您的邮箱',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>

                    <FormItem
                        label="联系电话"
                    >
                        <Input/>
                    </FormItem>

                    <FormItem >
                        <Button type="primary">更新信息</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }

}

export default Form.create()(AccountForm);