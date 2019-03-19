import Vue from "vue";
import Router from "vue-router";
import BookList from "../components/BookList";
import BookListFilter from "../components/BookListFilter";
import LoginPage from "../components/LoginPage";
import AddBook from "../components/AddBook";
import UploadPic from "../components/UploadPic";
import AddLanguage from "../components/AddLanguage";
import AddPage from "../components/AddPage";
import BookPage from "../components/BookPage";
import UploadText from "../components/UploadText";
import UploadAudio from "../components/UploadAudio";
import mekone from "../components/mekone";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "LoginPage",
      component: LoginPage
    },
    {
      path: "/addBook",
      name: "AddBook",
      component: AddBook
    },
    {
      path: "/uploadText",
      name: "UploadText",
      component: UploadText
    },
    {
      path: "/uploadAudio",
      name: "UploadAudio",
      component: UploadAudio
    },
    {
      path: "/BookList",
      name: "BookList",
      component: BookList
    },
    {
      path: "/bookListFilter",
      name: "BookListFilter",
      component: BookListFilter
    },
    {
      path: "/BookPage",
      name: "BookPage",
      component: BookPage
    },
    {
      path: "/AddPage",
      name: "AddPage",
      component: AddPage
    },
    {
      path: "/addlanguage",
      name: "AddLanguage",
      component: AddLanguage
    },
    {
      path: "/uploadpic",
      name: "UploadPic",
      component: UploadPic
    },
    {
    path: "/mekone",
      name: "mekone",
      component: mekone
    }
  ],
  mode: "history"
});
