import React, { PureComponent } from "react";
import PageLogin from "./PageLogin";
import Authorization from "../../components/AuthorizationComponents/Authorization";
import PageNotLogin from "./PageNotLogin";

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <Authorization
          beforeAuthorization={<PageNotLogin />}
          afterAuthorization={<PageLogin />}
        />
      </div>
    );
  }
}
