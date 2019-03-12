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
  ],
  mode: 'history'
});
