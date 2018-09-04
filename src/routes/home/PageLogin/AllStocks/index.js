import React, { PureComponent } from "react";
import NavButton from "../../components/NavButton";
import LoadingSpin from "../../../../components/LoadingSpin/index";
import { allStocks } from "../../../../services/apiStrategy";
import StockList from "../../../../components/StockList/index";
import Styles from "./index.module.less";
const initPage = 1;

export default class AllStocks extends PureComponent {
  state = {
    stocks: undefined,
    loading:false
  };
  page = initPage;

  handleNextPageClicked = async () => {
    this.page++;
    this.setState({ loading: true });
    const newStocks = await allStocks({
      page: initPage
    });
    this.setState(prevState => {
      return { stocks: [...prevState.stocks, ...newStocks]};
    });
    this.setState({loading:false })
  };

  async componentDidMount() {
    // window.addEventListener("scroll", this.handleScroll);

    const stocks = await allStocks({
      page: initPage
    });
    this.setState({ stocks });
  }

  componentWillUnmount() {
    // window.removeEventListener("scroll", this.handleScroll);
  }

  // handleScroll = e => {
  //   if (window.scrollY < 5) {
  //     this.setState({ isTop: true });
  //   } else {
  //     this.setState({ isTop: false });
  //   }
  // };

  render() {
    const { stocks, loading } = this.state;
    return (
      <div className={Styles.wholePage}>
        <div>
          <NavButton />
        </div>
        <div className={Styles.item}>
          {stocks ? (
            stocks && stocks.length > 0 ? (
              <div>
                <StockList list={stocks} />
                {loading ? (
                  <LoadingSpin background={"blue"} />
                ) : (
                  <div
                    onClick={this.handleNextPageClicked}
                    className={Styles.loadMore}
                  >
                    点击加载更多
                  </div>
                )}
              </div>
            ) : (
              <div>没有数据</div>
            )
          ) : (
            <LoadingSpin background={"blue"} />
          )}
        </div>
      </div>
    );
  }
}
