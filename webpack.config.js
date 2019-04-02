const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = function(env){
    return {
        mode: env.NODE_ENV,
        entry: './src/main.js',
        output: {
            filename: 'build.js',
            path: path.resolve(__dirname, 'dist')
        },
        devtool: env.NODE_ENV == 'development' ? 'inline-source-map' : false,
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                    options: {
                        loaders: {}
                    }
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', {
                                "useBuiltIns": "usage",
                                "debug": true,                            
                            }]]
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Demo Page',
                filename: 'index.html',
                template: 'src/index.html',
                inject: 'body'
            }),
            new VueLoaderPlugin()
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 8080
        }
    }
};
