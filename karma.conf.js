const webpack = require('./webpack.test.config');
webpack.mode = 'development';
module.exports = (config) => {
    config.set({
        frameworks: ['jasmine', 'karma-typescript'],

        files: [
            { pattern: 'spec/*_spec.js', watched: false },
            { pattern: 'spec/**/*_spec.js', watched: false },
            { pattern: 'spec/*_spec.ts', watched: false },
            { pattern: 'spec/**/*_spec.ts', watched: false }
        ],

        preprocessors: {
            'spec/*_spec.js': ['webpack', 'sourcemap'],
            'spec/**/*_spec.js': ['webpack', 'sourcemap'],
            'spec/*_spec.ts': ['webpack', 'sourcemap'],
            'spec/**/*_spec.ts': ['webpack', 'sourcemap']
        },

        webpack,

        reporters: ['progress', 'karma-typescript'],

        browsers: ['ChromeHeadless'] // or just 'Chrome', 'ie', 'firefox', 'edge' etc.
        //browsers: ['Chrome', 'Edge']; // can run tests in more than one browser at once.
        // need to install karma-edge-launcher:   npm install karma-edge-launcher
        // For Debugging
        //browsers: ['Chrome']
    });
};