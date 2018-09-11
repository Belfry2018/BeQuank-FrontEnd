import React, { PureComponent } from "react";
import { Carousel } from "antd";
import Styles from "./index.module.less"

export default class PageNotLogin extends PureComponent {
  render() {
    return (
      <div>
        <Carousel className={Styles.carousel} effect="fade" autoplay>
          <div>
            <h3>1</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
