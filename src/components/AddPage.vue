<template>
  <div id="AddPage">
    <b-container id="topPage" border-variant="dark">
      <div>
        info: {{ info }}
        <br /><br />
        infop: {{ infop }} 
        <br /><br />
        myId: {{ myId }} myNumber: {{ myNumber }}
        <br /><br />
        myLanguage: {{ myLanguage }}
        <hr class="my-4" />
        <b-jumbotron>
          <template slot="header">
            Page Added
          </template>
          <h4>TITLE : {{ book.title }}, AUTHOR : {{ book.author }}</h4>
          <hr class="my-4" />

          <b-btn variant="primary" v-on:click="created()">Add Language</b-btn>
            <br /><br />
            <select class="form-control" v-model="myLanguage" style="width:40%;" name="lg">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="Chineese">Chineese</option>
                <option value="Ngambaye">Ngambaye</option>
             </select><br />

          &nbsp;&nbsp;
          <b-btn variant="primary" v-on:click="gotoUploadPic()"
            >Upload Image</b-btn
          >
          <hr class="my-4" />
          <b-btn variant="info" b-link to="BookPage">Back to Book Page</b-btn>

          <!-- <nav>
                <router-link to='/addpage'>Add Page</router-link>
            </nav> -->
        </b-jumbotron>
        <hr class="my-4" />
        <h2>
          <ul>
            List of Languages for this Page Beaneath Here
          </ul>
        </h2>
        <hr class="my-4" />

        <!--<div v-if="languages !== null">
          <div v-for="language in languages" :key="language.id">
            <div v-if="language !== null">
              <b-card>
                <p class="card-text">Page: {{  }}</p>
              </b-card>
            </div>
          </div>
        </div>-->

      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddPage",
  data() {
    return {
      info: null,
      infop: null,
      page: null,
      mypage: null,
      myLanguage: null,
      book: null,
      myId: null,
      languages: [],
      myNumber: null
    };
  },
  mounted() {
    this.myId = this.$route.query.id;
    this.myNumber = this.$route.query.page;

    //get book by id
    axios
      .get(
        "https://ad440-dev-function.azurewebsites.net/v1/books/"+this.myId
      )
      .then(response => (this.book = response.data))
      .catch(error => (this.info = error));

    //get pages
    axios
      .get(
        "https://ad440-dev-function.azurewebsites.net/v1/books/"+this.myId+"/pages/"+this.myNumber+"/language"
      )
      .then(response => (this.languages = response.data))
      .catch(error => (this.info = error));
  },
  methods: {
    gotoUploadPic: function() {
      this.$router.push({ name: "UploadPic", query: { id: this.myId, page: this.myNumber } });
    },
    created() {
      //if (this.book.pages[this.myNumber-1].image_url !== null) {
      var myUrl2 = "https://ad440-dev-function.azurewebsites.net/v1/books/"+this.myId+"/pages/"+this.myNumber+"/language/"+this.myLanguage;
      axios
        .post(myUrl2, this.book)
        //.then(response => (this.infop = response.data))
        .then(response => (this.$router.push({ name: "AddLanguage", query: { id: this.book.id, page: response.data.language }})))
        .catch(error => (this.infop = error));
    }
  }
};
</script>
