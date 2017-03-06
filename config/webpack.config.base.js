const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, '../build'),
        publicPath: '/',
        filename: '[name].js',
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.json', '.scss'
        ],
        alias: {
            actions: path.resolve(__dirname, '../frontend/javascript/actions/'),
            components: path.resolve(__dirname, '../frontend/javascript/components/'),
            constants$: path.resolve(__dirname, '../frontend/javascript/constants.js'),
            reducers: path.resolve(__dirname, '../frontend/javascript/reducers/'),
            routes: path.resolve(__dirname, '../frontend/javascript/routes/'),
            utils: path.resolve(__dirname, '../frontend/javascript/utils/'),
            styles: path.resolve(__dirname, '../frontend/styles/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve('./frontend'),
                loader: 'babel-loader',
            }
        ]
    },
};