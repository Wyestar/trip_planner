module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }
}

// the starting point for our program
// the absolute path for the directory where we want the output to be placed
// the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
