import React, {PureComponent} from "react";
import styles from "./ProfilePicture.module.less";


class ProfilePicture extends PureComponent {
    render () {
        const {style, profilePictureURL} = this.props;
        return (
            <img className={styles.profilePicture}
                 src={profilePictureURL}
                 alt="Author"/>
        );
    }
}


export default ProfilePicture;