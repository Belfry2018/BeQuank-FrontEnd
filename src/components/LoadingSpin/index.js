import React from 'react';
import Styles from './index.module.less'

export default function ({background}) {

    return (
        <div className={Styles.spinner}>
            <div className={Styles["double-bounce1"]} style={{background:background}}/>
            <div className={Styles["double-bounce2"]} style={{background:background}}/>
        </div>
    )
}