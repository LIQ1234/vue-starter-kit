import {
  GraphQLObjectType as ObjectType,
  GraphQLList as ListType,
  GraphQLInt as IntType,
  GraphQLID as ID
} from "graphql";

const HelloListType = new ObjectType({
  name: "HelloListType",
  description: "hello list type",
  fields: {
    id: {
      type: ID,
      description: "id"
    },
    audit_status: {
      type: IntType,
      description: "编辑状态"
    }
  }
});

const HelloType = new ObjectType({
  name: "HelloType",
  description: "hello type",
  fields: {
    page: {
      type: IntType,
      description: "页码"
    },
    pageSize: {
      type: IntType,
      description: "每页个数",
      resolve: ({ page_count }) => page_count
    },
    total: {
      type: IntType,
      description: "总数",
      resolve: ({ total_count }) => total_count
    },
    total_page: {
      type: IntType,
      description: "总共页数"
    },
    list: {
      type: new ListType(HelloListType),
      description: "列表"
    }
  }
});

export default HelloType;
