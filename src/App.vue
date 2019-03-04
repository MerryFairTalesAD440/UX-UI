<template>
  <div id="app">
    <NavBar />
<<<<<<< HEAD
    <router-view />
=======
    <router-view/>
    <!-- <BookList /> -->
>>>>>>> f9f0fb669c679d1493107bbbcc96977c7b8d57de
    <!-- <BookListFilter msg="Book List" /> -->
  </div>
</template>

<script>
<<<<<<< HEAD
import BookListFilter from "./components/BookListFilter.vue";
import NavBar from "./components/NavBar.vue";
import BookList from "./components/BookList.vue";
import AddBook from "./components/AddBook.vue";
import UploadFile from "./components/UploadFile.vue";

export default {
  name: "app",
  components: {
    BookListFilter,
    NavBar,
    BookList,
    AddBook,
    UploadFile
=======
// import BookListFilter from "./components/BookListFilter.vue";
// import BookList from "./components/BookList.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
   components: {
         NavBar
  //   BookListFilter,
  //   BookList
>>>>>>> f9f0fb669c679d1493107bbbcc96977c7b8d57de
  }
};
</script>

<style>

</style>
