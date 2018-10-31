import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import {
  getRecommendationTutorials,
  getTutorials
} from "../../services/apiCourse";
import { getDalaos, getUserAuth } from "../../services/apiUser";
import PopularPart from "../../components/PopularPart";
import TutorialFilter from "./components/TutorialFilter";
import PayforQuestion from "../../components/PayforQuestion";
import AskForm from "./components/AskForm";
import Card from "../../components/Card";
import { Col, Row, Skeleton, Drawer, Modal, Button } from "antd";
import { withRouter } from "react-router-dom";
import {
  ADVANCED,
  shouldCourseLocked,
  typeToChinese
} from "../../utils/TutorialType";
import withLocker from "../../components/LockerHOC";

const CourseWithLocker = withLocker(Card);

class Course extends PureComponent {
  state = {
    drawerVisible: false,
    tutorials: [],
    recommendTutorials: [],
    tutorialsLoading: true,
    tutorialType: "",
    dalaos: [],
    coursesLock: ADVANCED,
    dalaoModalVisible: false,
    daolaoModalName: ""
  };

  componentDidMount() {
    getUserAuth().then(auth => {
      this.setState({
        coursesLock: !auth.ratioTrend,
        trendChartOfPublicOpinionLock: !auth.trend
      });
      getRecommendationTutorials().then(recommendTutorials => {
        this.setState({ recommendTutorials });
      });
      getTutorials({}).then(tutorials => {
        this.setState({ tutorials, tutorialsLoading: false });
      });
      getDalaos().then(dalaos => {
        this.setState({ dalaos });
      });
    });

    this.searchValue = "";
  }

  handleCourseClick = tutorialId => {
    this.props.history.push(`/course/${tutorialId}`);
  };

  getTutorials = async (tutorialType = this.state.tutorialType) => {
    this.setState({ tutorialsLoading: true });
    const tutorials = await getTutorials({
      tutorialType: tutorialType,
      keywords: this.searchValue
    });
    this.setState({
      tutorials,
      tutorialsLoading: false
    });
  };

  onClickTypeEvent = async tutorialType => {
    this.setState({ tutorialType });
    await this.getTutorials(tutorialType);
  };

  onSearchEvent = async () => {
    await this.getTutorials();
  };

  onSearchKeyUp = searchValue => {
    this.searchValue = searchValue;
  };

  onDrawerClose = () => {
    this.setState({
      drawerVisible: false
    });
  };

  showDrawer = () => {
    this.setState({
      drawerVisible: true
    });
  };

  handlePieceClick = username => {
    console.log(username);
    this.setState({
      dalaoModalVisible: true,
      daolaoModalName: "username"
    });
  };

  handleAskModalCancel = () => {
    this.setState({
      dalaoModalVisible: false,
      daolaoModalName: ""
    });
  };

  render() {
    const {
      tutorials,
      tutorialsLoading,
      tutorialType,
      recommendTutorials,
      coursesLock,
      dalaos
    } = this.state;

    return (
      <div className={Styles.bodySection}>
        <div className={Styles.bodyItem}>
          <PopularPart
            paramText={recommendTutorials.map(e => {
              return {
                imgSrc: e.cover,
                title: e.title,
                content: e.abstract,
                top: typeToChinese(e.tutorialType),
                ttId: e.tutorialId
              };
            })}
            handleCourseClicked={this.handleCourseClick}
          />
        </div>
        <div className={Styles.bodyItem}>
          <TutorialFilter
            selectedType={tutorialType}
            onClickTypeEvent={this.onClickTypeEvent}
            onSearchEvent={this.onSearchEvent}
            onKeyUp={this.onSearchKeyUp}
            onShowDrawer={this.showDrawer}
          />
        </div>
        <div className={Styles.bodyItem}>
          <Skeleton active loading={tutorialsLoading}>
            <Row gutter={40}>
              {tutorials.map((e, index) => (
                <Col
                  key={`tutorial${index}`}
                  style={{ marginBottom: 40 }}
                  md={8}
                  onClick={() =>
                    !shouldCourseLocked(coursesLock, e.tutorialType) &&
                    this.handleCourseClick(e.tutorialId)
                  }
                >
                  <CourseWithLocker
                    locked={shouldCourseLocked(coursesLock, e.tutorialType)}
                    context={e.abstract}
                    header={e.title}
                    src={e.cover}
                    time={e.publishTime}
                    top={typeToChinese(e.tutorialType)}
                  />
                </Col>
              ))}
            </Row>
          </Skeleton>
        </div>
        <Drawer
          placement="right"
          closable={true}
          onClose={this.onDrawerClose}
          visible={this.state.drawerVisible}
          width={400}
        >
          <PayforQuestion
            params={this.state.dalaos}
            onPieceClick={this.handlePieceClick}
          />
        </Drawer>
        <Modal
          closable={false}
          visible={this.state.dalaoModalVisible}
          title="付费提问"
          footer={[
            <Button key="cancel" onClick={this.handleAskModalCancel}>
              取消
            </Button>
          ]}
        >
          <AskForm
            username={this.state.daolaoModalName}
            onClose={this.handleAskModalCancel}
          />
        </Modal>
      </div>
    );
  }
}

export default withRouter(Course);
