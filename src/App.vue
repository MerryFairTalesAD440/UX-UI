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




export default {
  name: "app",
  components: {
    BookListFilter,
    BookList,
    NavBar
  
  }
};
</script>

<style>

</style>
