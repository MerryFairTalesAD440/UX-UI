<template>

<b-container id="topPage" border-variant="dark">
  <hr class="my-4">
        <b-jumbotron>
            <template slot="header">
                Add Book Form
            </template>
            <hr class="my-4">
          </b-jumbotron>
        <hr class="my-4">

    
        <!-- submission form ===================== -->
        <!-- <form id="submisson-form" @submit.prevent="processForm"> -->
            <b-form id="getSas" @submit.prevent="processForm">

          <!-- book title -->
          <!-- <div class="field">
            <label class="label">Title</label>
            <input type="text" class="input" name="title"  v-model="title">
          </div> -->
          <div>
            <b-form-input v-model="postTitle" type="text" placeholder="Enter Book Title" />
            <div class="mt-2">Value: {{ postTitle }}</div>
          </div>
          <hr class="my-4">

        <!-- author -->
        <!-- <div class="field">
          <label class="label">Description</label>
          <input type="text" class="input" name="description"  v-model="description">
        </div> -->
        <div>
            <b-form-input v-model="postAuthor" type="text" placeholder="Enter Book Author" />
            <div class="mt-2">Value: {{ postAuthor }}</div>
        </div>
        <hr class="my-4">
    
          <!-- description -->
          <!-- <div class="field">
            <label class="label">Author</label>
            <input type="author" class="input" name="author"  v-model="author">
          </div> -->
          <div>
            <b-form-input v-model="postDescription" type="text" placeholder="Enter Book Description" />
            <div class="mt-2">Value: {{ postDescription }}</div>
          </div>
          <hr class="my-4">
    
          <!-- Add book button -->
          <!-- <div class="field has-text-right">
            <button type="submit" class="button">Add Book</button>
          </div> -->
          <b-btn variant="primary" type="button" v-on:click="addBook()">Submit</b-btn>
        </b-form>
    
      


</b-container>

</template>



<script>
import axios from 'axios'

export default {
name: 'AddBook',

     data() {
    return {
      
      postTitle: '',
      postAuthor: '',
      postDescription: ''
         }
    },
   
 mounted () {

   
  //  var self = this
             
  //         data = { title: this.title, description: this.description, author: this.author }
  //         const url = 'https://melanieoneboxfunctionsprint3.azurewebsites.net/v1/books';

  //         axios.post(url, data)  
 
 
          // .then(response => {
            
            // alert('Book information submitted');

            // var newId = response.data;
            // console.log(newId);

            // data.id= newId
            // console.log(data);

  //          })

  //       console.log({ title: this.title, description: this.description, author: this.author });
  //       alert('Processing!');
      },
      methods:{
        addBook:function() {
          
           return axios.post('https://ad440-dev-function.azurewebsites.net/v1/books', {
    title: this.postTitle,
    author: this.postAuthor,
    description: this.postDescription
  }).then((response) => {
                alert('Book information submitted')

    //         var newId = response.data;
    //         console.log(newId);

    //         (this.postTitle,
    // this.postAuthor,
    // this.postDescription).id= newId
    //         console.log(this.postTitle,
    // this.postAuthor,
    // this.postDescription);

  })
  .catch((e) => {
    console.error(e)
  })
        }
      }
        
  }
  
</script>