const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

   entry: {
     app: './src/App.js'
   },

   output: {
     filename: 'bundle.js',
     path: path.resolve('dist'),
   },

   devtool: 'cheap-module-source-map',

   module: {
     loaders: [
       { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query:
        {
          presets:['react']
        }
      },
       { test: /\.s?css$/, loader: 'style-loader!css-loader' },
     ],
   },

   plugins: [
     new HtmlWebpackPlugin({
       template: path.resolve('public','index.html')
     })
   ]
};
