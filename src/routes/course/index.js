import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import {
  getRecommendationTutorials,
  getTutorials
} from "../../services/apiCourse";
import PopularPart from "../../components/PopularPart";
import TutorialFilter from "./components/TutorialFilter";
import Card from "../../components/Card";
import { Col, Row, Skeleton } from "antd";
import { withRouter } from "react-router-dom";
import { typeToChinese } from "../../utils/TutorialType";

class Course extends PureComponent {
  state = {
    tutorials: [],
    recommendTutorials: [],
    tutorialsLoading: true,
    tutorialType: ""
  };

  async componentDidMount() {
    const recommendTutorials = await getRecommendationTutorials();
    const tutorials = await getTutorials({});
    this.setState({
      tutorials,
      recommendTutorials,
      tutorialsLoading: false
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

  render() {
    const {
      tutorials,
      tutorialsLoading,
      tutorialType,
      recommendTutorials
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
      </div>
    );
  }
}

export default withRouter(Course);
