if (process.env.BROWSER) {
  throw new Error(
    "Do not import `config.js` from inside the client-side code."
  );
}

let VUE_APP_PREFIX_FOUR = "https://kvcm-dev.kkguan.com/api";

if (process.env.NODE_ENV === "development") {
  VUE_APP_PREFIX_FOUR = "http://192.168.30.162:8080";
}

module.exports = {
  api: {
    VUE_APP_PREFIX_FOUR
  }
};
