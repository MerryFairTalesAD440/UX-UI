<template>
  <div id="BookList">
    {{ $session.get("myId") }}
      
    
    <!-- main content container     -->
    <b-container bg-info id="topPage" border-variant="dark">
      <b-row>
        <b-col>
          <!-- heading -->
          <div>
            <hr class="my-4" />
            <b-jumbotron class="jumbotron" bg-variant="info" text-variant="white" border-variant="dark">
              <template slot="header">
                Admin Portal
              </template>
              <hr class="my-4" />

              <b-btn variant="primary" b-link to="AddBook">Add New Book</b-btn>
            </b-jumbotron>
          </div>
          <!-- end heading -->

            <!-- Cards to Display Books(getBooks) -->
                            <!-- <div v-for="book in bookList" :key="book.id" > -->
                                <b-form-input v-model="search" placeholder="Search by Author Name or Book Title"/>
                                <br>
                                <div v-if="bookList">
                                <div v-for="(book, index) in filteredBook" :key="book.id" >
                                <b-card bg-variant="info" border-variant="dark" text-variant="white">
                                    <h2 class="card-text">Title: {{ book.title }}</h2>
                                    <h5 class="card-text">Author: {{ book.author }}</h5>
                                    <h6 class="card-text">
                                        Description: {{book.description}}
                                    </h6>

                                    <div class="mt-3">
                            
                                        <b-button-group>
                                        <b-button variant="primary" v-on:click="gotopage(index)">Manage Book</b-button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <b-button variant="danger" v-on:click="deleteBook(book)">Delete Book</b-button>
                                        
                                        </b-button-group>
                                    </div>
                                    <!-- <b-btn variant="info" b-link to="book_page">Edit Book</b-btn>
                                    <b-btn variant="info" b-link to="#">Delete Book</b-btn> -->
            <!-- <a href="#"
                                       class="card-link">Edit Book</a>
                                    <b-link href="/bookpage"
                                            class="card-link">Delete Book</b-link> -->
                                </b-card>
                                <hr class="my-4">
                            </div>
                                </div>
                            <!-- End Book Cards -->
        </b-col>
      </b-row>

      <!-- Back to the Top(VueScrollTo) -->
      <a href="#" v-scroll-to="'#topPage'"><b>Back to the Top</b></a>
      <!-- <b-btn href="#" v-scroll-to="'#topPage'" variant="info">Back to the Top</b-btn> -->
      <hr class="my-4" />
      <!-- End of Scroll To -->
      <hr class="my-4" />
    </b-container>
  </div>

  <!-- End Main Content Container -->
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueSession from "vue-session";


Vue.use(VueSession);
export default {
  name: "BookList",
  data() {
    return {
      infos: null,
      search: '',
      bookList: []
      //myNumber: null
    };
  },
  mounted() {
    // var self = this
    axios
      //.get('https://merry-fairy-tales.azurewebsites.net/v1/books')
      .get("https://ad440-dev-function.azurewebsites.net/v1/books")
      .then(response => (this.bookList = response.data))
      .catch(error => (this.infos = error));
  },
  methods: {
    gotopage: function(index) {
      //this.myNumber = this.bookList[index].pages[index].number;
      this.$router.push({
        name: "BookPage",
        query: { id: this.bookList[index].id }
      });
    },

    deleteBook: function(book) {
      const url = `https://ad440-dev-function.azurewebsites.net/v1/books/${book.id}`;
      return axios.delete(url, book)
    //   .then(response =>(this.$router.go()))
    }
  },
computed: {
            filteredBook: function () {
                return this.bookList.filter((book) => {
                    return book.title.toLowerCase().match(this.search.toLowerCase()) || book.author.toLowerCase().match(this.search.toLowerCase())
                })
            }
}
};
</script>
<style>

</style>
