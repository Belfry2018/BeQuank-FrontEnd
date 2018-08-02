const { injectBabelPlugin } = require("react-app-rewired");
// const rewireLess = require("react-app-rewire-less");
const rewireLessWithModule = require('react-app-rewire-less-with-modules')

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", style: true }],
    config
  );
  config = rewireLessWithModule(config, env, {
      javascriptEnabled: true
  });
  return config;
};
