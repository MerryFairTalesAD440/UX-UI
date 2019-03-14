import Vue from 'vue';
import Router from 'vue-router';
import InsertBook from '../components/InsertBook';
import BookDetails from '../components/BookDetails';
import BookList from '../components/BookList';
import BookListFilter from '../components/BookListFilter';
import LoginPage from '../components/LoginPage';
import EditBook from '../components/EditBook';
import UploadPic from '../components/UploadPic';
import UploadAudio from '../components/UploadAudio';
import UploadText from '../components/UploadText';

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
      path: '/EditBook',
      name: 'EditBook',
      component: EditBook
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
      path: '/UploadPic',
      name: 'UploadPic',
      component: UploadPic
    },
    {
      path: '/UploadAudio',
      name: 'UploadAudio',
      component: UploadAudio
    },
    {
      path: '/UploadText',
      name: 'UploadText',
      component: UploadText
    }
  ],
  mode: 'history'
});
