import { GraphQLInt as IntType } from "graphql";

export default {
  name: "HelloParamsType",
  description: "hello params type",
  fields: {
    page: {
      type: IntType,
      description: "页码",
      defaultValue: 1
    },
    currentSize: {
      type: IntType,
      description: "每页个数",
      defaultValue: 20
    }
  }
};
