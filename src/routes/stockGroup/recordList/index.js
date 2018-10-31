import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../index.module.less";
import NameCard from "../../../components/NameCard/index";
import { recordDetail } from "../../../services/apiStrategy";
import { getUserProfile } from "../../../services/apiUser";
import { Col, Icon, Row } from "antd";
import SmallPoint from "../../../components/SmallPoint";
import StockList from "../../../components/StockList";

class GroupList extends React.Component {
  state = {
    record: {},
    profile: {}
  };

  componentDidMount() {
    const { recordId } = this.props.match.params;

    recordDetail(recordId).then(record => {
        this.setState({
            record: record,
        });
    });
    getUserProfile().then(pro => {
          this.setState({
              profile: pro
          });
    })
  }

  render() {
    const { recordName, todayBenefit, risk, stocks } = this.state.record;

    const Item = ({ data = 0, comment }) => (
      <Col span={12}>
        <div className={styles.dataSection}>
          <div className={styles.data}>{`${data}%`}</div>
          <div className={styles.comment}>{comment}</div>
        </div>
      </Col>
    );

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
                <SmallPoint
                  title={
                    <div>
                      <Link to={"/groupList"}>我的自选股组</Link>
                      <Icon type="right" theme="outlined" />
                      {recordName}
                    </div>
                  }
                />
              </div>
              <div className={styles.divider} />
              <div>
                <Row>
                  <Item data={(todayBenefit * 100).toFixed(2)} comment={"当月收益"} />
                  <Item data={(todayBenefit * 100).toFixed(2)} comment={"风险指标"} />
                </Row>
              </div>
              <div className={styles.divider} />
              <StockList list={stocks} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(GroupList);
