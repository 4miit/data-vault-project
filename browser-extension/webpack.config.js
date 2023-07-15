const path = require('path');

module.exports = {
  entry: {
    index: "./src/index.jsx"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'my-first-webpack.bundle.js',
    filename: '[name].js',
  },
  module: {
    rules: [{ 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, 
        use: {
            loader: 'babel-loader',
            options:{
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
    }],
  },
};