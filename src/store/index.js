import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    widthCards: "80%",
  },
  actions,
  mutations,
});

export default store;
