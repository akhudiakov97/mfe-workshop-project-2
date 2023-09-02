const singleSpaDefaults = require("webpack-config-single-spa-react");
const { merge } = require("webpack-merge");
const commonConfig = require('./webpack.common');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "test",
    projectName: "landing",
    webpackConfigEnv,
    argv,
  });
  return merge(defaultConfig, commonConfig);
};
