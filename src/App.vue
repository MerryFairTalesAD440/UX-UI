<template>
  <div id="app">
    <NavBar v-if="showNav"/>
    <router-view />
    <!-- <BookListFilter msg="Book List" /> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar
  },
  computed:{
    showNav(){
      return this.$route.name !== 'LoginPage';
    }

  }
};
</script>

<style></style>
