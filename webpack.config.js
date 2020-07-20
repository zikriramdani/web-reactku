const path = require('path');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: "babel", 
        exclude: /node_modules/ 
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader"
      }
    ]
  }
}