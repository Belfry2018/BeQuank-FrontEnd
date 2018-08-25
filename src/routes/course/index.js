import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import { getTutorials } from "../../services/apiCourse";
import PopularPart from "../../components/PopularPart";
import TutorialFilter from "./components/TutorialFilter";
import Card from "../../components/Card";
import { Col, Row } from "antd";

export default class Course extends PureComponent {
  state = {
    tutorials: []
  };

  async componentDidMount() {
    const tutorials = await getTutorials();
    this.setState({
      tutorials
    });
  }

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
                  top: e.tutorialType
                };
              })}
            />
          </div>
        )}
        <div className={Styles.bodyItem}>
          <TutorialFilter />
        </div>
        <div className={Styles.bodyItem}>
          <Row gutter={40}>
            {tutorials.map((e, index )=> (
              <Col key={`tutorial${index}`} style={{ marginBottom: 40 }} md={8}>
                <Card context={e.abstract} header={e.title} src={e.cover} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}
