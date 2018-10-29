import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import Question from "./ArticleForm";
import { makeAnswer } from "../../services/apiStrategy";
import { withRouter } from "react-router-dom";
import { Steps } from "antd";
import SmallPoint from "../../components/SmallPoint";
import {tutorialTime} from "../../utils/timer";
import {pushTutorial} from "../../services/apiCourse";
const Step = Steps.Step;

class CourseForm extends PureComponent {
  state = {
    current: 0
  };

  handleSubmit = async values => {
    const articleValue = {
      ...values,
      time:tutorialTime(),
    };

    const result = await pushTutorial(articleValue);
    this.props.history.push({
      pathname: "/courseForm/result",
    });
  };

  render() {
    return (
      <div className={Styles.section}>
        <div className={Styles.simpleSection}>
          <SmallPoint title={"新建教程"}/>
          <div style={{height:20}} />
          <Question onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default withRouter(CourseForm);
