import React, { PureComponent } from "react";
import Styles from "./TopComment.module.less";
import { Icon } from "antd";
import { judgeLogin } from "../../../../utils/authorization";
import { likeComment } from "../../../../services/apiCourse";
import { DEFAULT_AVATAR } from "../../../../themes/default";

class User extends PureComponent {
  state = {
    likeLoading: false
  };

  onLikeEvent = async () => {
    const { onLikeCommentEvent = () => {}, commentId } = this.props;
    this.setState({ likeLoading: true });
    await likeComment(commentId);
    await onLikeCommentEvent();
    this.setState({ likeLoading: false });
  };

  render() {
    const {
      author = {},
      time,
      content,
      replyEvent,
      commentId,
      alreadyLike = false
    } = this.props;
    const { nickname, avatar } = author;
    const { likeLoading } = this.state;
    const likeIcon = likeLoading
      ? "loading"
      : alreadyLike
        ? "heart"
        : "heart-o";
    const likeText = alreadyLike ? "已喜欢" : "喜欢";
    return (
      <div className={Styles.wholePart}>
        <img
          className={Styles.avatar}
          src={avatar || DEFAULT_AVATAR}
          alt={""}
        />
        <div className={Styles.rightPart}>
          <div className={Styles.top}>
            <div className={Styles.topLeft}>
              <div className={Styles.nickname}>{nickname}</div>
              <div className={Styles.time}>{time}</div>
            </div>
            {replyEvent && judgeLogin() ? (
              <div className={Styles.topRight}>
                <div
                  onClick={this.onLikeEvent}
                  className={Styles.topRightItems}
                  style={{ marginRight: 25 }}
                >
                  <Icon className={Styles.commentIcon} type={likeIcon} />
                  {likeText}
                </div>
                <div
                  onClick={() => replyEvent(author, commentId)}
                  className={Styles.topRightItems}
                >
                  <Icon className={Styles.commentIcon} type="form" />
                  回复
                </div>
              </div>
            ) : (
              undefined
            )}
          </div>
          <div className={Styles.content}>{content}</div>
        </div>
      </div>
    );
  }
}

function SubUser({ author = {}, time, content }) {
  return (
    <div className={Styles.subUser}>
      <Icon className={Styles.icon} type="rollback" />
      <User author={author} time={time} content={content} />
    </div>
  );
}

export default class TopComment extends PureComponent {
  render() {
    const { comments = [], replyEvent, onLikeCommentEvent } = this.props;
    let list = comments.map((e, index) => (
      <div key={`TopComment${index}`}>
        <User
          commentId={e.commentId}
          author={e.writer}
          time={e.time}
          content={e.content}
          replyEvent={replyEvent}
          alreadyLike={e.alreadyLike}
          onLikeCommentEvent={onLikeCommentEvent}
        />
        <div className={Styles.topComment} />
        {e.childrenComments && e.childrenComments.length > 0
          ? e.childrenComments.map((e, index) => (
              <SubUser
                key={`subUser${index}`}
                author={e.writer}
                time={e.time}
                content={e.content}
              />
            ))
          : undefined}
      </div>
    ));
    return comments.length === 0 ? (
      <div
        style={{
          textAlign: "center",
          padding: 40,
          fontSize: 20,
          fontWeight: "bold"
        }}
      >
        无评论
      </div>
    ) : (
      <div>{list}</div>
    );
  }
}
