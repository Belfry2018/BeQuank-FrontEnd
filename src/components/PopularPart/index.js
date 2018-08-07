import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";
import picture from "./data/picture.png";
import greenPoint from "./data/greenPoint.png";
import TextCutter from "../TextCutter";


const PopularPartProps = {
    imgSrc: PropTypes.string.isRequired,
    top0: PropTypes.string.isRequired,
    title0: PropTypes.string.isRequired,
    content0: PropTypes.string.isRequired,
    top1: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired,
    content1: PropTypes.string.isRequired,
    top2: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    content2: PropTypes.string.isRequired,
    top3: PropTypes.string.isRequired,
    title3: PropTypes.string.isRequired,
    content3: PropTypes.string.isRequired,
};

const DefaultPopularPartProps = {

};

class PopularPart extends Component {

    state = {

    };

    handleClick(i){
        alert(i);
    }

    render() {
       const {imgSrc, top0, title0, content0, top1, title1, content1, top2, title2, content2, top3, title3, content3 } = this.props;

        return(
            <div className={styles["popular-part"]}>
                    <div className={styles["left-picture-part"]}>
                         <div className={styles.picture}>
                             <img src={picture} />
                         </div>

                     <div className={styles["hover-bottom"]}>
                       <div className={styles.top}>{top0}</div>
                       <div className={styles.title}>{title0}</div>
                       <div className={styles.content}>
                          <TextCutter maxLines={1} maxLength={60}>{content0}</TextCutter>
                       </div>
                     </div>
                    </div>

            <div className={styles["right-text-part"]}>
                <div className={styles["title"]}>
                    <img className={styles["title-picture"]} src={greenPoint}></img>
                    <div className={styles["title-text"]}>What you might like</div>
                </div>

                <div className={styles["one-tip"]}
                     onClick={() => this.handleClick(1)}
                >
                    <div className={styles["tip-top"]}>{top1}</div>
                    <div className={styles["tip-title"]}>{title1}</div>
                    <div className={styles["tip-content"]}>
                        <TextCutter maxLines={1} maxLength={60}>{content1}</TextCutter>
                    </div>
                </div>
                <div className={styles["one-tip"]}
                     onClick={() => this.handleClick(2)}>
                    <div className={styles["tip-top"]}>{top2}</div>
                    <div className={styles["tip-title"]}>{title2}</div>
                    <div className={styles["tip-content"]}>
                        <TextCutter maxLines={1} maxLength={60}>{content2}</TextCutter>
                    </div>
                </div>
                <div className={styles["one-tip"]}
                     onClick={() => this.handleClick(3)}>
                    <div className={styles["tip-top"]}>{top3}</div>
                    <div className={styles["tip-title"]}>{title3}</div>
                    <div className={styles["tip-content"]}>
                        <TextCutter maxLines={1} maxLength={60}>{content3}</TextCutter>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

PopularPart.propTypes = PopularPartProps;

PopularPart.defaultProps = DefaultPopularPartProps;

export default PopularPart;