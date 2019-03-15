<template>

    <div id="BookList">
    {{$session.get('myId')}}

   <!-- main content container     -->
                    <b-container id="topPage" border-variant="dark">
                        <b-row>
                            <b-col>
                            <!-- heading -->    
                            <div>
                            <hr class="my-4">
                            <b-jumbotron>
                                <template slot="header">
                                    Admin Portal
                                </template>
                                <hr class="my-4">
                            
                                <b-btn variant="primary" b-link to="AddBook">Add New Book</b-btn>
                                            
                            </b-jumbotron>
                            </div>
                            <!-- end heading -->
        
                            <!-- Cards to Display Books(getBooks) -->
                            <!-- <div v-for="book in bookList" :key="book.id" > -->
                                <div v-for="(book, index) in bookList" :key="book.id" >
                                <b-card >
                                    <h2 class="card-text">Title: {{ book.title }}</h2>
                                    <h5 class="card-text">Author: {{ book.author }}</h5>
                                    <h6 class="card-text">
                                        Description: {{book.description}}
                                    </h6>

                                    <div class="mt-3">
                            
                                        <b-button-group>
                                        <b-button variant="primary" v-on:click="gotopage(index)">Manage Book</b-button>
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
                            <!-- End Book Cards -->
                            </b-col>
                        </b-row>

                        <!-- Back to the Top(VueScrollTo) -->
                        <a href="#" v-scroll-to="'#topPage'"><b>Back to the Top</b></a>
                        <!-- <b-btn href="#" v-scroll-to="'#topPage'" variant="info">Back to the Top</b-btn> -->
                        <hr class="my-4">
                        <!-- End of Scroll To -->
                        <hr class="my-4">

                    </b-container>
                    
                    <!-- End Main Content Container -->
                </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import VueSession from 'vue-session';
Vue.use(VueSession);

export default {
  name:'BookList',
  data(){
    return {
      bookList: [],
      myId: null
      
    }
  },
   mounted () {
    // var self = this
    axios
        .get('https://ad440-dev-function.azurewebsites.net/v1/books')
        .then(response => (this.bookList = response.data))
        // .then(function (response) {
        //     self.bookList = response.data
        //     console.log('Data: ', response.data)
        // })
},
    methods:{
        gotopage(index){
               this.$router.push({ name: 'BookPage', query: { id: this.bookList[index].id } })
           },

        deleteBook(book) {
            const url = `https://ad440-dev-function.azurewebsites.net/v1/books/${book.id}`;
            return axios.delete(url,book);
                // axios.delete('https://merry-fairy-tales.azurewebsites.net/v1/books'+ book.id)
                // .then(response => (this.bookList = response.data))
                // .then(response => (this.bookList = response.data){
                // this.result.splice(id, 1)
                // console.log(this.result);
                }
            }
    }

</script>
