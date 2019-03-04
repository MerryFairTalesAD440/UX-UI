import Vue from 'vue';
import Router from 'vue-router';
import BookList from '@/components/BookList';
import AddBook from '@/components/AddBook';
import UploadFile from '@/components/UploadFile';
import BookListFilter from '@/components/BookListFilter';

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
    },
    {
      path: '/uploadFile',
      name: 'UploadFile',
      component: UploadFile
    },
    {
      path: '/bookListFilter',
      name: 'BookListFilter',
      component: BookListFilter
    }
  ]
});