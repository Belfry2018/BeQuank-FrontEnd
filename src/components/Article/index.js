import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";

import Title from "./Title";
import Body from "./Body";
import Profile from "./Profile"

const ArticleProps = {
    titleContent: PropTypes.string,
    date: PropTypes.string,
    authorName: PropTypes.string,
    backgroundImgURL: PropTypes.string,

    articleContent: PropTypes.string,

    profilePictureURL: PropTypes.string,
    profileContent: PropTypes.object,
    contactURLs: PropTypes.object,

    style: PropTypes.object,
};

const DefaultArticleProps = {
    titleContent: "",
    date: "",
    authorName: "",
    backgroundImgURL: "",

    articleContent: "",

    profilePictureURL: "",
    profileContent: {
        authorName: "",
        introduction: ""
    },
    contactURLs: {
        facebookURL: "#",
        twitterURL: "#",
        weiboURL: "#",
        myWebsiteURL: "#",
    }
};

class Article extends PureComponent {
    render() {
        const {style,
            titleContent, date, authorName, backgroundImgURL,
            articleContent,tutorialType,
            profilePictureURL, profileContent, contactURLs
        } = this.props;

        return (
            <div className={styles.article}>
                <Title titleContent={titleContent}
                       date={date}
                       authorName={authorName}
                       backgroundImgURL = {backgroundImgURL}
                       tutorialType={tutorialType}
                />
                <Body articleContent={articleContent}/>
                {/*<Profile profilePictureURL={profilePictureURL}*/}
                         {/*profileContent = {profileContent}*/}
                         {/*contactURLs = {contactURLs}*/}
                {/*/>*/}
            </div>
        );
    }
}

Article.propTypes = ArticleProps;

Article.defaultProps = DefaultArticleProps;

export default Article;