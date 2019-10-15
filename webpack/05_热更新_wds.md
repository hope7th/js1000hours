 1:安装wds 
 
 cnpm install webpack-dev-server --save-dev 
 2: webpack.config.js 配置
 const webpack = require('webpack')

  plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        hot:true
    }

    3:package.json配置
     "dev": "webpack-dev-server --open"

