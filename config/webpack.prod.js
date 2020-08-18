const {smart} = require('webpack-merge');
const base = require('./webpack.base.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
module.exports = smart(base,{
    mode:'production',
    devtool:false,
    performance: {
        // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
        hints: "warning",
        // 开发环境设置较大防止警告
        // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
        maxEntrypointSize: 5000000, 
        // 最大单个资源体积，默认250000 (bytes)
        maxAssetSize: 3000000
    },
    optimization:{
        minimizer:[
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins:[
        new CleanWebpackPlugin()
    ],
})