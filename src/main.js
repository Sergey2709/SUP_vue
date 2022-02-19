import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import store from "./store/store";
import Vuelidate from "vuelidate";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import PhoneMaskInput from "vue-phone-mask-input";
import VueRouter from 'vue-router';
import router from "./router/index";
import VueSocialSharing from "vue-social-sharing";
import loader from "vue-ui-preloader";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";


Vue.component("v-select", vSelect);
Vue.use(loader);
Vue.use(VueSocialSharing);
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB4YPwVO01xuv7xSAkQ6HWjbnDY1f9HqNM",
    libraries: "places",
  },
});

new Vue({
  render: (h) => h(App),
  store,
  PhoneMaskInput,
  router,
}).$mount("#app");
