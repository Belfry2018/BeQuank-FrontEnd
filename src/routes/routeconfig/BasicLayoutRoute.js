import React from "react";
import PageLoadable from "../../components/Loadable/PageLoadable";
import {DefaultLayout} from "../../layout/DefaultLayout";


const Home = PageLoadable(() => import("../home/index"));
const Course = PageLoadable(() => import("../course/index"));
const Insight = PageLoadable(() => import("../insight/index"));

export default [
  <DefaultLayout path="/" exact component={Home} />,
  <DefaultLayout path="/course" component={Course} />,
  <DefaultLayout path="/insight" component={Insight} />
];
