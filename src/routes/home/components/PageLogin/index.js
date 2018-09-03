import React,{PureComponent} from "react"
import Styles from "./index.module.less"
import {Col, Row} from "antd";
import StockList from "../../../../components/StockList";

class PageLogin extends PureComponent{
  
  
  
  async componentDidMount(){
  }
  
  render(){
    return (
      <div className={Styles.mainSection}>
        <Row gutter={40}>
          <Col md={16}>
            <div className={Styles.leftSection}>
              <StockList list={} />
            </div>
          </Col>
          <Col md={8}>
          </Col>
        </Row>
      </div>)
  }
}


export default PageLogin;