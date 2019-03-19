<template>
  <div id="BookPage">
    <b-container id="topPage">
      <!-- id: {{ myId }} <br /><br />
      info: {{ info }} <br /><br />
      info: {{ myNumber }} -->
      <div>
        <hr class="my-4" />
        <b-jumbotron bg-variant="info" text-variant="white">
          <template slot="header">
            <h1>Book Title: {{ book.title }}</h1>
           
          </template>
          <!-- Titile : {{ book.title }}, Author : {{ book.author }} -->
          <hr class="my-4" />

          <b-btn variant="primary" v-on:click="created()">Add Page</b-btn>

          <!-- <nav>
            <router-link to='/addpage'>Add Page</router-link>
        </nav> -->
        </b-jumbotron>
        <hr class="my-4" />
         <h3>Author: {{ book.author }}</h3>
         <hr class="my-4" />
            <h4>cover_image: {{ book.cover_image }}</h4>
            <hr class="my-4" />
            <h4>Description: {{ book.description }}</h4>
            <hr class="my-4" />
        <h2>
          <ul>
            List of Pages Beaneath Here
          </ul>
        </h2>
        
        <hr class="my-4" />

        <div v-if="pages !== null">
          <div v-for="page in pages" :key="page.id">
            <div v-if="page !== null">
              <b-card>
                <p class="card-text">Page: {{ page.number }}</p>
                <p class="card-text">Page Text: {{page.text_url}}</p>
              </b-card>
            </div>
          </div>
        </div>

      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BookPage",
  data() {
    return {
      info: null,
      page: null,
      pages: [],
      mypage: null,
      book: null,
      myId: null,
      myNumber: null
    };
  },
  mounted() {
    this.myId = this.$route.query.id;
    axios
      .get(
        "https://ad440-dev-function.azurewebsites.net/v1/books/"+this.myId
      )
      .then(response => (this.book = response.data))
      .catch(error => (this.info = error));

    axios
      .get(
        "https://ad440-dev-function.azurewebsites.net/v1/books/"+this.myId+"/pages"
      )
      .then(response => (this.pages = response.data))
      .catch(error => (this.info = error));
  },
  methods: {
    created() {
      //if (this.book.pages[this.myNumber-1].image_url !== null) {
      //this.book.pages[this.myNumber-1].image_url = "https://ad440oneboxtempbb81.blob.core.windows.net/getsastoken/"+this.myFileNameA;
      var myUrl2 = "https://ad440-dev-function.azurewebsites.net/v1/books/"+this.myId + "/pages";
      axios
        .post(myUrl2, this.book)
        .then(response => (this.$router.push({ name: "AddPage", query: { id: this.book.id, page: response.data.page }})))
        .catch(error => (this.infop = error));
    }
  }
};
</script>