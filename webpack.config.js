const path = require('path');
// 生成HTML插件
const htmlWebpackPlugin = require('html-webpack-plugin');
// 生成CSS插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 清理文件缓存
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 配置vue-loader@15以上
const { VueLoaderPlugin } = require('vue-loader')
// 添加压缩文件
const UglifyjsWebpackPlugin= require('uglifyjs-webpack-plugin')
// 添加路径前缀
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}


module.exports = {
    //entry为入口,webpack从这里开始编译
    entry: [
        "babel-polyfill",
        path.join(__dirname, './src/main.js')
    ],
    //output为输出 path代表路径 filename代表文件名称
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.[hash:8].js',
        chunkFilename: '[name].[chunkhash:8].js'
    },
    // 提取公共样式
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    },
    // vuejs配置
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // 配置路径
            '@': resolve('src')

        },
    },

    //module是配置所有模块要经过什么处理
    //test:处理什么类型的文件,use:用什么,include:处理这里的,exclude:不处理这里的
    module: {
        rules: [
            {
                // 配置vue-loader
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                }
            },
            {
                // 配置js
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname , 'src'),
                exclude: /node_modules/
            },
            // this will apply to both plain .css files
            // AND <style> blocks in vue files
            // {
            //     test: /\.css$/,
            //     use: [
            //     'vue-style-loader',
            //     'css-loader'
            //     ]
            // },
            {
                // css抽离js
                test:/\.css$/,
                // loader:['style-loader','css-loader'],
                use:ExtractTextPlugin.extract({
                    use:'css-loader'
                })//不再需要style-loader

            },
            // {
            //     test:/\.(sass|scss)$/,
            //     use:['style-loader','css-loader','postcss-loader','sass-loader']
            // },
            {
                // 配置图片
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{ // 这里的options选项参数可以定义多大的图片转换为base64
                        limit:5000000, // 图片小于
                        outputPath:'images' //定义输出的图片文件夹
                    }
                }]
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            
    
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",  //打包后的文件名
            template: path.join(__dirname , "./index.html")  //要打包文件的路径
        }),
        new ExtractTextPlugin({
            filename: 'index.[hash:8].css'
        }),
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin(),
        new UglifyjsWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),  //启动路径
        host:'localhost',  //域名
        port: 8080,  //端口号
    },
    devtool: 'source-map',
    mode: 'development'
};