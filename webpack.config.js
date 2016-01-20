const webpack = require('webpack');
const PluginWebpackConfig = require('graylog-web-plugin').PluginWebpackConfig;
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const ENTRY_PATH = path.resolve(ROOT_PATH, 'src/web/index.jsx');

module.exports = new PluginWebpackConfig('org.graylog.plugins.Sample', {
  build_path: BUILD_PATH,
  entry_path: ENTRY_PATH,
  root_path: ROOT_PATH
}, {
  // Here goes your additional webpack configuration.
});
