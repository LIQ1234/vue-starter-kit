import fetch from "node-fetch";
import { stringify } from "qs";
import { GraphQLString as StringType, GraphQLInt as IntType } from "graphql";
import awaitWrap from "../../utils/promise";
import config from "../config";
import HelloType from "../types/hello";

const hello = {
  description: "a hello world demo",
  type: HelloType,
  async resolve(root, params, request) {
    const { VUE_APP_PREFIX_FOUR } = config.api;
    const url = `${VUE_APP_PREFIX_FOUR}/shelf_template/listSon`;

    const [error, response] = await awaitWrap(
      fetch(url, {
        headers: {
          // ...request.headers,
          "Account-Token":
            request.headers["account-token"] ||
            "680f974dc49e2a527aa73d079950f748"
        }
      })
    );

    if (error) {
      return null;
    }

    const { code, data } = await response.json();
    const a = { a: 1, b: 2, c: 3 };
    // console.info({ ...a });
    return +code === 200 ? data : "";
  }
};

export default hello;
