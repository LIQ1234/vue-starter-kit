require("babel-register")({
  presets: ["env"]
});

module.exports = require("./graphql.js");
