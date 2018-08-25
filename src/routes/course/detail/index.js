import React, { PureComponent } from "react";
import FontMock from "../../../components/AuthorizationComponents/FontMock";
import { getTheTutorial } from "../../../services/apiCourse";
import Article from "../../../components/Article";

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
      time
    } = this.state.tutorial;
    return (
      <div>
        <Article
          titleContent={title}
          date={time}
          authorName={authorNickname}
          backgroundImgURL={cover}
          articleContent={content}
        />
      </div>
    );
  }
}
