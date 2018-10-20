<div align="center" markdown="1">

<img src="./logo.png" alt="BeQuank" width="300">

<h1>BeQuank</h1>

**This project is under active development**

</div>

## 开发人员须知

### 开发环境

建议试用 `npm` 做依赖管理，yarn.lock 文件会对依赖索引做记录，加快速度

您仍可使用 `yarn` 或 `cnpm` 管理依赖

#### 启动项目

```
yarn install
yarn start
```

or

```
npm install
npm start
```

#### 启动 docz

```
yarn install
yarn run docz:dev
```

or

```
npm install
npm run docz:dev
```

### 项目配置

1.  使用 [create react app v1](https://github.com/facebook/create-react-app/tree/master) 脚手架。
2.  使用 [react app rewired](https://github.com/timarney/react-app-rewired) 可以扩充 [create react app](https://github.com/facebook/create-react-app/tree/master) 脚手架的内部配置，此处主要用以扩充项目使用 [less](https://github.com/less/less.js) 的能力
    1.  [less](https://github.com/less/less.js) 是 css 最有名的预处理器之一，兼容且扩充 css 的语法
    2.  本项目使用的 [react-app-rewire-less-with-modules](https://github.com/timarney/react-app-rewired/tree/master/packages/react-app-rewire-less) 插件 **似乎** 支持 less 模块化 (待验证)
3.  使用 [docz](https://www.docz.site/) 展示公共组件，减少团队交流成本
4.  使用 [antd](https://ant.design/index-cn) 作为主要组件库，减少开发成本
    1.  建议尽可能少的使用 antd 组件库。因为其很多情况下过于臃肿，不适合新手在对首屏加载速度要求很高的前台项目中使用
5.  使用 [react router](https://reacttraining.com/react-router/) 管理前端路由
