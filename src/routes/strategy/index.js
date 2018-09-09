import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import Question from "../../components/Question";
import { makeAnswer } from "../../services/apiStrategy";
import SmallPoint from "../../components/SmallPoint";
import Part2 from "../../components/Question/Part2/index";
import {withRouter} from "react-router-dom";
import {message} from "antd/lib/index";
import {setUserProfile} from "../../services/apiUser";

class Strategy extends PureComponent {

  state = {
    step: 0
  };

  handleFormSubmit1 = async values => {
    const result= await makeAnswer(values);
    this.props.history.push({
      pathname: '/strategy/result',
      state: result
    });
  };

    handleSubmitPart2 = async values => {
      try {
            setUserProfile(values);
            message.success("提交成功！");
      } catch (e) {
            let errorMessage = "";
            if (e.name === 418) {
                errorMessage = "xxx";
            }
      }
      setTimeout(this.setState({
          step: 1
      }), 1000)
    }

  render() {
    return (
      <div className={Styles.section}>
        <div className={Styles.item}>
          <div style={{height:30}} />
            {
                { 0:<Part2 onSubmit={this.handleSubmitPart2}/>,
                  1:<Question onSubmit={this.handleFormSubmit1} />}[this.state.step]
            }
        </div>
      </div>
    );
  }
}


export default withRouter(Strategy);
