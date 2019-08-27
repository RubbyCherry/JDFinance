const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
    mode : 'development',
    entry : {
        index : './src/main.js'
    },
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"bundle.js"
    },
    module: {
        rules:[
            {
              test: /\.vue$/,
                loader: 'vue-loader'  
            },{
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },      {
                test: /\.js$/,
                loader: 'babel-loader'
              }
        ]
    }, 
    resolve: {
        extensions: ['.vue','.js', '.jsx']
      }, 
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        port: 8080
    }
}