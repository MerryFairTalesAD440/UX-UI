<template>
  <div id="app">
    <NavBar />
    <BookListFilter msg="Book List" />
  </div>
</template>

<script>
import BookListFilter from "./components/BookListFilter.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
  components: {
    BookListFilter,
    NavBar
  }
};
</script>

<style>

</style>
