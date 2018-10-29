import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import {
  getRecommendationTutorials,
  getTutorials
} from "../../services/apiCourse";
import { getDalaos } from "../../services/apiUser";
import PopularPart from "../../components/PopularPart";
import TutorialFilter from "./components/TutorialFilter";
import PayforQuestion from "../../components/PayforQuestion";
import Card from "../../components/Card";
import { Col, Row, Skeleton, Popover, Button, Affix, Icon, Drawer } from "antd";
import { withRouter } from "react-router-dom";
import { typeToChinese } from "../../utils/TutorialType";

class Course extends PureComponent {
  state = {
    drawerVisible: false,
    tutorials: [],
    recommendTutorials: [],
    tutorialsLoading: true,
    tutorialType: "",
    dalaos: []
  };

  async componentDidMount() {
    const recommendTutorials = await getRecommendationTutorials();
    const tutorials = await getTutorials({});
    const dalaos = await getDalaos();
    this.setState({
      tutorials,
      recommendTutorials,
      tutorialsLoading: false,
      dalaos: dalaos
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
        drawerVisible: false,
    });
  };

  showDrawer = () => {
    this.setState({
        drawerVisible: true,
    });
  };

  render() {
    const {
      tutorials,
      tutorialsLoading,
      tutorialType,
      recommendTutorials,
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
                  onClick={() => this.handleCourseClick(e.tutorialId)}
                  key={`tutorial${index}`}
                  style={{ marginBottom: 40 }}
                  md={8}
                >
                  <Card
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
            <PayforQuestion params={this.state.dalaos}/>
          </Drawer>
      </div>
    );
  }
}

export default withRouter(Course);
