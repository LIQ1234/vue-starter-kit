import schema from "./data/schema";
let express = require("express");
let { graphqlHTTP } = require("express-graphql");
let dotenv = require("dotenv");
let path = require("path");
dotenv.config({ path: path.join(__dirname, "../.env.production.local") });
dotenv.config({ path: path.join(__dirname, "../.env.production") });
dotenv.config({ path: path.join(__dirname, "../.env") });

// console.info(process.env);

// The root provides a resolver function for each API endpoint
// let root = {
//   hello: () => {
//     return "Hello world!";
//   }
// };

let app = express();

app.all("*", function(req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() === "options") res.send(200);
  //让options尝试请求快速结束
  else next();
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true
  })
);

app.listen(4000, (req, res) => {
  console.info("----------", req);
});

console.info("Running a GraphQL API server at http://localhost:4000/graphql");
