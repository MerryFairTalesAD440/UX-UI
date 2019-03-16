<template>
  <div id="app">
    <NavBar />
    <router-view />
    <!-- <BookListFilter msg="Book List" /> -->
  </div>
</template>

<script>
import BookListFilter from "./components/BookListFilter.vue";
import NavBar from "./components/NavBar.vue";
import BookList from "./components/BookList.vue";
import LoginPage from './components/LoginPage';
import AddBook from './components/AddBook';
import UploadPic from './components/UploadPic';
import AddLanguage from './components/AddLanguage';
import AddPage from './components/AddPage';
import BookPage from './components/BookPage';
import UploadText from './components/UploadText';
import UploadAudio from './components/UploadAudio';




export default {
  name: "app",
  components: {
    BookListFilter,
    NavBar,
    BookList,
    AddPage,
    UploadPic,
    UploadAudio,
    UploadText,
    AddBook,
    AddLanguage,
    BookPage,
    LoginPage
  }
};
</script>

<style>

</style>
