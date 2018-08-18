import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.less";
import Article from "../../../routes/articleTest";

const ContactProps = {
    facebookURL: PropTypes.string,
    twitterURL: PropTypes.string,
    weiboURL: PropTypes.string,
    myWebsiteURL: PropTypes.string,

    style: PropTypes.object,
};

const DefaultContactProps = {
    facebookURL: "#",
    twitterURL: "#",
    weiboURL: "#",
    myWebsiteURL: "",
};

class Contact extends PureComponent {
    render () {
        const {style, facebookURL, twitterURL, weiboURL, myWebsiteURL} = this.props;
        return (
            <div>
                <div className={styles.contactComponent}>
                    <p className={styles.componentTitle}>Follow me</p>
                    <div className={styles.socialMedia}>
                        <a href={facebookURL}>
                            <i className={styles.iconFont}>&#xe635;</i>
                        </a>
                        <a href={twitterURL}>
                            <i className={styles.iconFont}>&#xe60a;</i>
                        </a>
                        <a href={weiboURL}>
                            <i className={styles.iconFont}>&#xe62e;</i>
                        </a>
                    </div>
                </div>
                <div className={styles.contactComponent}>
                    <p className={styles.componentTitle}>My website</p>
                    <div>
                        <a href={myWebsiteURL}>{myWebsiteURL}</a>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = ContactProps;

Contact.defaultProps = DefaultContactProps;

export default Contact;