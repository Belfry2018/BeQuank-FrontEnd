import React, { PureComponent } from "react";
import styles from "./Title.module.less";


class Title extends PureComponent {
  render() {
    const {
      tutorialType,
      titleContent,
      date,
      authorName,
      backgroundImgURL
    } = this.props;
    return (
      <div className={styles.title}>
        <div className={styles.titleSection}>
          <p className={styles.articleType}>{tutorialType}</p>
          <p className={styles.titleContent}>{titleContent}</p>
          <div className={styles.dateAndAuthorNameContainer}>
            <p className={styles.date}>{date}</p>
            <p className={styles.authorName}>Written by {authorName}</p>
          </div>
        </div>

        <img className={styles.image} src={backgroundImgURL} alt="TitleImage" />
      </div>
    );
  }
}

export default Title;
