const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env'] }
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: { extensions: ['*', '.js', '.jsx'] },
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 8889,
		publicPath: 'http://localhost:8889/dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('public/build.html')
		})
	]
};
