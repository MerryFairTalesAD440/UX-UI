<template>
  <div id="app">
    <NavBar />
    <!-- <AddBook /> -->
    <!-- <BookList /> -->
    <router-view />
    <!-- <BookListFilter msg="Book List" /> -->
  </div>
</template>

<script>
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
  }
};
</script>

<style>

</style>
