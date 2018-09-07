import React, { PureComponent } from "react";
import NavBar from "../components/NavBar";
import Styles from "../index.module.less";
import SmallPoint from "../../../components/SmallPoint";
import GovernmentPassage from "../../../components/GovernmentPassage";
import {
  getGovernmentPassage,
  getGovernmentWords
} from "../../../services/apiNews";

const firstPage = 1;

export default class GovernmentInsight extends PureComponent {
  state = {
    governmentPassage: {},
    governmentWords: [],
    page: firstPage
  };

  async componentDidMount() {
    const governmentPassage = await getGovernmentPassage(firstPage);
    this.setState({governmentPassage});
    const governmentWords = await getGovernmentWords();
    this.setState({governmentWords});
  }

  render() {
    const {
      governmentPassage: { totalPage=1, currentPage=1, data=[] },
      governmentWords,
      page
    } = this.state;
    
    return (
      <div className={Styles.bodySection}>
        <NavBar />
        <div className={Styles.government}>
          <div className={Styles.title}>
            <SmallPoint title={"政府文章"} />
          </div>
          <div>
            <GovernmentPassage params={data}/>
          </div>
        </div>
      </div>
    );
  }
}
