import Vue from "vue";
import App from "./App.vue";
import dragdrop from "./components/dragdrop.vue";
Vue.config.productionTip = false;

new dragdrop({
  render:h => h(dragdrop)
}).$mount("#drapdrop");

new Vue({
  render: h => h(App)
}).$mount("#app");
