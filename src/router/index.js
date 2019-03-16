import Vue from 'vue';
import Router from 'vue-router';
import BookList from '../components/BookList';
import BookListFilter from '../components/BookListFilter';
import LoginPage from '../components/LoginPage';
import AddBook from '../components/AddBook';
import UploadPic from '../components/UploadPic';
import AddLanguage from '../components/AddLanguage';
import AddPage from '../components/AddPage';
import BookPage from '../components/BookPage';
import UploadText from '../components/UploadText';
import UploadAudio from '../components/UploadAudio';


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
      path: '/uploadText',
      name: 'UploadText',
      component: UploadText
    },
    {
      path: '/uploadAudio',
      name: 'UploadAudio',
      component: UploadAudio
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
      path: '/bookpage/:book_id',
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
      path: '/uploadpic',
      name: 'UploadPic',
      component: UploadPic
  }
  ],
  mode: 'history'
});
