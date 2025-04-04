const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "transpiled", "index.js"),
  // src/index.js -> não é uma boa pois o file de um sistema pode ser diferente
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  mode: "development", // Ensure development mode is set
};
