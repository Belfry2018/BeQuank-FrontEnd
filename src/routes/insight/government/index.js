import React, { PureComponent } from "react";
import NavBar from "../components/NavBar";
import Styles from "../index.module.less";
import SmallPoint from "../../../components/SmallPoint";
import GovernmentPassage from "../../../components/GovernmentPassage";
import {
  getGovernmentPassage,
  getGovernmentWords
} from "../../../services/apiNews";
import { Pagination } from "antd";
import LoadingSpin from "../../../components/LoadingSpin";
import GovernmentWords from "../../../components/GovernmentWords";

const firstPage = 1;

export default class GovernmentInsight extends PureComponent {
  state = {
    governmentPassage: {},
    governmentPassageLoading: true,
    governmentWords: [],
    governmentWordsLoading: true,
    page: firstPage
  };

  async componentDidMount() {
    const governmentPassage = await getGovernmentPassage(firstPage);
    this.setState({ governmentPassage, governmentPassageLoading: false });
    const governmentWords = await getGovernmentWords();
    this.setState({ governmentWords, governmentWordsLoading: false });
  }

  onPaginationChange = async page => {
    this.setState({ governmentPassageLoading: true });
    const governmentPassage = await getGovernmentPassage(page);
    this.setState({ governmentPassage, governmentPassageLoading: false });
  };

  render() {
    const {
      governmentPassageLoading,
      governmentWordsLoading,
      governmentPassage: { totalPage = 1, currentPage = 1, data = [] },
      governmentWords,
      page
    } = this.state;

    return (
      <div className={Styles.bodySection}>
        <NavBar />
        <div className={Styles.government}>
          <div className={Styles.content}>
            <div className={Styles.title}>
              <SmallPoint title={"政府文章"} />
            </div>
            {governmentPassageLoading ? (
              <LoadingSpin background={"blue"} />
            ) : (
              <GovernmentPassage params={data} />
            )}
            <div className={Styles.pagination}>
              <Pagination
                onChange={this.onPaginationChange}
                defaultCurrent={firstPage}
                total={totalPage}
              />
            </div>
          </div>
          <div className={Styles.content}>
            <div className={Styles.title}>
              <SmallPoint title={"政府热点词汇"} />
            </div>
            {governmentWordsLoading ? (
              <LoadingSpin background={"blue"} />
            ) : (
              <GovernmentWords data={governmentWords} />
            )}
          </div>
          <div />
        </div>
      </div>
    );
  }
}
