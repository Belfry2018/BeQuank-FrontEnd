import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import { getTutorials } from "../../services/apiCourse";
import PopularPart from "../../components/PopularPart";
import TutorialFilter from "./components/TutorialFilter";
import Card from "../../components/Card";
import { Col, Row } from "antd";
import { withRouter } from "react-router-dom";

class Course extends PureComponent {
  state = {
    tutorials: []
  };

  async componentDidMount() {
    const tutorials = await getTutorials();
    this.setState({
      tutorials
    });
  }

  handleCourseClick = tutorialId => {
    this.props.history.push(`/course/${tutorialId}`);
  };

  render() {
    const { tutorials } = this.state;
    return (
      <div className={Styles.bodySection}>
        {tutorials.length < 4 ? (
          undefined
        ) : (
          <div className={Styles.bodyItem}>
            <PopularPart
              paramText={tutorials.map(e => {
                return {
                  imgSrc: e.cover,
                  title: e.title,
                  content: e.abstract,
                  top: e.tutorialType,
                  ttId: e.tutorialId
                };
              })}
              handleCourseClicked={this.handleCourseClick}
            />
          </div>
        )}
        <div className={Styles.bodyItem}>
          <TutorialFilter />
        </div>
        <div className={Styles.bodyItem}>
          <Row gutter={40}>
            {tutorials.map((e, index) => (
              <Col
                onClick={()=>this.handleCourseClick(e.tutorialId)}
                key={`tutorial${index}`}
                style={{ marginBottom: 40 }}
                md={8}
              >
                <Card
                  context={e.abstract}
                  header={e.title}
                  src={e.cover}
                  time={e.publishTime}
                  top={e.tutorialType}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(Course);
