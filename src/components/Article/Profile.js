import React, { PureComponent } from "react";
import styles from "./Profile.module.less";

import ProfilePicture from "./Profile/ProfilePicture";
import ProfileContent from "./Profile/ProfileContent";

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


export default Profile;
