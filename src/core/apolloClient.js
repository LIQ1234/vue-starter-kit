/* eslint-disable max-len */
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { Message } from "element-ui";

// 与 API 的 HTTP 连接
const httpLink = createHttpLink({
  // 你需要在这里使用绝对路径
  uri: "http://localhost:4000/graphql"
  // credentials: "include"
});

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "Account-Token": "680f974dc49e2a527aa73d079950f748" || null
    }
  }); //request拦截器

  return forward(operation).map(response => {
    return response;
  }); //response拦截器，但是此处并不能对错误响应进行拦截
});

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
  let errorMsg = "";
  if (graphQLErrors) {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.info(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
        errorMsg = message;
      });
  }

  if (!!response && response.errors !== undefined && response.errors.length) {
    errorMsg = !response.errors[0].message
      ? "服务器错误"
      : response.errors[0].message;
  }
  if (networkError) {
    errorMsg = networkError.message;
    if (networkError.result !== undefined) {
      errorMsg =
        networkError.result.success === false
          ? networkError.result.message
          : networkError.result.error;
    }
  }

  if (errorMsg) {
    Message.error(errorMsg);
  }
});

const authLink = middlewareLink.concat(httpLink);

// 缓存实现
const cache = new InMemoryCache();

// 创建 apollo 客户端
const apolloClient = new ApolloClient({
  link: errorLink.concat(authLink),
  cache
});

export { apolloClient };
