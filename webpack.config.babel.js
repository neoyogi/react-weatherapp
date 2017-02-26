const {resolve} = require('path');
const webpackValidator = require('webpack-validator');
const {getIfUtils} = require('webpack-config-utils');
const currentDir = resolve('.');
let webpack = require('webpack');

module.exports = function(env) {
    const {ifProd, ifNotProd} = getIfUtils(env);
    return webpackValidator({
        context: currentDir,
        entry: ['script-loader!jquery/dist/jquery.min.js',
                'script-loader!foundation-sites/dist/js/foundation.min.js',
                './app/app.jsx'],
        externals:{
            jquery: 'jQuery'
        },
        plugins:[
            new webpack.ProvidePlugin({
                '$':'jquery',
                'jQuery': 'jquery'
            })
        ],
        output: {
            path: resolve('public'),
            filename: 'bundle.js',
            publicPath: ('/public/'),
            pathinfo: ifNotProd()
        },
        resolve: {
            alias: {
                Main : currentDir +'/app/components/main.jsx',
                Nav : currentDir + '/app/components/nav.jsx',
                Weather: currentDir + '/app/components/weather.jsx',
                About: currentDir + '/app/components/about.jsx',
                Examples: currentDir + '/app/components/examples.jsx',
                WeatherForm : currentDir + "/app/components/weather_components/weatherform.jsx",
                WeatherMessage: currentDir + "/app/components/weather_components/weathermessage.jsx",
                openWeatherMap: currentDir + "/app/api/openweathermap.jsx",
                ErrorModal: currentDir + "/app/components/errorModal.jsx"
            },
            extensions: ['.js', '.jsx'],
        },
        module: {
            loaders: [
                {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'es2016', 'stage-2']
                    },
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/
                }
            ]
        },
        devtool: ifProd('source-map', 'eval')
    });
};
