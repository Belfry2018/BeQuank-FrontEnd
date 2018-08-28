import React, {PureComponent} from "react";
import styles from "./ProfileContent.module.less";


class ProfileContentContent extends PureComponent {
    render () {
        const {style, authorName, introduction} = this.props;
        return (
            <div className={styles.profileContent}>
                <p className={styles.occupation}>AUTHOR</p>
                <p className={styles.authorName}>{authorName}</p>
                <p className={styles.introduction}>{introduction}</p>
            </div>
        );
    }
}

export default ProfileContentContent;