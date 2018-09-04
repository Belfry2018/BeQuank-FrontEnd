import React from "react";
import {Form} from "antd/lib/index";
import {withRouter} from "react-router-dom";
import styles from "./index.module.less";
import RecordList from "../../../components/RecordList/index";
import NameCard from "../../../components/NameCard/index";
import { allRecords } from "../../../services/apiStrategy";
import {getUserProfile} from "../../../services/apiUser";

class GroupList extends React.Component {

    state = {
        allRecords: [],
        profile: {},
    }

    async componentDidMount() {
        const records = await allRecords();
        const pro = await getUserProfile();
        this.setState({
            allRecords: records,
            profile: pro,
        });
    }

    render () {

        return (
            <div className={styles.main}>
                <div className={styles.left}>
                    <NameCard username={this.state.profile.nickname}
                              userId={this.state.profile.id}
                              bio={this.state.profile.bio}
                              avatarUrl={this.state.profile.avatar}
                    ></NameCard>
                </div>
                <div className={styles.right}>
                    <RecordList params={this.state.allRecords}>
                    </RecordList>
                </div>
                <div className={styles.sp}></div>
            </div>
        );
    }
}

export default withRouter(GroupList);