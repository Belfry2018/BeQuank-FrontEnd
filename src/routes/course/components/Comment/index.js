import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import SmallPoint from "../../../../components/SmallPoint";
import TopComment from "./TopComment";
import MakeCommentPart from "../MakeCommentPart";
import { postComment, replyComment } from "../../../../services/apiCourse";
import { getTime } from "../../../../utils/timer";

export default class Comment extends PureComponent {
  state = {
    isReply: false,
    commenter: {},
    loading:false
  };

  replyEvent = (user,commentId )=> {
    this.setState({ isReply: true, commenter: user });
    this.selectedCommentId=commentId;
  };

  closeReply = () => {
    this.setState({ isReply: false });
  };

  makeComment = async content => {
    const { tutorialId } = this.props;
    const { isReply } = this.state;
    this.setState({loading:true});
    if (isReply) {
      await replyComment({
        content,
        commentId: this.selectedCommentId,
        time: getTime()
      });
    } else {
      await postComment({
        tutorialId,
        content,
        time: getTime()
      });
    }
    await this.props.commentSuccessEvent();
    this.setState({loading:false});
    
  };

  render() {
    const { isReply, commenter,loading } = this.state;
    const { comments = [],onLikeCommentEvent } = this.props;
    return (
      <div className={Styles.wholeComment}>
        <div className={Styles.title}>
          <SmallPoint title={"Comment"} />
        </div>
        <MakeCommentPart
          isReply={isReply}
          commenter={commenter}
          onCloseEvent={this.closeReply}
          onMakeComment={this.makeComment}
          loading={loading}
        />

        <TopComment replyEvent={this.replyEvent} comments={comments} onLikeCommentEvent={onLikeCommentEvent} />
      </div>
    );
  }
}
