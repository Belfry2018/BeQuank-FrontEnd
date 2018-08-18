import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styles from "./Body.module.less";

import ReactMarkdown from "react-markdown";

const BodyProps = {
    articleContent: PropTypes.string,

    style: PropTypes.object,
};

const DefaultBodyProps = {

};

class Body extends PureComponent {
    render() {
        const {style, articleContent} = this.props;
        return (
            <div className={styles.articleBody}>
                <ReactMarkdown source={articleContent} />
            </div>
        );
    }
}

Body.propTypes = BodyProps;

Body.defaultProps = DefaultBodyProps;

export default Body;