<template>
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
                            
                                <b-btn variant="primary" b-link to="InsertBook">Insert New Book</b-btn>
                                <br /><br />
                                <b-btn b-link to="UploadPic">UploadPic</b-btn>
                                <br /><br />
                                <b-btn b-link to="UploadAudio">UploadAudio</b-btn>
                                <br /><br />
                                <b-btn b-link to="UploadText">Upload Text</b-btn>
                                            
                            </b-jumbotron>
                            </div>
                            <!-- end heading -->
        
                            <!-- Cards to Display Books(getBooks) -->
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
                                        <b-button variant="danger" b-link to="#">Delete Book</b-button>
                                        
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
</template>

<script>
import axios from 'axios'
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
        .get('https://merry-fairy-tales.azurewebsites.net/v1/books')
        .then(response => (this.bookList = response.data))
        // .then(function (response) {
        //     self.bookList = response.data
        //     console.log('Data: ', response.data)
        // })
    },
    methods: {
        gotopage(index){
            this.$router.push({ name: 'BookDetails', query: { id: this.bookList[index].id } })
        }
    }
}
</script>
