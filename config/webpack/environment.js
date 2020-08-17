const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const vuetify = require('./loaders/vuetify')
const { VuetifyLoaderPlugin } = require('vuetify-loader')

environment.plugins.prepend('VuetifyLoaderPlugin', new VuetifyLoaderPlugin())
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

// Get the actual sass-loader config
const sassLoader = environment.loaders.get('sass')
sassLoader.test = /\.(scss|sass)(\.erb)$/i
const sassLoaderConfig = sassLoader.use.find(function(element) {
  return element.loader == 'sass-loader'
})

// Use Dart-implementation of Sass (default is node-sass)
const options = sassLoaderConfig.options
options.implementation = require('sass')

environment.loaders.append('vuetify', vuetify);

module.exports = environment
