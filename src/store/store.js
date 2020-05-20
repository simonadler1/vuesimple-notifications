import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import * as notifications from "@/store/modules/notifications.js";

export default new Vuex.Store({
  modules: {
    notifications,
  },
});
