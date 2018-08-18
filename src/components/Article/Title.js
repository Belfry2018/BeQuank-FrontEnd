import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.less";
import {Icon} from "antd"

const TitleProps = {
    TitleContent: PropTypes.string,
    Date: PropTypes.string,
    AuthorName: PropTypes.string,

    style: PropTypes.object
};

const DefaultTitleProps = {
    TitleContent: "",
    Date: "",
    AuthorName: "",
    // children: "button"
};

class Title extends PureComponent {
    render() {
        const {style, Date ,TitleContent, AuthorName} = this.props;
        return (
            <div className={styles.title}>
                <div>
                    <p className={styles.articleType}>FEATURED</p>
                </div>
                <div>
                    <p className={styles.titleContent}>{TitleContent}</p>
                </div>
                <div>
                    <p className={styles.articleDateAndAuthorName}>{Date}</p>
                    <p className={styles.articleDateAndAuthorName}>Written by {AuthorName}</p>
                </div>
                <img className={styles.image}
                     src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533405629879&di=f3312045ca0c4a929fea145509294aa0&imgtype=0&src=http%3A%2F%2Fzt.bjwmb.gov.cn%2F2014%2Fdczwhd%2Fimg%2Fbg3.jpg"
                     alt="TitleImage"/>
            </div>
        );
    }
}

Title.propTypes = TitleProps;

Title.defaultProps = DefaultTitleProps;

export default Title;