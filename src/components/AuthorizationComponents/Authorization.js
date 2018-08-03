import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { judgeLogin } from "../../utils/authorization";

const AuthorizationProps = {
  beforeAuthorization: PropTypes.element.isRequired,
  afterAuthorization: PropTypes.element.isRequired,
  type: PropTypes.oneOf(["login"])
};

const DefaultAuthorizationProps = {
  type: "login"
};

class Authorization extends PureComponent {
  render() {
    const { beforeAuthorization, afterAuthorization } = this.props;
    // return <div>{children}</div>;
    return judgeLogin() ? afterAuthorization : beforeAuthorization;
  }
}

Authorization.propTypes = AuthorizationProps;

Authorization.defaultProps = DefaultAuthorizationProps;

export default Authorization;
