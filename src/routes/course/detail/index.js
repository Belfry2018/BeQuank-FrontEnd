import React, { PureComponent } from "react";
import FontMock from "../../../components/AuthorizationComponents/FontMock";
import { getTheTutorial } from "../../../services/apiCourse";
import Article from "../../../components/Article";
import Styles from "../index.module.less";
import Comment from "../components/Comment";

export default class CourseDetail extends PureComponent {
  state = {
    tutorial: {}
  };

  async componentDidMount() {
    await this.getTutorial();
  }

  commentSuccessEvent = async () => {
    await this.getTutorial();
  };

  getTutorial = async () => {
    const { tutorialId } = this.props.match.params;
    if (tutorialId) {
      const tutorial = await getTheTutorial(tutorialId);
      this.setState({ tutorial });
    }
  };

  render() {
    const { tutorialId } = this.props.match.params;
    const {
      title,
      cover,
      comments,
      content,
      author = {},
      time,
      tutorialType
    } = this.state.tutorial;
    return (
      <div className={Styles.bodySection}>
        <div className={Styles.bodyItem}>
          <Article
            titleContent={title}
            date={time}
            author={author}
            backgroundImgURL={cover}
            articleContent={content}
            tutorialType={tutorialType}
          />
        </div>
        <div className={Styles.bodyItem}>
          <Comment commentSuccessEvent={this.commentSuccessEvent} tutorialId={tutorialId} comments={comments} />
        </div>
      </div>
    );
  }
}
