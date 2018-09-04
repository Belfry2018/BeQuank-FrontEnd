import React, { PureComponent } from "react";
import FontMock from "../../components/AuthorizationComponents/FontMock";

export default class Stock extends PureComponent {
  render() {
    const { stockId } = this.props.match.params;
  
    return <FontMock>{stockId}</FontMock>;
  }
}
