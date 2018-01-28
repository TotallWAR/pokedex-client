module.exports = [
  {
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader?url=false', 'sass-loader'],
    exclude: ['node_modules'],
  },
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public\/)/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react', 'stage-2'],
    },
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react'],
      },
    },
  },
  // {
  //     loader: 'postcss-loader',
  //     options: {
  //         plugins: () => [require('autoprefixer')]
  //     }
  // },
  {
    test: /\.css$/,
    //loaders: ['style-loader', 'css-loader?importLoaders=1'],
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true, // default is false
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[name]--[local]--[hash:base64:8]',
        },
      },
      'postcss-loader',
    ],
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'file-loader',
  },
  {
    test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'file-loader',
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?prefix=font/&limit=5000',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
  },
  {
    test: /\.gif/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/gif',
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/jpg',
  },
  {
    test: /\.png/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/png',
  },
];