const path = require("path");

module.exports = {
    devServer: {
        port: 5055
    },
    pluginOptions: {
        // 设置全局样式
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, "src/app.less")
            ]
        }
    }
}