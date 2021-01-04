/* config-overrides.js */
/* create-react-app 修改webpack配置文件 */

const path = require('path')

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    console.log("react-app-rewired 默认配置修改前 --->", config);
    config.entry = path.resolve(__dirname, "01.src-react基础/index.js")
    return config;
}

