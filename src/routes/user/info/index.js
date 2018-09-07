import React from "react";
import { getUserProfile } from "../../../services/apiUser";
import { withRouter } from "react-router-dom";
import { Form } from "antd/lib/index";
import styles from "./index.module.less";
import LeftBar from "./components/LeftBar/index";
import InfoForm from "./components/InfoForm/index";
import AccountForm from "./components/AccountForm/index";
import StockDataForm from "./components/StockDataForm/index";
import {Col, Row} from "antd";

const keys = ["个人信息", "账户管理", "选股数据", "opt4"];

class NormalInfoForm extends React.Component {
  state = {
    currentPage: 0,
    userProfile: {}
  };

  setCurrentPage = pageNumber => {
    this.setState({
      currentPage: pageNumber
    });
  };

  async componentDidMount() {
    const profile = await getUserProfile();
    this.setState({
      userProfile: profile
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <Row gutter={40}>
          <Col md={6}>
            <div className={styles["left-bar"]}>
              <LeftBar keys={keys} setCurrentPage={this.setCurrentPage} />
            </div>
          </Col>
          <Col md={18}>
            <div className={styles["form"]}>
              {
                {
                  0: (
                    <InfoForm
                      nickName={this.state.userProfile.nickname}
                      bio={this.state.userProfile.bio}
                      gender={this.state.userProfile.gender}
                      birthday={this.state.userProfile.birthday}
                      avatar={this.state.userProfile.avatar}
                    />
                  ),
                  1: (
                    <AccountForm
                      id={this.state.userProfile.id}
                      email={this.state.userProfile.email}
                      phone={this.state.userProfile.phone}
                      registerTime={this.state.userProfile.registerTime}
                    />
                  ),
                  2: (
                    <StockDataForm
                      moneyLevel={this.state.userProfile.moneyLevel}
                      level={this.state.userProfile.level}
                      expectedProfit={this.state.userProfile.expectedProfit}
                    />
                  )
                }[this.state.currentPage]
              }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(Form.create()(NormalInfoForm));
