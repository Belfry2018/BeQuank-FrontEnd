import React, { PureComponent } from "react";
import styles from "./index.module.less";
import LoadingSpin from "../../LoadingSpin";
import PropTypes from "prop-types";

const GroupProps = {

    groupName: PropTypes.string.isRequired,
    memberAvatarInfoList: PropTypes.object.isRequired,
    // memberNameList: PropTypes.object.isRequired,
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
        const { groupName, memberAvatarInfoList } = this.props;
        let tmpUrl = "https://bequank.oss-cn-beijing.aliyuncs.com/avatars/avatar.jpg?x-oss-process=style/avatar";

        const MembersAvatarBlock = memberAvatarInfoList.map((item, index)=>{
            return (
                <div key={`groupItem${index}`} className={styles.align}>
                    <div className={styles.photo}>
                        {tmpUrl ? (
                            <img alt={""} src={tmpUrl} className={styles.avatar} />
                        ) : (
                            <LoadingSpin background="#2980B9">Primary</LoadingSpin>
                        )}
                    </div>
                    <div className={styles.name}>{item.memberName}</div>
                </div>
            )
        });

        return(
            <div className={styles.main}>
                <div className={styles.groupName}>{groupName}</div>
                <div className={styles.block}>{MembersAvatarBlock}</div>
            </div>
        );
    }
}

Group.propsType = GroupProps;

export default Group;