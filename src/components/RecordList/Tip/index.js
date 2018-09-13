import React, { Component } from "react";
import { Button, Popconfirm, message } from "antd";
import styles from "./index.module.less";
import {Link, withRouter} from "react-router-dom";
import { deleteRecord } from "../../../services/apiStrategy";

class Tip extends Component {
  onDeleteEvent = async () => {
    await deleteRecord(this.props.id);
    this.props.history.push({
      pathname: `/groupList`,
    });
    message.success("已成功删除");
  };

  render() {
    const { title, time, id } = this.props;

    return (
      <div className={styles.wholePart}>
        <Link to={`/groupList/${id}`}>
          <div className={styles.main}>
            <div className={styles["top-part"]}>
              <div className={styles.title}>{title}</div>
            </div>
            <div className={styles["bottom-part"]}>
              <div className={styles.rooter}>创建时间: {time}</div>
            </div>
          </div>
        </Link>
        <div className={styles.button}>
          <Popconfirm
            title={`你确定要删除组选股组「${title}」吗`}
            okText="是的"
            cancelText="不了"
            onConfirm={this.onDeleteEvent}
          >
            <Button type={"dashed"} size={"small"}>
              删除
            </Button>
          </Popconfirm>
        </div>
      </div>
    );
  }
}

export default withRouter(Tip) ;
