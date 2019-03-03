import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import NavBar from "./components/NavBar.vue";
import BookList from "./components/BookList.vue";
import AddBook from "./components/AddBook.vue";
import BookListFilter from "./components/BookListFilter.vue";
import UploadFile from "./components//UploadFile.vue";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: NavBar },
  { path: '/BookListFilter', component: BookListFilter },
  { path: '/BookList', component: BookList },
  { path: '/AddBook', component: AddBook },
  { path: '/UploadFile', component: UploadFile }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
