<template>
<div id="BookPage">
<b-container id="topPage">
    <div>
        <hr class="my-4">
        <b-jumbotron>

            <template slot="header">
                    <h1>Book Title: {{ bookId }}</h1>
                
                </template>
           
            <hr class="my-4">
                            
                                <b-btn variant="primary" b-link to="AddPage">Add Page</b-btn>
        
        <!-- <nav>
            <router-link to='/addpage'>Add Page</router-link>
        </nav> -->
       
        </b-jumbotron>
        <hr class="my-4">
        <h2><ul>List of Pages Beaneath Here</ul></h2>
        <hr class="my-4">
        
        
    </div>
</b-container>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'BookPage',
  data(){
    return {
        info: null,
        page: null,
        mypage:null,
        book: null,
        myId: null,
        myNumber: null
        // bookId: this.$route.params.book_id
      
      
    }
  },
  mounted(){
      this.myId = this.$route.query.id;
        axios
        .get('https://melanieoneboxfunctionsprint3.azurewebsites.net/v1/books/'+this.myId)
        .then(response => (this.book = response.data))
        .catch(error => (this.info = error))
  }
}

</script>