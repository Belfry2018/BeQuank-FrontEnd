import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styles from "./ProfilePicture.module.less";

const ProfilePictureProps = {
    profilePictureURL: PropTypes.string,

    style: PropTypes.object,
};

const DefaultProfilePictureProps = {
    profilePictureURL: "",
};

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

ProfilePicture.propTypes = ProfilePictureProps;

ProfilePicture.defaultProps = DefaultProfilePictureProps;

export default ProfilePicture;