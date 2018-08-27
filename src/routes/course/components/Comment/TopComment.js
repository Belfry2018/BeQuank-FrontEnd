import React, { PureComponent } from "react";
import Styles from "./TopComment.module.less";
import { Icon } from "antd";
import {judgeLogin} from "../../../../utils/authorization";

function User({ author = {}, time, content, replyEvent}) {
  const { username, nickname, avatar, bio } = author;
  return (
    <div className={Styles.wholePart}>
      <img className={Styles.avatar} src={avatar} alt={""} />
      <div className={Styles.rightPart}>
        <div className={Styles.top}>
          <div className={Styles.topLeft}>
            <div className={Styles.nickname}>{nickname}</div>
            <div className={Styles.time}>{time}</div>
          </div>
          {replyEvent&&judgeLogin() ? (
            <div onClick={() => replyEvent(author)} className={Styles.topRight}>
              <Icon className={Styles.replyIcon} type="form" />回复
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
    const { comments = [], replyEvent } = this.props;
    let list = comments.map((e, index) => (
      <div key={`TopComment${index}`}>
        <User
          author={e.writer}
          time={e.time}
          content={e.content}
          replyEvent={replyEvent}
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
