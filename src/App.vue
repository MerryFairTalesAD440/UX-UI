<template>
  <div id="app">
    <BookListFilter msg="Book List" />
  </div>
</template>

<script>
import BookListFilter from "./components/BookListFilter.vue";

export default {
  name: "app",
  components: {
    BookListFilter
  }
};
</script>

<style>

</style>
