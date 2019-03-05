import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
<<<<<<< HEAD
import router from './router'
=======
>>>>>>> d85d4bc16975c6efc2baadf290824914b6bb082a

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
