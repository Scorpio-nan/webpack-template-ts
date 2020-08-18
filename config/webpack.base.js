const path = require('path');
const entry = require('./entries');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const copyWebpackPlugin = require('copy-webpack-plugin');
const targetPath = 'dist';
function getProjectAbsolutePath(dir) {
    return path.resolve(__dirname, '../', dir)
}
module.exports = {
    entry:entry.entries,
    output:{
        filename:'pages/[name]/[name].js',
        path:path.resolve(__dirname,`../${targetPath}`),
        publicPath:'/'
    },
    resolve:{
        extensions:['.ts','.tsx','.js','.scss','css','.json'],
        alias:{//别名
            'vue$':'vue/dist/vue.esm.js',
            '@': path.join(__dirname, '../src')
        },
    },
    plugins:[
        new copyWebpackPlugin({
            patterns: [
                {
                    from:'static',
                    to:'static'
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename:'pages/[name]/[name].css'
        })
    ],
    optimization:{
        splitChunks:{//分割代码块
            cacheGroups:{//缓存组
                vendors:{
                    chunks:'initial',
                    minSize: 0,
                    minChunks:2,
                    priority:-10,
                    test:/[\\/]node_modules[\\/]/,
                    reuseExistingChunk: true
                },
                common:{//公共的模块
                    chunks:'initial',
                    minSize: 0,
                    minChunks:2,
                    priority:-20,
                    reuseExistingChunk: true
                },
            }
        }
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use: [
                    {
                        loader:'ts-loader'
                    }
                ],
                exclude:/node_modules/
            },
            {
                //可以处理scss文件, node-sass,sass-loader
                test:/\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                autoprefixer({
                                    overrideBrowserslist: ["defaults","> 1%","last 10 versions","Firefox < 20","not ie <= 8","ios > 7","cover 99.5%"]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    'css-loader',//@import语法解析路径
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                autoprefixer({
                                    overrideBrowserslist: ["defaults","> 1%","last 10 versions","Firefox < 20","not ie <= 8","ios > 7","cover 99.5%"]
                                })
                            ]
                        }
                    },
                    'sass-loader'//把scss -> css
                ]
            },
            {
                test:/\.html$/,
                use:'html-withimg-loader'
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                use:[
                    {
                        loader:"url-loader",
                        //当图片小于多少k的时候用base64转化
                        options:{
                            limit:10*1024,
                            esModule: false,
                            outputPath: 'assets/imgs'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader'
            }
        ]
    }
}
entry.htmlArray.forEach(element => {
    module.exports.plugins.push(new HtmlWebpackPlugin(element));
});