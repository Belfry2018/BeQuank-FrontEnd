import React, { PureComponent } from "react";
import Styles from "../index.module.less";
import {Icon,Button} from "antd";
import {Link} from "react-router-dom";

class CourseFormResult extends PureComponent {

  
  render() {
    
    return (
      <div className={Styles.section}>
        <div className={Styles.item}>
          <div className={Styles.successSection}>
            <div className={Styles.icon}>
              <Icon type="check-circle"/>
            </div>
            <div className={Styles.text}>
              感谢您的付出
            </div>
            <div>
              <div style={{marginRight:20,display:"inline-block"}} >
                <Link to={"/"}>
                  <Button type="primary" >回到首页</Button>
                </Link>
              </div>
              <Link to={"/courseForm"}>
                <Button>重新填写</Button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseFormResult