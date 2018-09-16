import React from "react";
import {
  Form, Radio, Divider, Button
} from 'antd';
import styles from "./index.module.less";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Question extends React.Component {
  
  state={
    loading:false
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

  render() {
    const { getFieldDecorator } = this.props.form;
    const {loading}=this.state;
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
          {getFieldDecorator("1", {
              rules: [{
                  required: true,
                  message:"      您尚未作出选择",
              }],
          })(
            <RadioGroup>
              <Radio value="A">没有，我不希望承担任何的投资风险</Radio>
              <Radio value="B">我从未投资过，但我希望我将来能够投资</Radio>
              <Radio value="C">我曾进行过少量投资。我持有的目的是为了长期升值。</Radio>
              <Radio value="D">我曾进行过大量投资。我持有的目的是为了长期升值。</Radio>
              <Radio value="E">我我经常进行投资，会在短期较高频率的买卖股票</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>2. 您能够承受的最低的回报率？</div>
          {getFieldDecorator("2", {
              rules: [{
                  required: true,
                  message:"      您尚未作出选择",
              }],
          })(
            <RadioGroup>
              <Radio value="A">没，我不能承受任何的负回报率</Radio>
              <Radio value="B">-10%</Radio>
              <Radio value="C">-20%</Radio>
              <Radio value="D">-30%</Radio>
              <Radio value="E">我甚至可以接受低于-30%的回报率。因为我知道风险越大收益越大</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>3. 对于一个波动较大，但长期看来具有升值潜力的投资机会。你会怎么看？</div>
          {getFieldDecorator("3", {
              rules: [{
                  required: true,
                  message:"      您尚未作出选择",
              }],
          })(
            <RadioGroup>
              <Radio value="A">十分诱人</Radio>
              <Radio value="B">还可以</Radio>
              <Radio value="C">相当危险</Radio>
              <Radio value="D">根本不适合我</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>4. 您对投资和相关产品有何了解？</div>
          {getFieldDecorator("4", {
              rules: [{
                  required: true,
                  message:"      您尚未作出选择",
              }],
          })(
            <RadioGroup>
              <Radio value="A">我对投资和相关产品一无所知</Radio>
              <Radio value="B">我对投资和相关产品了解的很少</Radio>
              <Radio value="C">我对投资和相关产品了解的比较多，如果得到专业人士的协助，我可以做出投资决策</Radio>
              <Radio value="D">我完全熟悉投资和相关产品，可以不靠他人协助做出自己的投资决策</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>5. 下面哪一个更好地描述了您对于投资的立场？</div>
          {getFieldDecorator("5", {
              rules: [{
                  required: true,
                  message:"      您尚未作出选择",
              }],
          })(
            <RadioGroup>
              <Radio value="A">我不希望我的财富有任何的投资风险，即使这会减少我获得回报的机会</Radio>
              <Radio value="B">如果投资能够表现得很好，我可以考虑承受一些投资风险</Radio>
              <Radio value="C">我愿意承担较多的风险，来获得一个比较高的收益</Radio>
              <Radio value="D">我不介意承担投资风险，因为我知道风险和回报密不可分</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>6. 如果您的投资出现了较大波动或负面的回报，您会做出如下哪一个决策？</div>
          {getFieldDecorator("6", {
              rules: [{
                  required: true,
                  message:"      您尚未作出选择",
              }],
          })(
            <RadioGroup>
              <Radio value="A">我会马上售卖掉所有的投资</Radio>
              <Radio value="B">我会将我的投资转为波动更小的投资类别</Radio>
              <Radio value="C">我会暂时保持不动，因为我相信长期投资</Radio>
              <Radio value="D">我将去增持其他股票以对冲风险</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>7. 根据您的投资偏好，您希望一个五年期的投资正常可以获得多少的年收益？</div>
          {getFieldDecorator("7", {rules: [{
                  required: true,
                  message:"      您尚未作出选择",
              }],
          })(
            <RadioGroup>
              <Radio value="A">低于10%</Radio>
              <Radio value="B">10%-20%</Radio>
              <Radio value="C">20%-30%</Radio>
              <Radio value="D">高于30%</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>8. 您的投资动机是？</div>
          {getFieldDecorator("8", {
              rules: [{
                  required: true,
                  message:"      您尚未作出选择",
              }],
          })(
            <RadioGroup>
              <Radio value="A">防止资产因为通货膨胀而贬值</Radio>
              <Radio value="B">作为收入来源</Radio>
              <Radio value="C">作为收入来源以及资本增值</Radio>
              <Radio value="D">作为资产增值</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>9. 您最能够接受的投资期限是？</div>
          {getFieldDecorator("9", {
              rules: [{
                  required: true,
                  message:"      您尚未作出选择",
              }],
          })(
            <RadioGroup>
              <Radio value="A">6-12月</Radio>
              <Radio value="B">1-2年</Radio>
              <Radio value="C">2-3年</Radio>
              <Radio value="D">高于三年</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <Divider/>
        <FormItem
          {...formItemLayout}
        >
          <div className={styles["question"]}>10. 在未来十二个月，您是否有资金必须要提取出来使用？（例如偿还贷款）</div>
          {getFieldDecorator("10", {
              rules: [{
                  required: true,
                  message:"      您尚未作出选择",
              }],
          })(
            <RadioGroup>
              <Radio value="A">有，并且这部分资金超过80%</Radio>
              <Radio value="B">有，并且这部分资金占了将近一半</Radio>
              <Radio value="C">有，并且这部分资金占了接近20%</Radio>
              <Radio value="D">无</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem>
          <Button
            size="large"
            style={{width:"200px"}}
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(Question);