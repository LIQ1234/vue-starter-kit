import { GraphQLSchema as Schema } from "graphql";
import query from "./queries";
import mutation from "./mutations";

const schema = new Schema({
  query
  // mutation
});

export default schema;
