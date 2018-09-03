import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";
import Tip from "./Tip/index";

class RecordList extends Component {
    render() {
        const {} = this.props;

        return (
            <div>
                <Tip></Tip>
            </div>
        );
    }
}

export default RecordList;