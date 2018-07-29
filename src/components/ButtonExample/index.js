import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import * as size from "./data/size";
import * as type from "./data/type";
import {Button} from 'antd'
import styles from './index.less'

const ButtonProps = {
  /** Define size of button */
  size: PropTypes.oneOf([size.SMALL, size.DEFAULT, size.LARGE]).isRequired,
  /** Define type of button */
  type: PropTypes.oneOf([type.PRIMARY, type.DEFAULT,type.DANGER,type.DASHED]).isRequired,
  /** Define loading state */
  loading: PropTypes.bool,
  /** Content of button */
  children: PropTypes.element.isRequired
};

const DefaultButtonProps = {
  size: size.DEFAULT,
  type: type.DEFAULT,
  children: "button"
};

class ButtonExample extends PureComponent {
  render() {
    const { size, type, loading, children } = this.props;
      return <Button style={styles.button} type={type} size={size} loading={loading}>{children}</Button>;
  }
}

ButtonExample.propTypes = ButtonProps;

ButtonExample.defaultProps = DefaultButtonProps;

export default ButtonExample;
