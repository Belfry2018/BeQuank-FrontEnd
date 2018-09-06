import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import Question from "../../components/Question";
import { makeAnswer } from "../../services/apiStrategy";
import SmallPoint from "../../components/SmallPoint";
import {withRouter} from "react-router-dom";

class Strategy extends PureComponent {
  handleFormSubmit = async values => {
    const result= await makeAnswer(values);
    this.props.history.push({
      pathname: '/strategy/result',
      state: result
    });
  };

  render() {
    return (
      <div className={Styles.section}>
        <div className={Styles.item}>
          <SmallPoint title={"策略问卷"} />
          <div style={{height:30}} />
          <Question onSubmit={this.handleFormSubmit} />
        </div>
      </div>
    );
  }
}


export default withRouter(Strategy);
