<template>
  <div id="BookPage">
    <b-container id="topPage">
      id: {{ myId }} <br /><br />
      info: {{ info }} <br /><br />
      info: {{ page }}
      <div>
        <hr class="my-4" />
        <b-jumbotron>
          <template slot="header">
            <h1>Book Title: {{ book.title }}</h1>
            <h3>Author: {{ book.author }}</h3>
            <h4>Description: {{ book.description }}</h4>
          </template>
          <!-- Titile : {{ book.title }}, Author : {{ book.author }} -->
          <hr class="my-4" />

          <b-btn variant="primary" v-on:click="created()">Add Page</b-btn>

          <!-- <nav>
            <router-link to='/addpage'>Add Page</router-link>
        </nav> -->
        </b-jumbotron>
        <hr class="my-4" />
        <h2>
          <ul>
            List of Pages Beaneath Here
          </ul>
        </h2>
        <hr class="my-4" />

        <div v-if="book.pages">
          <div v-for="(mypage, index) in book.pages" :key="mypage.id">
            <div v-if="mypage">
              <b-card>
                <p class="card-text">Page: {{ book.pages[index].number }}</p>
                <b-button variant="primary" v-on:click="gotoImage(index)"
                  >Add image</b-button
                >
                &nbsp; &nbsp;
                <b-button variant="primary" v-on:click="gotoAudio(index)"
                  >Add Audio</b-button
                >
                &nbsp; &nbsp;
                <b-button variant="primary" v-on:click="gotoText(index)"
                  >Add Text</b-button
                >
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
        "https://melanieoneboxfunctionsprint3.azurewebsites.net/v1/books/" +
          this.myId
      )
      .then(response => (this.book = response.data))
      .catch(error => (this.info = error));
  },
  methods: {
    gotoAddPage: function() {
      this.myNumber = this.book.id;
      this.$router.push({ name: "AddPage", query: { id: this.myId } });
    },
    gotoImage: function(index) {
      this.myNumber = this.book.pages[index].number;
      this.$router.push({
        name: "UploadPic",
        query: { id: this.myId, page: this.myNumber }
      });
    },
    gotoAudio: function(index) {
      this.myNumber = this.book.pages[index].number;
      this.$router.push({
        name: "UploadAudio",
        query: { id: this.myId, page: this.myNumber }
      });
    },
    gotoText: function(index) {
      this.myNumber = this.book.pages[index].number;
      this.$router.push({
        name: "UploadText",
        query: { id: this.myId, page: this.myNumber }
      });
    },
    created() {
      //edit json file to pass to API
      //redirect logic
      //if (this.book.pages[this.myNumber-1].image_url !== null) {
      //this.book.pages[this.myNumber-1].image_url = "https://ad440oneboxtempbb81.blob.core.windows.net/getsastoken/"+this.myFileNameA;
      var myUrl2 =
        "https://ad440-dev-function.azurewebsites.net/v1/books/" +
        this.myId +
        "/pages";
      axios
        .post(myUrl2, this.book)
        .then(response => (this.infop = response.data))
        .catch(error => (this.infop = error));
      this.$router.push({ name: "BookPage", query: { id: this.myId } });
      //}
      //if(this.infop == '201'){
      this.$router.push({
        name: "AddPage",
        query: { id: this.book.id, page: this.myNumber }
      });
      //}
    }
  }
};
</script>
