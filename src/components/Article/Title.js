import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.less";
import {Icon} from "antd"

const TitleProps = {
    titleContent: PropTypes.string,
    date: PropTypes.string,
    authorName: PropTypes.string,
    backgroundImgURL: PropTypes.string,

    style: PropTypes.object
};

const DefaultTitleProps = {

};

class Title extends PureComponent {
    render() {
        const {style ,titleContent, date, authorName, backgroundImgURL} = this.props;
        return (
            <div className={styles.title}>
                <div>
                    <p className={styles.articleType}>FEATURED</p>
                </div>
                <div>
                    <p className={styles.titleContent}>{titleContent}</p>
                </div>
                <div className={styles.dateAndAuthorNameContainer}>
                    <p className={styles.date}>{date}</p>
                    <p className={styles.authorName}>Written by {authorName}</p>
                </div>
                <img className={styles.image}
                     src={backgroundImgURL}
                     alt="TitleImage"/>
            </div>
        );
    }
}

Title.propTypes = TitleProps;

Title.defaultProps = DefaultTitleProps;

export default Title;