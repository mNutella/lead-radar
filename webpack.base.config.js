var path = require('path');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = [{
  entry: [
    './assets/js/jquery-index.js',
  ],
  output: {
    path: path.resolve('./assets/bundles/'),
    filename: 'bundle-jquery.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [nodeModulesDir],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /jquery\/dist\/jquery\.js$/,
        loader: 'expose-loader?$',
      },
      {
        test: /jquery\/dist\/jquery\.js$/,
        loader: 'expose-loader?jQuery',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      }],
  },
  plugins: [
    new BundleTracker({
      filename: './jquery-webpack-stats.json',
    }),
  ],
}, {
  context: __dirname,
  entry: [
    // defined in local or prod
  ],
  output: {
    // defined in local or prod
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(jpg|png)?$/,
        loaders: [
          'file-loader?name=i-[hash].[ext]',
        ],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      }],
  },
  plugins: [
    // defined in local or prod
  ],
  resolve: {
    modules: [
      'node_modules',
      'bower_components',
      path.resolve(__dirname, 'assets/js/'),
    ],
    extensions: ['.js', '.jsx'],
  },
}];
