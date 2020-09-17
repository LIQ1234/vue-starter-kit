import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType
} from "graphql";

export default new ObjectType({
  name: "HelloParamsType",
  description: "hello params type",
  fields: {
    page: {
      type: IntType,
      description: "页码"
    },
    currentSize: {
      type: IntType,
      description: "每页个数"
    }
  }
});
