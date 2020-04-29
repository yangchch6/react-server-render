module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./app/browser.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [ 
                    /node_modules/
                ],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}