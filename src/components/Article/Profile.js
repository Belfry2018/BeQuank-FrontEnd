import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.less";

import ProfilePicture from "./Profile/ProfilePicture";
import ProfileContent from "./Profile/ProfileContent";

const AuthorDetailProps = {
  profilePictureURL: PropTypes.string,
  profileContent: PropTypes.object,

  style: PropTypes.object
};

const DefaultAuthorDetailProps = {};

class Profile extends PureComponent {
  render() {
    const { style, profilePictureURL, profileContent } = this.props;
    return (
      <div className={styles.profile}>
        <div className={styles.profileComponent}>
          <ProfilePicture profilePictureURL={profilePictureURL} />
        </div>
        <div className={styles.profileComponent}>
          <ProfileContent
            authorName={profileContent.authorName}
            introduction={profileContent.introduction}
          />
        </div>
      </div>
    );
  }
}

Profile.propTypes = AuthorDetailProps;

Profile.defaultProps = DefaultAuthorDetailProps;

export default Profile;
