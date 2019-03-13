import Vue from 'vue';
import Router from 'vue-router';
import BookList from '../components/BookList';
import BookListFilter from '../components/BookListFilter';
import LoginPage from '../components/LoginPage';
import AddBook from '../components/AddBook';
import AddImage from '../components/AddImage';
import AddLanguage from '../components/AddLanguage';
import AddPage from '../components/AddPage';
import BookPage from '../components/BookPage';
import UploadFile from '../components/UploadFile';


Vue.use(Router);
 
export default new Router({
  routes:[
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
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
      path: '/bookList',
      name: 'BookList',
      component: BookList
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
  ],
  mode: 'history'
});
