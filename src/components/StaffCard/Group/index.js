import React, { PureComponent } from "react";
import styles from "./index.module.less";
import LoadingSpin from "../../LoadingSpin";
import PropTypes from "prop-types";

const GroupProps = {
  groupName: PropTypes.string.isRequired,
  memberInfoList: PropTypes.array.isRequired
};

class Group extends PureComponent {
  // constructor(props){
  //     super(props);
  //     let {groupName, memberAvatarInfoList} = props;
  //     this.state = {
  //         groupName,
  //         memberAvatarInfoList
  //     };
  // }

  render() {
    const { groupName, memberInfoList } = this.props;

    const MemberBlock = memberInfoList.map((memberInfo, index) => {
      return (
        <div key={`member${index}`} className={styles.align}>
          <div className={styles.photo}>
            {memberInfo.avatarUrl ? (
              <img
                alt={""}
                src={memberInfo.avatarUrl}
                className={styles.avatar}
              />
            ) : (
              <LoadingSpin background="#2980B9">Primary</LoadingSpin>
            )}
          </div>
          <div className={styles.name}>{memberInfo.memberName}</div>
        </div>
      );
    });

    return (
      <div className={styles.main}>
        <div className={styles.groupName}>{groupName}</div>
        <div className={styles.block}>{MemberBlock}</div>
      </div>
    );
  }
}

Group.propsType = GroupProps;

export default Group;
