import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import WordCloud from "../../components/WordCloud";
import {
  getCloudKeywords,
  getHotspot,
  getSentiment,
  getSentimentTrend,
    getGovernmentPassage
} from "../../services/apiNews";
import LoadingSpin from "../../components/LoadingSpin";
import HotSpot from "./components/HotSpot";
import SmallPoint from "../../components/SmallPoint";
import SentimentDashBoard from "../../components/SentimentDashBoard";
import { Col, Row, Input } from "antd";
import TrendChartOfPublicOpinion from "../../components/TrendChartOfPublicOpinion";
import GovernmentPassage from "../../components/GovernmentPassage";
const Search = Input.Search;

export default class Insight extends PureComponent {
  state = {
    cloud: undefined,
    hotspot: undefined,
    sentiment: undefined,
    sentimentTrend: undefined,
      gvnPassage:undefined
  };

  async componentDidMount() {
    const cloud = await getCloudKeywords();
    this.setState({ cloud });
    const hotspot = await getHotspot();
    this.setState({ hotspot });
    const sentiment = await getSentiment();
    this.setState({ sentiment });
    const sentimentTrend = await getSentimentTrend("美团");
    this.setState({ sentimentTrend });
    const gvnPassage = await getGovernmentPassage(1);
    this.setState({ gvnPassage });
  }

  render() {
    const { cloud, hotspot, sentiment = [], sentimentTrend, gvnPassage=[] } = this.state;
    return (
      <div className={Styles.bodySection}>
        <div className={Styles.bodyWidthItem}>
          <div className={Styles.wordCloud}>
            {cloud ? (
              cloud.length > 0 ? (
                <WordCloud data={cloud || []} />
              ) : (
                undefined
              )
            ) : (
              <LoadingSpin />
            )}
          </div>
        </div>
        <div className={Styles.bodyWidthItem}>
          <div className={Styles.bodyBlackMask}>
            <div className={Styles.hotSpotSection}>
              <div className={Styles.mainSection}>
                <HotSpot list={hotspot} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.bodyItem}>
          <SmallPoint title={"舆情随机展示"} />
          <div>
            <Row gutter={40}>
              {sentiment.map(e => {
                return (
                  <Col md={8}>
                    <div className={Styles.cardStyle}>
                      <SentimentDashBoard
                        word={e.word}
                        sentiment={e.sentiment}
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div className={Styles.bodyItem}>
          <div className={Styles.bodySearch}>
            <SmallPoint title={"舆情走势图"} />
            <Search
              placeholder="输入关键词"
              onSearch={async value => {
                this.setState({ sentimentTrend:undefined});
                const sentimentTrend = await getSentimentTrend(value);
                this.setState({ sentimentTrend });
              }}
              style={{ width: 200 }}
            />
          </div>
        </div>
        <div className={Styles.bodyWidthItem}>
          <div className={Styles.trend}>
            {sentimentTrend ? (
              sentimentTrend.length > 0 ? (
                <TrendChartOfPublicOpinion data={sentimentTrend || []} />
              ) : (
                undefined
              )
            ) : (
              <LoadingSpin background={"blue"} />
            )}
          </div>
        </div>
          <div className={Styles.bodyWidthItem}>
              <GovernmentPassage params={gvnPassage}/>
          </div>
      </div>
    );
  }
}
