const path = require('path');

module.exports = {
  mode: 'development',

  // No entry needed; Karma injects test files as entry points

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.spec.json', // Use your test tsconfig
              transpileOnly: true, // Speed up compilation for tests
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'raw-loader', // For component templates
      },
      {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader'], // For component styles
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource', // Handle images if needed
      },
    ],
  },

  devtool: 'inline-source-map', // Enable source maps for debugging tests

  output: {
    // Output is virtual in Karma, but required by Webpack
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist-test'),
  },
};
