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
import InsertBook from "./components/InsertBook.vue";
import BookDetails from "./components/BookDetails.vue";
import EditBook from "./components/EditBook.vue";
import UploadPic from "./components/UploadPic.vue";
import UploadAudio from "./components/UploadAudio.vue";
import UploadText from "./components/UploadText.vue";



export default {
  name: "app",
  components: {
    BookListFilter,
    NavBar,
    BookList,
    InsertBook,
    BookDetails,
    EditBook,
    UploadPic,
    UploadAudio,
    UploadText
  }
};
</script>

<style>

</style>
