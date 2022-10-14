const HtmlWebpackPlugin = require('./node_modules/html-webpack-plugin')
module.exports ={
	mode: 'development',
	output:{
		filename:'app.bundle.js'
	},
	plugins:[
		new HtmlWebpackPlugin()
	]
}