import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styles from "./ProfileContent.module.less";

const ProfileContentProps = {
    authorName: PropTypes.string,
    introduction: PropTypes.string,

    style: PropTypes.object,
};

const DefaultProfileContentProps = {
    authorName: "",
    introduction: ""
};

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

ProfileContentContent.propTypes = ProfileContentProps;

ProfileContentContent.defaultProps = DefaultProfileContentProps;

export default ProfileContentContent;