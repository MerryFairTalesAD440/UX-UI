import Vue from 'vue';
import Router from 'vue-router';
import BookList from '@/components/BookList';
import AddBook from '@/components/AddBook'

Vue.use(Router);

export default new Router({
  routes:[
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/addBook',
      name: 'AddBook',
      component: AddBook
    }
  ]
});