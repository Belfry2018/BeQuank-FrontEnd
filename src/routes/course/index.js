import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import { getTutorials } from "../../services/apiCourse";
import PopularPart from "../../components/PopularPart";

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
        <div className={Styles.bodyItem}>
          {tutorials.length < 4 ? (
            undefined
          ) : (
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
          )}
        </div>
      </div>
    );
  }
}
