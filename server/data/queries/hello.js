// import fetch from "node-fetch";
// import { stringify } from "qs";
// import awaitWrap from "utils/promise";
// import config from "config";
import { GraphQLString as StringType } from "graphql";
// import { post, get } from "../../utils/request";
import config from "../../../src/config";

const hello = {
  name: "hello",
  description: "a hello world demo",
  type: StringType,
  resolve(parentValue, args, request) {
    return "hello world!";
  }
};

export default hello;
