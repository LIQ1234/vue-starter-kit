/* eslint-disable max-len */
import fetch from "node-fetch";
import { stringify } from "qs";
import awaitWrap from "../../utils/promise";
import config from "../config";
import HelloType from "../types/hello";
import HelloParamsType from "../types/hello/params";

const hello = {
  description: "a hello world demo",
  type: HelloType,
  args: HelloParamsType.fields,
  async resolve(root, { page, currentSize }, request) {
    const { VUE_APP_PREFIX_FOUR } = config.api;
    console.info(page, currentSize);
    const url = `${VUE_APP_PREFIX_FOUR}/shelf_template/listSon?page=${page}&currentSize=${currentSize}`;

    const [error, response] = await awaitWrap(
      fetch(url, {
        headers: {
          "Account-Token":
            request.headers["account-token"] ||
            "4388c944d9f2001fda56f02d1d1e9990"
        }
      })
    );

    if (error) {
      return null;
    }

    const { code, data } = await response.json();

    return +code === 200 ? data : "";
  }
};

export default hello;
