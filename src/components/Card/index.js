import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import * as size from "./data/size";
import * as type from "./data/type";
import Button from "../Button/index";
import styles from "./index.module.less";

class Time extends PureComponent{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        const {styles} = this.props;
        return(
            <div>
                <span className={styles}>{this.state.date.toLocaleTimeString()}</span>
            </div>
        )
    }
}

class MyCard extends PureComponent {
    render() {
        const {context, header, src, width, height} = this.props;
        return (
            <div className={styles.card}>
                <div className={styles.button}>
                    <Button type="dark" style={styles.button}>NEW ARTICLE</Button>
                </div>
                <div className={styles.imgbox}>
                    <img className={styles.image} src={src} />
                </div>
                <div className={styles.textbox}>
                    <h3>{header}</h3>
                    <p>{context}</p>
                    {/*<span className={styles.time}>"this is time"</span>*/}
                    <Time styles={styles.time} />
                </div>
            </div>
        );
    }
}

export default MyCard;