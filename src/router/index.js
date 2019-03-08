import Vue from 'vue';
import Router from 'vue-router';
import InsertBook from '../components/InsertBook';
import BookDetails from '../components/BookDetails';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import UploadFile from '../components/UploadFile';
import BookListFilter from '../components/BookListFilter';
import BookPage from '../components/BookPage';
import AddPage from '../components/AddPage';
import AddLanguage from '../components/AddLanguage';
import AddImage from '../components/AddImage';

Vue.use(Router);
 
export default new Router({
  routes:[
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/InsertBook',
      name: 'Insertbook',
      component: InsertBook
    },
    {
      path: '/BookDetails',
      name: 'BookDetails',
      component: BookDetails
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
  ],
  mode: 'history'
});
