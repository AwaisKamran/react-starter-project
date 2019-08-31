const path = require('path');

module.exports = {
	watch: true,
    entry: "./src/index.js",
    output: {
        path: __dirname + "/public/assets",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}