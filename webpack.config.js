var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'whatwg-fetch',
		'babel-polyfill',
		'./client/client.js'
	],
	output: {
		path: path.join(__dirname, 'dist/js'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.NoErrorsPlugin()
  	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query:{
					presets: ['react', 'es2015', 'stage-0']
				}
			}
		]
	}
}