import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import { Message } from "element-ui";
import VueApollo from "vue-apollo";
import { apolloClient } from "core/apolloClient";
import App from "./App";
import router from "./router";
import store from "./store";
import "./utils/axios";
import "./plugins/element.js";

Vue.use(VueApollo);

Vue.use(VueCompositionApi);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false;
Vue.config.performance = process.env.NODE_ENV !== "production";
Vue.config.connectToDevTools = true;

window.addEventListener(
  "unhandledrejection",
  event => {
    let data = event.reason;
    /* 你可以在这里添加一些代码，以便检查
    event.promise 中的 promise 和
    event.reason 中的 rejection 原因 */
    if (Object.prototype.toString.call(data) === "[object Error]") {
      console.error(data);
    } else if (data.message) {
      if (data.isWarning) {
        Message.warning(data.message);
      } else {
        Message.error(data.message);
      }
    }

    event.preventDefault();
  },
  false
);

Vue.config.errorHandler = function(err) {
  if (!err) return;
  /* 你可以在这里添加一些代码，以便检查
  event.promise 中的 promise 和
   event.reason 中的 rejection 原因 */
  if (Object.prototype.toString.call(err) === "[object Error]") {
    console.error(err);
  } else if (err.message) {
    if (err.isWarning) {
      Message.warning(err.message);
    } else {
      Message.error(err.message);
    }
  }
};

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
