import Vue from "vue";
import Vuex from "vuex";
import members from "./members/index.js";
import countries from "./countries/index.js";
import errors from "./errors/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    members,
    countries,
    errors,
  },
});
