var config ={
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets: ['es2015','env','react'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                loader: ['css-loader','sass-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }
                ]
            }
        ]
    }
};

module.exports = config;