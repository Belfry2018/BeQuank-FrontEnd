import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";

const DropdownProps = {
  /** Define placement of Dropdown */
  placement: PropTypes.oneOf(["bottomLeft", "bottomCenter", "bottomRight"])
    .isRequired,

  /** Define overlay of Dropdown */
  overlay: PropTypes.element,

  /** Content of Dropdown */
  children: PropTypes.element.isRequired
};

const DefaultDropdownProps = {
  placement: "bottomLeft"
};

class Dropdown extends PureComponent {
  
  state={
    expand:false
  };
  
  handleClickEvent=()=>{
    this.setState((prevState)=> ({
        expand: !prevState.expand
    }))
  };
  
  
  render() {
    const {overlay, placement, children } = this.props;
    const {expand} = this.state;
    // return <div>{children}</div>;
    return (
      <div className={styles["drop-wrap"]} onClick={this.handleClickEvent}>
        {children}
        <div className={styles.overlay} style={{visibility:expand?"visible":"hidden"}}>
          {overlay}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = DropdownProps;

Dropdown.defaultProps = DefaultDropdownProps;

export default Dropdown;
