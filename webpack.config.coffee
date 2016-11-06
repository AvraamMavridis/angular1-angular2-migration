module.exports =
  context: __dirname + '/src'
  entry: ['webpack/hot/dev-server', './index.coffee']

  output:
    path: __dirname + '/app'
    filename: 'bundle.js'

  module:
    loaders: [
        { test: /\.coffee$/, loader: "coffee-loader" }
        { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" }
        { test: /\.tsx?$/, loader: 'ts-loader' }
    ]

  resolve:
    # you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee', '.ts', '.tsx' ]
