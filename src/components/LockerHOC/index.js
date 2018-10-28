import React, { Component } from "react";
import styles from "./index.module.less";

function withLocker(WrappedComponent) {

    return class extends Component {

        render() {

            return (
                <div className={styles.main}>
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }

    }

}