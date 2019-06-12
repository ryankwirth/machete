const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'core.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'core.js',
    library: 'Machete-Core',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  node: {fs: 'empty'}
};
