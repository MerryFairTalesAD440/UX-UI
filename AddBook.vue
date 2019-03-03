<template>


<div class="hero is-fullheight is-info is-bold">
    <div class="hero-body">
    <div class="container">
    
      <h1 class="title has-text-centered">New Book Form</h1>
      <div class="box">
    
        <!-- submission form ===================== -->
        <!-- <form id="submisson-form" @submit.prevent="processForm"> -->
            <form id="getSas" @submit.prevent="processForm">

          <!-- name -->
          <div class="field">
            <label class="label">Title</label>
            <input type="text" class="input" name="title"  v-model="title">
          </div>

        <!-- description -->
        <div class="field">
          <label class="label">Description</label>
          <input type="text" class="input" name="description"  v-model="description">
        </div>
    
          <!-- author -->
          <div class="field">
            <label class="label">Author</label>
            <input type="author" class="input" name="author"  v-model="author">
          </div>
    
          <!-- Add book button -->
          <div class="field has-text-right">
            <button type="submit" class="button">Add Book</button>
          </div>
        </form>
    
      </div>
    
    </div>
    </div>
    </div>




</template>



<script>
import axios from 'axios'

export default {
name: 'AddBook',

     data() {
    return {
      title: '',
      description: '',
      author: ''
         }
    },
   
 mounted () {
   var self = this
             
          data = { title: this.title, description: this.description, author: this.author }
          const url = 'https://melanieoneboxfunctionsprint2.azurewebsites.net/v1/books';

          axios.post(url, data)  
 
 
          .then(response => {
            
            alert('Book information submitted');

            var newId = response.data;
            console.log(newId);

            data.id= newId
            console.log(data);

           })

        console.log({ title: this.title, description: this.description, author: this.author });
        alert('Processing!');
      }
        
  }
  
</script>