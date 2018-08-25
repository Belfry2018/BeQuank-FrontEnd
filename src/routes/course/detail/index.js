import React, { PureComponent } from "react";
import FontMock from "../../../components/AuthorizationComponents/FontMock";
import { getTheTutorial } from "../../../services/apiCourse";
import Article from "../../../components/Article";
import Styles from "../index.module.less";

export default class CourseDetail extends PureComponent {
  state = {
    tutorial: {}
  };

  async componentDidMount() {
    const { tutorialId } = this.props.match.params;
    if (tutorialId) {
      const tutorial = await getTheTutorial(tutorialId);
      this.setState({ tutorial });
    }
  }

  render() {
    const {
      title,
      cover,
      abstract,
      content,
      authorNickname,
      authorId,
      time,
      tutorialType
    } = this.state.tutorial;
    return (
      <div className={Styles.bodySection}>
        <div className={Styles.bodyItem}>
          <Article
            titleContent={title}
            date={time}
            authorName={authorNickname}
            backgroundImgURL={cover}
            articleContent={content}
            tutorialType={tutorialType}
          />
        </div>
      </div>
    );
  }
}
