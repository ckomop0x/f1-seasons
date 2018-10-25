const path = require('path');

/* eslint-disable global-require */
module.exports = function getPostCssConfig(options) {
    return {
        plugins: [
            require('autoprefixer'),
            require('postcss-calc'),
            require('postcss-custom-media')(
                Object.assign(
                    {
                        importFrom: path.resolve(process.cwd(), './src/styles/index.css')
                    },
                    options && options.customMedia
                )
            )
        ]
    };
};
/* eslint-enable */
