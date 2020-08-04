const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js", // 打包入口文件
    output: {
        path: path.resolve(__dirname, "./dist"),// 输出路径
        filename: "main.js"
    }, 
    mode: "development", // 打包环境
    module: {
        rules: [  // loader模块处理
            {
                test: /\.css$/,
                use: "style-loader"
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "my app",
        filename: "app.html",
        template: "./index.html"
    })] // 插件配置
}