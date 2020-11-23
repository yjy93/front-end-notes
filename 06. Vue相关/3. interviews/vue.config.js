/**
 * webpack 配置
 */
module.exports = {
    // 修改项目的入口文件, 可以修改 configureWebpack 对象的 entry 属性
    // 可以修改 entry 这个属性来查看对应不同的知识总结
    configureWebpack: {
        // entry: './src/main.js',  // 默认入口 ./src/main.js
        // entry:'./01.src-v-if和v-for优先级/main.js', // 对应实现的入口时
        entry:'./02.src-v-if v-model v-for的实现原理/main.js', // 对应实现的入口
    },
    lintOnSave: false, // 忽略 eslint 未使用变量报错问题
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    }
}
