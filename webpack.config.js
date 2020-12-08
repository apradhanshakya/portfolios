const { createConfig } = require('@deloitte-digital-au/webpack-config');
const path = require('path');

module.exports = createConfig({
    entry: {
        main: [
            './src/main.js',
            './src/assets/css/style.css',
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: 'dist/'
    },
});