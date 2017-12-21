var webpack = require('webpack'),
    config = require('./webpack.test.conf');

webpack(config, function(err, stats) {
    // show build info to console
    console.log(stats.toString({chunks: false, color: true}));
});
