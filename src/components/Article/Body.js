import React, { PureComponent } from "react";
import styles from "./Body.module.less";

import ReactMarkdown from "react-markdown";


class Body extends PureComponent {
  render() {
    const { articleContent } = this.props;
    return (
      <div className={styles.articleBody}>
        <ReactMarkdown className={styles.typo} source={articleContent} />
      </div>
    );
  }
}

export default Body;
