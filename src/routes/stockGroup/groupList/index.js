import React from "react";
import { withRouter } from "react-router-dom";
import styles from "../index.module.less";
import RecordList from "../../../components/RecordList/index";
import NameCard from "../../../components/NameCard/index";
import { allRecords } from "../../../services/apiStrategy";
import { getUserProfile } from "../../../services/apiUser";
import {Col, Row} from "antd";
import SmallPoint from "../../../components/SmallPoint";

class GroupList extends React.Component {
  state = {
    allRecords: [],
    profile: {}
  };
  
  async componentDidMount() {
    const records = await allRecords();
    const pro = await getUserProfile();
    this.setState({
      allRecords: records,
      profile: pro
    });
  }
  
  render() {
    return (
      <div className={styles.main}>
        <Row gutter={40}>
          <Col md={8}>
            <NameCard
              username={this.state.profile.nickname}
              userId={this.state.profile.id}
              bio={this.state.profile.bio}
              avatarUrl={this.state.profile.avatar}
            />
          </Col>
          <Col md={16}>
            <div className={styles.simpleSection}>
              <div className={styles.title}>
                <SmallPoint title={"我的自选股组"}/>
              </div>
              <RecordList params={this.state.allRecords} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(GroupList);
