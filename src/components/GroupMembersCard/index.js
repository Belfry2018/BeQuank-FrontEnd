import React, { PureComponent } from "react";
import styles from "./index.module.less";

import Group from "./Group"
import PropTypes from "prop-types";

class GroupMembersCard extends PureComponent {
    render() {
        const memberAvatarInfoList=[
                {
                    avatarUrl: "",
                    memberName: "sdag"
                },
                {
                    avatarUrl: "",
                        memberName: "asdh"
                },
                {
                    avatarUrl: "",
                        memberName: "we"
                }];
        return (
            <div>
                <Group
                    groupName={"建模算法组"}
                    memberAvatarInfoList={memberAvatarInfoList}
                />
                <Group
                    groupName={"开发组-前端"}
                    memberAvatarInfoList={memberAvatarInfoList}
                />
                <Group
                    groupName={"开发组-后端"}
                    memberAvatarInfoList={memberAvatarInfoList}
                />
                <Group
                    groupName={"商业计划组"}
                    memberAvatarInfoList={memberAvatarInfoList}
                />
                <Group
                    groupName={"数据分析组\n"}
                    memberAvatarInfoList={memberAvatarInfoList}
                />
            </div>
        );
    }
}

export default GroupMembersCard;