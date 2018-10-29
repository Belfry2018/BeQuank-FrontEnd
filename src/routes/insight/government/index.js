import React, { Component } from "react";
import styles from "./index.module.less";
import TypeBar from "./components/TypeBar/index";
import NavBar from "../components/NavBar";
import GovernmentPassage from "../../../components/GovernmentPassage";
import {Pagination, Skeleton, Select, DatePicker, message} from "antd";
import {
    getGovernmentPassage,
    getGovernmentWords
} from "../../../services/apiNews";
import moment from "moment";
import NameCard from "../../../components/NameCard";
const dateFormat = 'YYYY-MM-DD';
const Option = Select.Option;
const firstPage = 1;

class GovernmentInsight extends Component {

    state = {
        startDate: "2018-09-01",
        endDate: "2018-10-01",
        region: "china",
        currentType: "TZGG",
        page: firstPage,
        governmentPassage: {},
        governmentPassageLoading: true,
    };

    async onSearch() {
        if(this.state.startDate <= this.state.endDate){
            this.setState({ governmentPassageLoading: true });
            let param = {
                page: this.state.page,
                start: this.state.startDate,
                end: this.state.endDate,
                region: this.state.region,
                type: this.state.currentType
            }
            const governmentPassage = await getGovernmentPassage(param);
            this.setState({governmentPassage: governmentPassage, governmentPassageLoading: false});
        }
        else{
            message.info("请输入正确的时间范围");
            console.log(this.state.startDate +">"+ this.state.endDate)
        }
    }

    async componentDidMount() {
        await this.onSearch();
    }

    onPaginationChange = async page => {
        this.setState({ page: page });
        await this.onSearch();
    };

    setCurrentType = async ( type ) => {
        this.setState({currentType : type});
        await this.onSearch();
    }

    handleRegionChange = async (value) => {
        this.setState({region : value});
        await this.onSearch();
    }

    handleStartChange = async (date, dateString) => {
        this.setState({startDate : dateString});
        await this.onSearch();
    }

    handleEndChange = async (date, dateString) => {
        this.setState({endDate : dateString});
        await this.onSearch();
    }

    render () {
        const {
            governmentPassageLoading,
            governmentPassage: { totalPage = 1, currentPage = 1, data = [] },
            page
        } = this.state;

        return (
            <div className={styles.main}>
                <NavBar/>
                <div className={styles.content}>
                    <div className={styles.leftBar}>
                        <TypeBar setCurrentType={this.setCurrentType}/>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.select}>
                           <div className={styles.item}>
                               <div className={styles.text}>地区:</div>
                               <div className={styles.selector}>
                                   <Select defaultValue="china" style={{ width: 120 }} onChange={this.handleRegionChange}>
                                       <Option value="china">中国</Option>
                                       <Option value="guangdong">广东</Option>
                                       <Option value="zhejiang">浙江</Option>
                                       <Option value="jiangsu">江苏</Option>
                                   </Select>
                               </div>
                           </div>
                            <div className={styles.item}>
                                <div className={styles.text}>开始时间:</div>
                                <div className={styles.selector}>
                                    <DatePicker defaultValue={moment(this.state.startDate, dateFormat)} format={dateFormat} allowClear={false} onChange={this.handleStartChange} />
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.text}>结束时间:</div>
                                <div className={styles.selector}>
                                    <DatePicker defaultValue={moment(this.state.endDate, dateFormat)} format={dateFormat} allowClear={false} onChange={this.handleEndChange} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.list}>
                            <Skeleton active loading={governmentPassageLoading}>
                                <GovernmentPassage params={data} />
                            </Skeleton>
                            <div className={styles.pagination}>
                                <Pagination
                                    onChange={this.onPaginationChange}
                                    defaultCurrent={firstPage}
                                    total={totalPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GovernmentInsight;