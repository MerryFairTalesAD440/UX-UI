<template>
  <div id="app">
    <NavBar />
    <BookList />
    <!-- <BookListFilter msg="Book List" /> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import BookList from "./components/BookList.vue";

export default {
  name: "app",
  components: {
    NavBar,
    BookList
  }
};
</script>

<style></style>
