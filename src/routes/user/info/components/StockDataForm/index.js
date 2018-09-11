import React from "react";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Divider,
  Button,
  message,
  Slider
} from "antd";
import styles from "../form.module.less";
import { setUserProfile } from "../../../../../services/apiUser";
import SmallPoint from "../../../../../components/SmallPoint";
import { NavLink } from "react-router-dom";
const FormItem = Form.Item;

class StockDataForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  //导航到测试问卷界面
  handleRetest = () => {
    message.info("重新测试");
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

  transMoneyLevel = level => {
    switch (level) {
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
  };

  transExpectedProfit = p => {
    if (p <= 5) {
      return 5;
    } else if (p <= 10) {
      return 10;
    } else if (p <= 15) {
      return 15;
    } else if (p <= 20) {
      return 20;
    } else if (p <= 25) {
      return 25;
    } else {
      return 30;
    }
  };

  render() {
    const { level, expectedProfit, moneyLevel } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <div className={styles["main"]}>
        <SmallPoint title={"选股数据"} />

        <Form
          layout={"vertical"}
          className={styles.form}
          onSubmit={this.handleSubmit}
        >
          <FormItem
            label="投入资金数量级"
            extra={"*您在股票投资上的预期投资金额"}
          >
            {getFieldDecorator("moneyLevel", {
              initialValue: this.transMoneyLevel(moneyLevel)
            })(
              <Slider
                marks={{ 1: "几千", 2: "几万", 3: "几十万", 4: "几百万" }}
                step={null}
                max={4.3}
                min={0.7}
                tipFormatter={null}
              />
            )}
          </FormItem>
          <Divider />
          <FormItem
            label="预期收益百分比"
            extra={"*您的理想收益水平，希望您权衡收益与风险水平"}
          >
            {getFieldDecorator("expectedProfit", {
              initialValue: this.transExpectedProfit(expectedProfit)
            })(
              <Slider
                marks={{
                  5: "5%",
                  10: "10%",
                  15: "15%",
                  20: "20%",
                  25: "25%",
                  30: "30%"
                }}
                step={null}
                max={33}
                min={2}
                tipFormatter={null}
              />
            )}
          </FormItem>
          <Divider />
          <FormItem
            label="您的风险承受能力评级"
            extra="*通过参与我们的问卷，您可以得到自己的的风险承受能力评级。我们也会根据您的评级进行与之匹配的股票推荐"
          >
            {getFieldDecorator("level", {
              initialValue: level
            })(<Input disabled={true} />)}
            <p />
            <Button type={"default"}>
              <NavLink to={"/strategy"}>重新测评</NavLink>
            </Button>
          </FormItem>

          <Divider />

          <FormItem>
            <Button type="primary" htmlType="submit">
              更新信息
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(StockDataForm);
