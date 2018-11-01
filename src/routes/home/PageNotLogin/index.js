import React, { PureComponent } from "react";
import { Icon } from "antd";
import Styles from "./index.module.less";
import { Link } from "react-router-dom";
import Function1 from "./undraw_preferences_uuo2.svg";
import Function2 from "./undraw_blogging_vpvv.svg";
import Function3 from "./undraw_pie_chart_6efe.svg";

export default class PageNotLogin extends PureComponent {
  render() {
    return (
      <div className={Styles.wholePart}>
        <div className={Styles.mainBackGround}>
          <div className={Styles.backgroundTextSection}>
            <div>
              <div className={Styles.title}>
                <span className={Styles.titleBlue}>Be</span>
                Quank
              </div>
              <div className={Styles.divider} />
              <div className={Styles.content}>
                BeQuank是基于用户养成概念，专业面向空白经验散户的股票投资养成系社区平台
              </div>
              <Link className={Styles.mainLink} to={"/register"}>
                立即加入
              </Link>
            </div>
          </div>
          <div className={Styles.down}>
            <Icon type="down" theme="outlined" />
          </div>
        </div>
        <div className={Styles.secondSection}>
          <div className={Styles.secondText}>
            <div className={Styles.secondTitle}>关于本项目</div>
            <div className={Styles.secondDivider} />
            <div className={Styles.secondContent}>
              BeQuank是基于用户养成概念，专业面向空白经验散户的股票投资养成系社区平台。我们为用户开发了多因子选股策略板块、消费者教育板块和舆情汇总更新板块，分别提供个性化的策略并进行优化，帮助用户学习金融数理知识形成投资观念，了解政策舆论内容。我们希望，通过初级到高级的进阶养成，使用户逐渐成长为经验丰富、能力突出的个人投资者。{" "}
            </div>
          </div>
        </div>

        <div className={Styles.thirdSection}>
          <div className={Styles.secondThirdTitle}>
            三大功能 <div className={Styles.secondThirdDivider} />
          </div>
          <div className={Styles.thirdSectionMainPart}>
            <img className={Styles.image} src={Function1} alt={""} />
            <div className={Styles.text}>
              <div>
                <div className={Styles.title}>多因子选股策略版块</div>
                <div className={Styles.divider} />
                <div className={Styles.content}>
                  本推荐系统基于多因子选股策略进行智能推荐，在多因子模型中，我们应用相关性分析、主成分分析及多元线性回归等方法并结合考虑风险价值模型（VaR）为我们的客户精心推荐出满足客户预期收益和风险偏好的投资组合。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.forthSection}>
          <div className={Styles.forthSectionMainPart}>
            <div className={Styles.text}>
              <div>
                <div className={Styles.title}>消费者教育模块</div>
                <div className={Styles.divider} />
                <div className={Styles.content}>
                  我们在此提供低门槛、全方位的教程服务，您可以在此进行文字教程的阅读，了解量化投资科普、教程和实战经验，分享自己的决策过程，功能板块内还设置了“知识付费”模式的投资策略问答和定向投资分析的功能板块，通过一对一个人服务，与专业的基金经理人对接，完善和商讨自己的投资战略，帮助个人投资者进一步优化策略、便利决策过程。
                </div>
              </div>
            </div>
            <img className={Styles.image} src={Function2} alt={""} />
          </div>
        </div>
        <div className={Styles.thirdSection}>
          <div className={Styles.thirdSectionMainPart}>
            <img className={Styles.image} src={Function3} alt={""} />
            <div className={Styles.text}>
              <div>
                <div className={Styles.title}>舆情汇总板块</div>
                <div className={Styles.divider} />
                <div className={Styles.content}>
                  我们在此通过数据爬虫工具、文本分析工具和文本数据可视化工具进行包括关键词分析、语义网络分析、情感分析和主成分分析与聚类分析进行信息的筛选、预处理和可视化，通过信息呈现和信息推送订阅的方式，利用多样化的关键词云、话题树、走势分析反应社会舆论和宏观政策对股票市场运行的反应，并传递各级各部门政策动态。您也可以在此进行订阅服务，事实掌握政策动向，反应决策，调整投资战略。{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<Carousel className={Styles.carousel} effect="fade" autoplay>*/}
        {/*<div>*/}
        {/*<h3>1</h3>*/}
        {/*</div>*/}
        {/*</Carousel>*/}
      </div>
    );
  }
}
