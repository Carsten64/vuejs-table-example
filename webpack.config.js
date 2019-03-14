var path = require('path')
var webpack = require('webpack')

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                  loaders: {
                    'less': 'vue-style-loader!css-loader!less-loader?indentedSyntax',
                  }
                  // other vue-loader options go here
                }
              }
        ]}

}