const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: [
            './src/main/resources/static/js/index.js'
            , './src/main/resources/static/js/project/project.js'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './src/main/resources/static/dist')
    },

    module: { rules: [{ test: /\.(js)$/, include: /(src|node_modules)/, use: [{ loader: "babel-loader" }] }] }

}