import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";
import * as size from "./data/size";
import * as type from "./data/type";
import picture from "./data/picture.png";
import greenPoint from "./data/greenPoint.png";


const PopularPartProps = {
    /** Define size of PP */
    size: PropTypes.oneOf([size.SMALL, size.DEFAULT, size.LARGE]).isRequired,
    /** Define type of PP */
    type: PropTypes.oneOf([type.DEFAULT]).isRequired,
    /** Define loading state */
    loading: PropTypes.bool,
    /** Content of button */
    children: PropTypes.element.isRequired,

    style: PropTypes.object
};

const DefaultPopularPartProps = {
    size: size.DEFAULT,
    type: type.DEFAULT,
    children: "type in something here"
};

class PopularPart extends Component {

    state = {

    };

    handleClick(i){
        alert(i);
    }

    render() {
       const {imgSrc, top0, title0, content0, top1, title1, content1, top2, title2, content2, top3, title3, content3, } = this.props;

        return <div
            className={styles["popular-part"]}>
            <div
                className={styles["left-picture-part"]}>
                <img
                    className={styles["picture"]}
                    src={picture}>
                </img>
                <div
                    className={styles["hover-bottom"]}>
                    <div className={styles.top}>{top0}</div>
                    <div className={styles.title}>{title0}</div>
                    <div className={styles.content}>{content0}</div>
                </div>
            </div>

            <div className={styles["right-text-part"]}>
                <div className={styles["title"]}>
                    <img
                        className={styles["title-picture"]}
                        src={greenPoint}></img>
                    <div className={styles["title-text"]}>What you might like</div>
                </div>

                <div className={styles["one-tip"]}
                     onClick={() => this.handleClick(1)}>
                    <div className={styles["tip-top"]}>{top1}</div>
                    <div className={styles["tip-title"]}>{title1}</div>
                    <div className={styles["tip-content"]}>{content1}</div>
                </div>
                <div className={styles["one-tip"]}
                     onClick={() => this.handleClick(2)}>
                    <div className={styles["tip-top"]}>{top2}</div>
                    <div className={styles["tip-title"]}>{title2}</div>
                    <div className={styles["tip-content"]}>{content2}</div>
                </div>
                <div className={styles["one-tip"]}
                     onClick={() => this.handleClick(3)}>
                    <div className={styles["tip-top"]}>{top3}</div>
                    <div className={styles["tip-title"]}>{title3}</div>
                    <div className={styles["tip-content"]}>{content3}</div>
                </div>

            </div>
        </div>;
    }
}

PopularPart.propTypes = PopularPartProps;

PopularPart.defaultProps = DefaultPopularPartProps;

export default PopularPart;