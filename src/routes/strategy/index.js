import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import Question from "../../components/Question";
import { makeAnswer } from "../../services/apiStrategy";
import Part2 from "../../components/Question/Part2/index";
import { withRouter } from "react-router-dom";
import { message } from "antd/lib/index";
import { setUserProfile } from "../../services/apiUser";
import { Steps, Button } from "antd";
const Step = Steps.Step;

const steps = [
  {
    title: "收益指数测评"
  },
  {
    title: "风险指数测评"
  }
];

class Strategy extends PureComponent {
  state = {
    current: 0
  };

  handleSubmitStep2 = async values => {
    const result = await makeAnswer(values);
    this.props.history.push({
      pathname: "/strategy/result",
      state: result
    });
    const current = this.state.current + 1;
    this.setState({ current });
  };

  handleSubmitStep1 = async values => {
    try {
      setUserProfile(values);
    } catch (e) {
      let errorMessage = "";
      if (e.name === 418) {
        errorMessage = "xxx";
      }
    }
    const current = this.state.current + 1;
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <div className={Styles.section}>
        <Steps current={current} className={Styles.item}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className={Styles.item}>
          {current === 0 && <Part2 onSubmit={this.handleSubmitStep1} />}
          {current === 1 && <Question onSubmit={this.handleSubmitStep2} />}
          {current === 2 && <div>Done</div>}
        </div>
      </div>
    );
  }
}

export default withRouter(Strategy);
