import React, { PureComponent } from "react";
import Styles from "./index.module.less";
import WordCloud from "../../components/WordCloud";
import {
  getCloudKeywords,
  getHotspot,
  getSentiment,
  getSentimentTrend,
  getSentimentRatio,
  getSentimentRatioTrend
} from "../../services/apiNews";
import LoadingSpin from "../../components/LoadingSpin";
import HotSpot from "./components/HotSpot";
import SmallPoint from "../../components/SmallPoint";
import SentimentDashBoard from "../../components/SentimentDashBoard";
import { Col, Row, Input, Skeleton } from "antd";
import TrendChartOfPublicOpinion from "../../components/TrendChartOfPublicOpinion";
import NavBar from "./components/NavBar";
import PieChart from "../../components/PieChart";
import SentimentRatioTrend from "../../components/SentimentRatioTrend";
const Search = Input.Search;

const initWord = "美团";

export default class Insight extends PureComponent {
  state = {
    cloud: undefined,
    hotspot: undefined,
    sentiment: undefined,
    sentimentTrend: undefined,
    gvnPassage: undefined,
    sentimentRatio: undefined,
    sentimentRatioTrend: undefined,
    wordTrend: initWord,
    sentimentTrendWord: initWord,
    currentHotSpotPage: 1
  };

  async componentDidMount() {
    const cloud = await getCloudKeywords();
    this.setState({ cloud });
    const hotspot = await getHotspot();
    this.setState({ hotspot });
    const sentiment = await getSentiment();
    this.setState({ sentiment });
    const sentimentRatio = await getSentimentRatio(initWord);
    this.setState({ sentimentRatio });
    const sentimentRatioTrend = await getSentimentRatioTrend(initWord);
    this.setState({ sentimentRatioTrend });
    const sentimentTrend = await getSentimentTrend(initWord);
    this.setState({ sentimentTrend });
  }

  onPageClicked = async page => {
    const hotspot = await getHotspot(page);
    this.setState({ hotspot, currentHotSpotPage: page });
  };

  render() {
    const {
      cloud,
      hotspot = {},
      sentiment = [],
      sentimentTrend,
      sentimentRatio,
      sentimentRatioTrend,
      wordTrend,
      sentimentTrendWord,
      currentHotSpotPage
    } = this.state;
    return (
      <div className={Styles.bodySection}>
        <NavBar />
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
                <SmallPoint title={"微博热点"} />
                <HotSpot
                  onPageClicked={this.onPageClicked}
                  currentPage={currentHotSpotPage}
                  totalPage={hotspot.totalPage}
                  list={hotspot.data}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.bodyItem}>
          <SmallPoint title={"舆情随机展示"} />
          <div>
            <Row gutter={40}>
              {sentiment.length === 0 ? (
                <Col md={8}>
                  <div className={Styles.cardStyle}>
                    <div style={{padding:20}}>
                      <Skeleton active />
                    </div>
                  </div>
                </Col>
              ) : (
                sentiment.map(e => {
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
                })
              )}
            </Row>
          </div>
        </div>
        <div className={Styles.bodyItem}>
          <div className={Styles.bodySearch}>
            <SmallPoint title={`词语评论走势 「${wordTrend}」`} />
            <Search
              placeholder="输入关键词"
              onSearch={async value => {
                this.setState({
                  sentimentRatio: undefined,
                  sentimentRatioTrend: undefined,
                  wordTrend: value
                });
                const sentimentRatio = await getSentimentRatio(value);
                this.setState({ sentimentRatio });
                const sentimentRatioTrend = await getSentimentRatioTrend(value);
                this.setState({ sentimentRatioTrend });
              }}
              style={{ width: 200 }}
            />
          </div>
          <div>
            <Row gutter={40}>
              <Col md={12}>
                <div
                  className={Styles.cardStyle}
                  style={{ padding: sentimentRatio ? 0 : 20 }}
                >
                  <Skeleton active loading={!sentimentRatio}>
                    {sentimentRatio && <PieChart {...sentimentRatio} />}
                  </Skeleton>
                </div>
              </Col>
              <Col md={12}>
                <div
                  className={Styles.cardStyle}
                  style={{ padding: sentimentRatioTrend ? 0 : 20 }}
                >
                  <Skeleton active loading={!sentimentRatioTrend}>
                    {sentimentRatioTrend && (
                      <SentimentRatioTrend data={sentimentRatioTrend} />
                    )}
                  </Skeleton>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className={Styles.bodyItem}>
          <div className={Styles.bodySearch}>
            <SmallPoint title={`舆情走势图 「${sentimentTrendWord}」`} />
            <Search
              placeholder="输入关键词"
              onSearch={async value => {
                this.setState({ sentimentTrend: undefined });
                const sentimentTrend = await getSentimentTrend(value);
                this.setState({ sentimentTrend, sentimentTrendWord: value });
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
      </div>
    );
  }
}
