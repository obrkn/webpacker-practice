const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/js/app.js',
    search: './src/js/search.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].bundle.js',
  },
};