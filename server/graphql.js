import schema from "../src/data/schema";
let express = require("express");
let { graphqlHTTP } = require("express-graphql");
let dotenv = require("dotenv");
let path = require("path");
dotenv.config({ path: path.join(__dirname, "../.env.production.local") });
dotenv.config({ path: path.join(__dirname, "../.env.production") });
dotenv.config({ path: path.join(__dirname, "../.env") });

// console.info(process.env);

// The root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return "Hello world!";
  }
};

let app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true
  })
);

app.listen(4000);
console.info("Running a GraphQL API server at http://localhost:4000/graphql");
