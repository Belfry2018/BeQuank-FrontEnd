import React, { PureComponent } from "react";
import { message } from "antd";
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
    message.success("评论成功");
  };
  
  likeEvent=async()=>{
    await this.getTutorial();
    message.success("操作成功");
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
      tutorialType,
      likeCount,
      alreadyLike
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
            likeCount={likeCount}
            alreadyLike={alreadyLike}
            likeEvent={this.likeEvent}
            tutorialId={tutorialId}
          />
        </div>
        <div className={Styles.bodyItem}>
          <Comment
            onLikeCommentEvent={this.likeEvent}
            commentSuccessEvent={this.commentSuccessEvent}
            tutorialId={tutorialId}
            comments={comments}
          />
        </div>
      </div>
    );
  }
}
