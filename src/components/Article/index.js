import React, { PureComponent } from "react";
import styles from "./index.module.less";

import Title from "./Title";
import Body from "./Body";
import Profile from "./Profile";
import LikeButton from "./LikeButton";
import { likeTutorial } from "../../services/apiCourse";
import { judgeLogin } from "../../utils/authorization";

class Article extends PureComponent {
  likeArticleEvent = async () => {
      const { tutorialId, likeEvent = () => {} } = this.props;
      await likeTutorial(tutorialId);
      await likeEvent();
  };

  render() {
    const {
      titleContent,
      date,
      author = {},
      backgroundImgURL,
      articleContent,
      tutorialType,
      likeCount,
      alreadyLike
    } = this.props;

    const { username, nickname, avatar, bio } = author;

    return (
      <div>
        <div className={styles.article}>
          <Title
            titleContent={titleContent}
            date={date}
            authorName={nickname}
            backgroundImgURL={backgroundImgURL}
            tutorialType={tutorialType}
          />
          <Body articleContent={articleContent} />
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.profileSection}>
            <Profile
              profilePictureURL={avatar}
              profileContent={{
                authorName: nickname,
                introduction: bio
              }}
            />
          </div>
          <div className={styles.likeSection}>
            <LikeButton
              likeEvent={this.likeArticleEvent}
              likeCount={likeCount}
              alreadyLike={alreadyLike}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Article;
