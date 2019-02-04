<template>
  <div id="app">
    <BookListFilter msg="Book List" />
  </div>
</template>

<script>
import BookListFilter from "./components/BookList_Filter.vue";

export default {
  name: "app",
  components: {
    BookListFilter
  }
};
</script>

<style>

</style>
