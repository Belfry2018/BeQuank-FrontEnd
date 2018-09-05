import React, { PureComponent } from "react";
import Styles from "../index.module.less";
import {Icon,Button} from "antd";
import {Link, withRouter} from "react-router-dom";

class StrategyResult extends PureComponent {

  
  render() {
    const {score,type}=this.props.location.state;
    
    return (
      <div className={Styles.section}>
        <div className={Styles.item}>
          <div className={Styles.successSection}>
            <div className={Styles.icon}>
              <Icon type="check-circle"/>
            </div>
            <div className={Styles.scoreSection}>
              <div className={Styles.listItem}>
                <div>
                  您的分数:
                </div>
                <div>
                  {score}
                </div>
              </div>
              <div className={Styles.listItem}>
                <div>
                  您属于:
                </div>
                <div>
                  {type}
                </div>
              </div>
            </div>
            <div className={Styles.text}>
              感谢您的付出！我们会依据此问卷更新您的推荐内容~
            </div>
            <div>
              <div style={{marginRight:20,display:"inline-block"}} >
                <Link to={"/"}>
                  <Button type="primary" >回到首页</Button>
                </Link>
              </div>
              <Link to={"/strategy"}>
                <Button>重新填写</Button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StrategyResult)