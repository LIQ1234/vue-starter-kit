let express = require("express");
let path = require("path");
let app = express();
let R = require("ramda");
let dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../.env.production.local") });
dotenv.config({ path: path.join(__dirname, "../.env.production") });
dotenv.config({ path: path.join(__dirname, "../.env") });

// app.use(cors());
// const proxyMiddleware = require("http-proxy-middleware");
const history = require("connect-history-api-fallback");

function setCustomCacheControl(res, path) {
  let excludeReg = [/service-worker\.js$/, /index\.html$/];
  //不缓存的页面
  if (excludeReg.some(v => v.test(path))) {
    // Custom Cache-Control for HTML files
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
  }
}

const a = { a: 1, b: 2 };
// console.info({ ...a });

app.get("/config.js", (req, res) => {
  res.set("Content-type", "text/javascript");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.send(
    `window.CONFIG = ` +
      JSON.stringify(
        R.pickBy((v, k) => k.indexOf("VUE_APP_") === 0, process.env)
      )
  );
});

app.use(history());
app.use(
  express.static(path.join(__dirname, "../dist"), {
    setHeaders: setCustomCacheControl
  })
);

app.listen(process.env.POST, "0.0.0.0", function(err) {
  if (err) {
    console.info(err);
    return;
  }
  console.info(`访问链接:http://localhost:${process.env.POST} --服务已启动`);
});
