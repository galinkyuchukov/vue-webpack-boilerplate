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
        devtool: 'inline-source-map',
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
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'] 
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
    }
};
