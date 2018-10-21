import React, { PureComponent } from "react";
import styles from "./index.module.less";

import Group from "./Group"
import PropTypes from "prop-types";

const StaffCardProps = {
    groupInfoList: PropTypes.array.isRequired,
};

class StaffCard extends PureComponent {
    render() {
        // const groupInfoList = [
        //     {
        //         groupName: "建模算法组",
        //         memberInfoList: [
        //             {
        //                 avatarUrl: "",
        //                 memberName: "a"
        //             },
        //             {
        //                 avatarUrl: "",
        //                 memberName: "b"
        //             },
        //             {
        //                 avatarUrl: "",
        //                 memberName: "c"
        //             }
        //         ]
        //     },
        //     {
        //         groupName: "开发组-前端",
        //         memberInfoList: [
        //             {
        //                 avatarUrl: "",
        //                 memberName: "a"
        //             },
        //             {
        //                 avatarUrl: "",
        //                 memberName: "b"
        //             },
        //             {
        //                 avatarUrl: "",
        //                 memberName: "c"
        //             }
        //         ]
        //     },
        //     {
        //         groupName: "开发组-后端",
        //         memberInfoList: [
        //             {
        //                 avatarUrl: "",
        //                 memberName: "a"
        //             },
        //             {
        //                 avatarUrl: "",
        //                 memberName: "b"
        //             },
        //             {
        //                 avatarUrl: "",
        //                 memberName: "c"
        //             }
        //         ]
        //     },
        //     {
        //         groupName: "商业计划组",
        //         memberInfoList: [
        //             {
        //                 avatarUrl: "",
        //                 memberName: "a"
        //             },
        //             {
        //                 avatarUrl: "",
        //                 memberName: "b"
        //             },
        //             {
        //                 avatarUrl: "",
        //                 memberName: "c"
        //             }
        //         ]
        //     },
        //     {
        //         groupName: "数据分析组",
        //         memberInfoList: [
        //             {
        //                 avatarUrl: "",
        //                 memberName: "a"
        //             },
        //             {
        //                 avatarUrl: "",
        //                 memberName: "b"
        //             },
        //             {
        //                 avatarUrl: "",
        //                 memberName: "c"
        //             }
        //         ]
        //     }
        // ];

        const {groupInfoList} = this.props;

        const GroupBlock = groupInfoList.map((groupInfo, index)=>{
            return (
                <Group
                    key={`group${index}`}
                    className={styles.groupItem}
                    groupName={groupInfo.groupName}
                    memberInfoList={groupInfo.memberInfoList}
                />
            )
        });

        return (
            <div className={styles.main}>
                {GroupBlock}
            </div>
        );
    }
}

StaffCard.propTypes = StaffCardProps;

export default StaffCard;