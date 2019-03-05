<template>
  <div id="app">
    <NavBar />
<<<<<<< HEAD
    <router-view />
=======
    <BookList />
>>>>>>> d85d4bc16975c6efc2baadf290824914b6bb082a
    <!-- <BookListFilter msg="Book List" /> -->
  </div>
</template>

<script>
import BookListFilter from "./components/BookListFilter.vue";
import NavBar from "./components/NavBar.vue";
import BookList from "./components/BookList.vue";
<<<<<<< HEAD
import AddBook from "./components/AddBook.vue";
import UploadFile from "./components/UploadFile.vue";
=======
>>>>>>> d85d4bc16975c6efc2baadf290824914b6bb082a

export default {
  name: "app",
  components: {
    BookListFilter,
    NavBar,
<<<<<<< HEAD
    BookList,
    AddBook,
    UploadFile
=======
    BookList
>>>>>>> d85d4bc16975c6efc2baadf290824914b6bb082a
  }
};
</script>

<style>

</style>
