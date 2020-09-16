import { GraphQLObjectType as ObjectType } from "graphql";
import hello from "./hello";

const query = new ObjectType({
  name: "Query",
  description: "The query root of vue-starter-kit GraphQL interface.",
  fields: {
    hello
  }
});

export default query;
