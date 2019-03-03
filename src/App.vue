<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <!-- <BookList /> -->
    <!-- <BookListFilter msg="Book List" /> -->
  </div>
</template>

<script>
// import BookListFilter from "./components/BookListFilter.vue";
// import BookList from "./components/BookList.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
   components: {
         NavBar
  //   BookListFilter,
  //   BookList
  }
};
</script>

<style>

</style>
