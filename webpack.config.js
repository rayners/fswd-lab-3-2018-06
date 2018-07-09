var path = require('path'),
    webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './app/index.js',
  output: {
      path: path.join(__dirname, 'public'),
      publicPath: '/',
      filename: 'bundle.js'
  },
  resolve: {
      modules: [path.resolve(__dirname, "app"), "node_modules"],
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]    
  },

  plugins: [
    new VueLoaderPlugin()
  ]
  // module: {
  //     loaders: [
  //         {
  //             test: /\.css$/,
  //             use: [ 'style-loader', 'css-loader' ]
  //         },
  //         {
  //             test: /\.vue$/,
  //             use: ['vue-loader']
  //         }
  //     ]
  // },

  // plugins: [
  //     new webpack.ProvidePlugin({
  //       $: 'jquery',
  //       jQuery: 'jquery',
  //       'window.jQuery': 'jquery',
  //       Popper: ['popper.js', 'default'],
  //     })
  // ],
  // devtool: 'inline-source-map'
};