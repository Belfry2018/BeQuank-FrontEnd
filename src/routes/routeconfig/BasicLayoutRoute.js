import React from "react";
import PageLoadable from "../../components/Loadable/PageLoadable";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { ALL_ROLE_TYPE } from "../../utils/authorization";

const Home = PageLoadable(() => import("../home/index"));
const AllStocks=PageLoadable(()=>import("../home/PageLogin/AllStocks"));
const Course = PageLoadable(() => import("../course/index"));
const CourseDetail = PageLoadable(() => import("../course/detail/index"));
const Insight = PageLoadable(() => import("../insight/index"));
const Strategy = PageLoadable(() => import("../strategy/index"));

const article = PageLoadable(() => import("../articleTest/index"));

const UserInfo = PageLoadable(() => import("../user/info/index"));

export default [
  <DefaultLayout path="/" exact component={Home} />,
  <DefaultLayout path="/stocks" exact component={AllStocks} />,
  <DefaultLayout path="/course" exact component={Course} />,
  <DefaultLayout path="/course/:tutorialId" component={CourseDetail} />,
  <DefaultLayout path="/insight" component={Insight} />,
  <DefaultLayout path="/strategy" component={Strategy} role={ALL_ROLE_TYPE} />,
  <DefaultLayout path="/articleTest" component={article} />,
    <DefaultLayout path="/userInfo" component={UserInfo}/>
];
