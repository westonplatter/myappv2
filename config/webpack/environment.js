const { environment } = require('@rails/webpacker')

const webpack = require('webpack')

environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  JQuery: 'jquery',
  jquery: 'jquery',
  'window.Tether': "tether",
  Popper: ['popper.js', 'default'], // for Bootstrap 4
}))

module.exports = environment
