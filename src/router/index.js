import Vue from 'vue';
import Router from 'vue-router';
import BookList from '@/components/BookList';
import AddBook from '@/components/AddBook';
import UploadFile from '@/components/UploadFile';
import BookListFilter from '@/components/BookListFilter';
import BookPage from '@/components/BookPage';
import AddPage from '@/components/AddPage';
import AddLanguage from '@/components/AddLanguage';
import AddImage from '@/components/AddImage';
import Login from '@/components/Login';

Vue.use(Router);
 
export default new Router({
  routes:[
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
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
    },
    {
      path: '/bookpage',
      name: 'book_page',
      component: BookPage
  },
  {
      path: '/addpage',
      name: 'add_page',
      component: AddPage
  },
  {
      path: '/addlanguage',
      name: 'language_page',
      component: AddLanguage
  },
  {
      path: '/addimage',
      name: 'image_page',
      component: AddImage
  }
  ]
});
