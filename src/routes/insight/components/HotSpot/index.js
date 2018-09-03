import React,{PureComponent} from "react"
import Styles from "./index.module.less"
import SmallPoint from "../../../../components/SmallPoint";
import {Icon} from "antd";

export default class HotSpot extends PureComponent{
  
  
  render(){
    
    const {list=[]} =this.props;
    
    return (
      <div className={Styles.wholeBody}>
        <div className={Styles.title}>
          <SmallPoint title={"微博热点"}/>
        </div>
        <div className={Styles.bodySection}>
          {list.map((item,index)=>(
            <div className={Styles.peopleItem} key={`HotSection${index}`}>
              <img  className={Styles.hotAvatar} src={item.avatar} alt={""}/>
              <div className={Styles.rightSection}>
                <div className={Styles.rightTopSection}>
                  <div className={Styles.name}>
                    {item.userName}
                  </div>
                  <div className={Styles.addOn}>
                    <div style={{marginRight:20}}>
                      {item.attitudesCount}
                      <Icon type="heart-o" />
                    </div>
                    <div>
                      {item.commentCount}
                      <Icon type="form"  />
                    </div>
                  </div>
                  
                </div>
                <div className={Styles.content}>
                  {item.fullText}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}