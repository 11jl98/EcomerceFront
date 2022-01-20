import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueRouter from "vue-router";
import VueToast from "vue-toast-notification";
import VueMask from "v-mask";
import store from "./store"

import "vue-toast-notification/dist/theme-sugar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(VueToast);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);
Vue.use(VueMask);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
