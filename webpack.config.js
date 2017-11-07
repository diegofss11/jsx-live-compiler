const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015', 'stage-2'] }
      },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader!autoprefixer-loader' },
      { test: /\.scss$/, exclude: /node_modules/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader' }
    ]
  },
  devServer: {
    contentBase: SRC_DIR,
    hot: true
  }
};

module.exports = config;