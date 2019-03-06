<template>
  <div id="app">
    <!-- NavBar -->
                    <b-navbar toggleable="md" type="dark" variant="info">
                        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                            <b-navbar-brand href="/">Merry Fairy Tales</b-navbar-brand>
                                <b-collapse is-nav id="nav_collapse">
                                    <b-navbar-nav>
                                        <b-nav-item class="big" b-link to="/">Home</b-nav-item>
                                        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
                                    </b-navbar-nav>

                                    <b-navbar-nav>
                                        <b-nav-item class="big" b-link to="/BookList">BookList</b-nav-item>
                                        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
                                    </b-navbar-nav>

                                    <b-navbar-nav>
                                        <b-nav-item class="big" b-link to="/BookListFilter">BookListFilter</b-nav-item>
                                        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
                                    </b-navbar-nav>

                                    <b-navbar-nav>
                                        <b-nav-item class="big" b-link to="/AddBook">AddBook</b-nav-item>
                                        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
                                    </b-navbar-nav>

                                    <b-navbar-nav>
                                        <b-nav-item class="big" b-link to="/UploadFile">UploadFile</b-nav-item>
                                        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
                                    </b-navbar-nav>
                                  
                                    <!-- Right aligned nav items -->
                                    <b-navbar-nav class="ml-auto">
                                        <b-nav-form>
                                            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search Books"/>
                                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                                        </b-nav-form>
                                  
                                        <b-nav-item-dropdown right>
                                          <!-- Using button-content slot -->
                                          <template slot="button-content">
                                            <em>User</em>
                                          </template>
                                          <b-dropdown-item href="#">Profile</b-dropdown-item>
                                          <b-dropdown-item href="#">Signout</b-dropdown-item>
                                        </b-nav-item-dropdown>
                                    </b-navbar-nav>
                                </b-collapse>
                    </b-navbar>
<!-- End NavBar -->
    <router-view></router-view>
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
    NavBar,
    BookListFilter,
    BookList,
    AddBook,
    UploadFile
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .big
  {
    font-size:18px;
  }
</style>
