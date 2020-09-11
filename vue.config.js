/* eslint-disable max-len */
const path = require("path");
let { env } = process;

module.exports = {
  assetsDir: "new", // FIXME
  runtimeCompiler: true,
  pluginOptions: {
    i18n: {
      locale: "cn",
      fallbackLocale: "cn",
      localeDir: "locales",
      enableInSFC: true
    }
  },
  css: {},
  devServer: {
    port: env.POST,
    open: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: false
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: path.join(__dirname, "src/components"),
        router: path.join(__dirname, "src/router")
      }
    }
  }
};
