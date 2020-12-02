const { createConfig } = require('@deloitte-digital-au/webpack-config');

module.exports = createConfig({
    entry: {
        main: [
            './src/index.js',
            './src/assets/css/style.scss',
        ],
    },
});