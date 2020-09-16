import { GraphQLObjectType as ObjectType } from "graphql";

const mutation = new ObjectType({
  name: "Mutation",
  description: "The mutation root of vue-starter-kit GraphQL interface.",
  fields: {}
});

export default mutation;
