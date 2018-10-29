import React, { PureComponent } from "react";
import styles from "./Profile.module.less";

import ProfilePicture from "./Profile/ProfilePicture";
import ProfileContent from "./Profile/ProfileContent";
import { DEFAULT_AVATAR } from "../../themes/default";
import { Skeleton } from "antd";

class Profile extends PureComponent {
  render() {
    const { profilePictureURL, profileContent } = this.props;
    return (
      <div className={styles.profile}>
        <div className={styles.profileComponent}>
          <ProfilePicture
            profilePictureURL={profilePictureURL || DEFAULT_AVATAR}
          />
        </div>
        <div className={styles.profileComponent}>
          <Skeleton
            loading={!profileContent.authorName}
            avatar
            paragraph={{ rows: 2 }}
          >
            <ProfileContent
              authorName={profileContent.authorName}
              introduction={
                profileContent.introduction || "作者太懒了，什么也没有写~"
              }
            />
          </Skeleton>
        </div>
      </div>
    );
  }
}

export default Profile;
