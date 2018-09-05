import React from "react";
import {
  Form, Radio,Divider
} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
import styles from "./index.module.less";

class Question extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>1. 您曾经有没有投资您部分或全部资金的经历？</div>
          {getFieldDecorator("1")(
            <RadioGroup>
              <Radio value="a">没有，我不希望承担任何的投资风险</Radio>
              <Radio value="b">我从未投资过，但我希望我将来能够投资</Radio>
              <Radio value="c">我曾进行过少量投资。我持有的目的是为了长期升值。</Radio>
              <Radio value="d">我曾进行过大量投资。我持有的目的是为了长期升值。</Radio>
              <Radio value="e">我我经常进行投资，会在短期较高频率的买卖股票</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>2. 您能够承受的最低的回报率？</div>
          {getFieldDecorator("2")(
            <RadioGroup>
              <Radio value="a">没我不能承受任何的负回报率</Radio>
              <Radio value="b">-10%</Radio>
              <Radio value="c">-20%</Radio>
              <Radio value="d">-30%</Radio>
              <Radio value="e">我甚至可以接受低于-30%的回报率。因为我知道风险越大收益越大</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>3. 对于一个波动较大，但长期看来具有升值潜力的投资机会。你会怎么看？</div>
          {getFieldDecorator("3")(
            <RadioGroup>
              <Radio value="a">十分诱人</Radio>
              <Radio value="b">还可以</Radio>
              <Radio value="c">相当危险</Radio>
              <Radio value="d">根本不适合我</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>4. 您对投资和相关产品有何了解？</div>
          {getFieldDecorator("4")(
            <RadioGroup>
              <Radio value="a">我对投资和相关产品一无所知</Radio>
              <Radio value="b">我对投资和相关产品了解的很少</Radio>
              <Radio value="c">我对投资和相关产品了解的比较多，如果得到专业人士的协助，我可以做出投资决策</Radio>
              <Radio value="d">我完全熟悉投资和相关产品，可以不靠他人协助做出自己的投资决策</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>5. 下面哪一个更好地描述了您对于投资的立场？</div>
          {getFieldDecorator("5")(
            <RadioGroup>
              <Radio value="a">我不希望我的财富有任何的投资风险，即使这会减少我获得回报的机会</Radio>
              <Radio value="b">如果投资能够表现得很好，我可以考虑承受一些投资风险</Radio>
              <Radio value="c">我愿意承担较多的风险，来获得一个比较高的收益</Radio>
              <Radio value="d">我不介意承担投资风险，因为我知道风险和回报密不可分</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>6. 如果您的投资出现了较大波动或负面的回报，您会做出如下哪一个决策？</div>
          {getFieldDecorator("6")(
            <RadioGroup>
              <Radio value="a">我会马上售卖掉所有的投资</Radio>
              <Radio value="b">我会将我的投资转为波动更小的投资类别</Radio>
              <Radio value="c">我会暂时保持不动，因为我相信长期投资</Radio>
              <Radio value="d">我将去增持其他股票以对冲风险</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>7. 根据您的投资偏好，您希望一个五年期的投资正常可以获得多少的年收益？</div>
          {getFieldDecorator("7")(
            <RadioGroup>
              <Radio value="a">低于10%</Radio>
              <Radio value="b">10%-20%</Radio>
              <Radio value="c">20%-30%</Radio>
              <Radio value="d">高于30%</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>8. 您的投资动机是？</div>
          {getFieldDecorator("8")(
            <RadioGroup>
              <Radio value="a">防止资产因为通货膨胀而贬值</Radio>
              <Radio value="b">作为收入来源</Radio>
              <Radio value="c">作为收入来源以及资本增值</Radio>
              <Radio value="d">作为资产增值</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>9. 您最能够接受的投资期限是？</div>
          {getFieldDecorator("9")(
            <RadioGroup>
              <Radio value="a">6-12月</Radio>
              <Radio value="b">1-2年</Radio>
              <Radio value="c">2-3年</Radio>
              <Radio value="d">高于三年</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>10. 在未来十二个月，您是否有资金必须要提取出来使用？（例如偿还贷款）</div>
          {getFieldDecorator("10")(
            <RadioGroup>
              <Radio value="a">有，并且这部分资金超过80%</Radio>
              <Radio value="b">有，并且这部分资金占了将近一半</Radio>
              <Radio value="c">有，并且这部分资金占了接近20%</Radio>
              <Radio value="d">无</Radio>
            </RadioGroup>
          )}
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(Question);