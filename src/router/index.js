// import Vue from 'vue';
// import Router from 'vue-router';
// import BookList from '@/components/BookList';
// import AddBook from '@/components/AddBook';
// import UploadFile from '@/components/UploadFile';
// import BookListFilter from '@/components/BookListFilter';
// import BookPage from '@/components/BookPage';
// import AddPage from '@/components/AddPage';
// import AddLanguage from '@/components/AddLanguage';
// import AddImage from '@/components/AddImage';
// import LoginPage from '@/components/LoginPage';
import Vue from 'vue';
import Router from 'vue-router';
import InsertBook from '../components/InsertBook';
import BookDetails from '../components/BookDetails';
import BookList from '../components/BookList';
import BookListFilter from '../components/BookListFilter';
import LoginPage from '../components/LoginPage';

Vue.use(Router);
 
export default new Router({
  routes:[
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
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
      path: '/bookList',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/bookListFilter',
      name: 'BookListFilter',
      component: BookListFilter
    },
  ]
});
