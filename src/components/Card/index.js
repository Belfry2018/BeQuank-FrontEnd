import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";

const MyCardProps = {
  /** Define header of button */
  header: PropTypes.string.isRequired,
  /** Define context of button */
  context: PropTypes.string.isRequired,
  /** Define image'url of button */
  src: PropTypes.string.isRequired,
  /** Define top of button */
  top: PropTypes.string.isRequired,
  /** Define time of button */
  time: PropTypes.string.isRequired,
};

class MyCard extends PureComponent {
  render() {
    const { context, header, src, time, top } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.top}>{top}</div>
        <div className={styles.imgbox}>
          <img className={styles.image} src={src} />
        </div>
        <div className={styles.textbox}>
          <h3>{header}</h3>
          <p>{context}</p>
          <span className={styles.time}>{time}</span>
        </div>
      </div>
    );
  }
}

MyCard.propTypes = MyCardProps;

export default MyCard;
