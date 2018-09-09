import React from "react";
import styles from "./index.module.less";
import { Form, Input, Divider, Button, message, Slider } from 'antd';
import { setUserProfile } from "../../../services/apiUser";
import SmallPoint from "../../../components/SmallPoint";

const FormItem = Form.Item;

class Part2 extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const {onSubmit=()=>{}}=this.props;
                this.setState({loading:true});
                await onSubmit(values);
            }
        });
    };

    transMoneyLevel = (level) => {
        switch (level){
            case "千":
                return 1;
            case "万":
                return 2;
            case "十万":
                return 3;
            case "百万":
                return 4;
            default:
                return 1;
        }
    }

    transExpectedProfit = (p) => {
        if (p <= 5) {
            return 5;
        }
        else if (p <= 10) {
            return 10;
        }
        else if (p <= 15) {
            return 15;
        }
        else if (p <= 20) {
            return 20;
        }
        else if (p <= 25) {
            return 25;
        }
        else {
            return 30;
        }
    }

    render() {
        const{ level, expectedProfit, moneyLevel } = this.props;
        const { getFieldDecorator } = this.props.form;

        return (
            <div className={styles["main"]}>
                <SmallPoint title={"选股数据"}/>

                <Form layout={"vertical"}
                      className={styles.form}
                      onSubmit={this.handleSubmit}
                >
                    <FormItem
                        label="投入资金数量级"
                        extra={"*您在股票投资上的预期投资金额"}
                    >
                        {getFieldDecorator('moneyLevel', {
                            initialValue: this.transMoneyLevel(moneyLevel)
                        })(
                            <Slider marks={{ 1: '几千', 2: '几万', 3: '几十万', 4: '几百万' }} step={null}
                                    max={4.3} min={0.7} tipFormatter={null}/>
                        )}
                    </FormItem>
                    <Divider/>
                    <FormItem
                        label="预期收益百分比"
                        extra={"*您的理想收益水平，希望您权衡收益与风险水平"}
                    >
                        {getFieldDecorator('expectedProfit', {
                            initialValue: this.transExpectedProfit(expectedProfit)
                        })(
                            <Slider marks={{ 5: '5%', 10: '10%', 15: '15%', 20: '20%', 25: '25%', 30:'30%' }} step={null}
                                    max={33} min={2} tipFormatter={null}/>
                        )}
                    </FormItem>
                    <Divider/>

                    <FormItem >
                        <Button type="primary" htmlType="submit">提交信息</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }

}

export default Form.create()(Part2);