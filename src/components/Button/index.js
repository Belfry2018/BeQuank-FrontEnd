import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styles from "./index.less";
import {Icon} from "antd"

const ButtonProps = {
    /** Define size of button */
    size: PropTypes.oneOf(["small", "default", "large"]).isRequired,
    /** Define type of button */
    type: PropTypes.oneOf(["primary", "default", "danger", "dark", "none"]).isRequired,
    /** Define loading state */
    loading: PropTypes.bool,
    /** icon of button */
    icon: PropTypes.string,
    /** Content of button */
    children: PropTypes.element.isRequired,

    style: PropTypes.object
};

const DefaultButtonProps = {
    size: "default",
    type: "default",
    children: "button"
};

class Button extends PureComponent {
    render() {
        const {style, size, type, loading, children,icon} = this.props;
        // return <div>{children}</div>;
        const classNames=`${styles["button-all"]} ${styles[`button-type-${type}`]}`;
        const iconName=loading?"loading":icon;
        return (
            <div className={classNames}>{iconName?<Icon style={{paddingRight:10,marginLeft:-15}} type={iconName}/>:""}{children}</div>
        );
    }
}

Button.propTypes = ButtonProps;

Button.defaultProps = DefaultButtonProps;

export default Button;
