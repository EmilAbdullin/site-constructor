const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        filename:'bundle.[hash].js',
        path:path.resolve(__dirname, 'dist')
    },
    devServer:{
        port:5555
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'Constructor Site Javascript'
        })
    ]
}