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
      path: '/AddBook',
      name: 'AddBook',
      component: AddBook
    },
    {
      path: '/UploadText',
      name: 'UploadText',
      component: UploadText
    },
    {
      path: '/UploadAudio',
      name: 'UploadAudio',
      component: UploadAudio
    },
    {
      path: '/BookList',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/BookListFilter',
      name: 'BookListFilter',
      component: BookListFilter
    },
    {
      path: '/Bookpage',
      name: 'BookPage',
      component: BookPage
  },
  {
      path: '/AddPage',
      name: 'AddPage',
      component: AddPage
  },
  {
      path: '/AddLanguage',
      name: 'AddLanguage',
      component: AddLanguage
  },
  {
      path: '/UploadPic',
      name: 'UploadPic',
      component: UploadPic
  }
  ],
  mode: 'history'
});
