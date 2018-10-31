import React, { Component } from "react";
import styles from "./index.module.less";
import Tip from "./Tip/index";

class GovernmentPassage extends Component {
  render() {
    const { params } = this.props;

    return (
      <div className={styles.main}>
        <div className={styles.content}>
          {params.map((item, index) => {
            console.log(index);
            if (index % 2 === 0) {
              console.log("a");
              return (
                <Tip
                  title={item.title}
                  pos={item.pos}
                  date={item.date}
                  link={item.link}
                  odd={0}
                />
              );
            } else {
              console.log("b");
              return (
                <Tip
                  title={item.title}
                  pos={item.pos}
                  date={item.date}
                  link={item.link}
                  odd={1}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default GovernmentPassage;
