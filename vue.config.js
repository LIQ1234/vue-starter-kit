/* eslint-disable max-len */
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
  }
};
