import React from "react";
import PageLoadable from "../../components/Loadable/PageLoadable";
import {DefaultLayout} from "../../layout/DefaultLayout";
import {ALL_ROLE_TYPE} from "../../utils/authorization";


const Home = PageLoadable(() => import("../home/index"));
const Course = PageLoadable(() => import("../course/index"));
const Insight = PageLoadable(() => import("../insight/index"));
const Strategy = PageLoadable(() => import("../strategy/index"));

export default [
  <DefaultLayout path="/" exact component={Home} />,
  <DefaultLayout path="/course" component={Course} />,
  <DefaultLayout path="/insight" component={Insight} />,
  <DefaultLayout path="/strategy" component={Strategy} role={ALL_ROLE_TYPE} />
];
