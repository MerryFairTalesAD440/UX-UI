<template>
  <b-container id="topPage" border-variant="dark">
    <div id="InsertBook">
      infop : {{ infop }} <br /><br />

      <h2>Add book</h2>
      <form enctype="multipart/form-data">
        <div class="form-horizontal">
          <div class="form-group">
            <p class="control-label col-md-2">Book Title</p>
            <div class="col-md-10">
              <input
                type="text"
                v-model="title"
                name="title"
                class="form-control"
                style="width:80%;"
                maxlength="200"
              />
            </div>
          </div>
          <div class="form-group">
            <p class="control-label col-md-2">Description</p>
            <div class="col-md-10">
              <textarea
                rows="3"
                v-model="description"
                class="form-control"
                style="width:80%;"
                name="body"
                maxlength="2000"
              ></textarea>
            </div>
          </div>
          <div class="form-group">
            <p class="control-label col-md-2">Book Author</p>
            <div class="col-md-10">
              <input
                type="text"
                v-model="author"
                name="custom5"
                class="form-control"
                style="width:80%;"
                maxlength="100"
              />
            </div>
          </div>
          <input
            type="hidden"
            v-model="cover_image"
            name="cover_image"
            class="form-control"
            style="width:80%;"
            maxlength="100"
          />
        </div>
        <div class="form-group">
          <button
            type="button"
            v-on:click="created()"
            class="btn btn-primary btn-sm"
            style="width:25%;"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </b-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  name: "AddBook",
  data() {
    return {
      infop: "",
      myId: "",
      cover_image: "",
      author: "",
      description: "",
      title: "",
      book: ""
    };
  },
  beforeMount() {},
  mounted() {},
  methods: {
    created() {
      //var myUrl2 = "https://ad440-dev-function.azurewebsites.net/v1/books"; //bad
      var myUrl2 = "https://ad440-dev-function.azurewebsites.net/v1/books";
      axios
        .post(myUrl2, {
          title: this.title,
          author: this.author,
          cover_image: this.cover_image,
          description: this.description
        })
        .then(response => (this.infop = response.data))
        .catch(error => (this.infop = error));

      this.$router.push({ name: "BookPage", query: { id: this.infop } });
    }
  }
};
</script>
