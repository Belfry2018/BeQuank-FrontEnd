import React, { PureComponent } from "react";
import NavButton from "../../components/NavButton";
import { searchStocks } from "../../../../services/apiStrategy";
import StockList from "../../../../components/StockList/index";
import Styles from "./index.module.less";
import { Skeleton, Input, message } from "antd";
const Search = Input.Search;
const initPage = 1;

export default class AllStocks extends PureComponent {
  state = {
    pattern: "1",
    stocks: undefined,
    loading: false
  };
  page = initPage;

  handleNextPageClicked = async () => {
    this.page++;
    this.setState({ loading: true });
    const newStocks = await searchStocks({
        pattern : this.state.pattern,
        page: this.state.page
    });
    this.setState(prevState => {
      return { stocks: [...prevState.stocks, ...newStocks] };
    });
    this.setState({ loading: false });
  };

  onSearch = async ( value ) => {

    console.log(value);
    let reg = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
    if(reg.test(value)){
        this.setState({
            pattern : value ,
            page : 1,
            stocks : undefined
        });
        this.setState({ loading: true });
        const newStocks = await searchStocks({
            pattern : this.state.pattern,
            page: this.state.page
        });

        this.setState({ loading: false ,
            stocks: newStocks});
    }
    else{
      message.error("请输入正确的查询字段")
    }
  }

  async componentDidMount() {
    const stocks = await searchStocks({
        pattern: this.state.pattern,
        page: initPage
    });
    this.setState({ stocks });
  }


  render() {
    const { stocks, loading } = this.state;
    return (
      <div className={Styles.wholePage}>
        <div>
          <NavButton />
        </div>
        <div className={Styles.searchSection}>
            <Search  placeholder="input search text"
                     onSearch = { value  => this.onSearch(value)}
                     style={{ width: 350 }}/>
        </div>
        <div className={Styles.item}>
          <div style={{ padding: stocks ? 0 : 20 }}>
            <Skeleton active loading={!stocks}>
              {stocks && stocks.length > 0 ? (
                <div>
                  <StockList list={stocks} />
                  <div style={{ padding: loading ? 20 : 0 }}>
                    <Skeleton active loading={loading}>
                      <div
                        onClick={this.handleNextPageClicked}
                        className={Styles.loadMore}
                      >
                        点击加载更多
                      </div>
                    </Skeleton>
                  </div>
                </div>
              ) : (
                <div>没有数据</div>
              )}
            </Skeleton>
          </div>
        </div>
      </div>
    );
  }
}
