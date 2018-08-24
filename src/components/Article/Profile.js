import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.less";

import ProfilePicture from "./Profile/ProfilePicture";
import ProfileContent from "./Profile/ProfileContent";
import Contact from "./Profile/Contact";

const AuthorDetailProps = {
    profilePictureURL: PropTypes.string,
    profileContent: PropTypes.object,
    contactURLs: PropTypes.object,

    style: PropTypes.object,
};

const DefaultAuthorDetailProps = {

};

class Profile extends PureComponent {
    render () {
        const {style, profilePictureURL, profileContent, contactURLs} = this.props;
        return (
            <div className={styles.profile}>
                <div className={styles.profileComponent}>
                    <ProfilePicture profilePictureURL={profilePictureURL}/>
                </div>
                <div className={styles.profileComponent}>
                    <ProfileContent authorName={profileContent.authorName}
                                    introduction={profileContent.introduction}
                    />
                </div>
                <div className={styles.profileComponent}>
                    <Contact facebookURL={contactURLs.facebookURL}
                             twitterURL={contactURLs.twitterURL}
                             weiboURL={contactURLs.weiboURL}
                    />
                </div>
            </div>
        );
    }
}

Profile.propTypes = AuthorDetailProps;

Profile.defaultProps = DefaultAuthorDetailProps;

export default Profile;