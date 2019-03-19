<template>
  <b-container id="topPage" border-variant="dark">
    <div id="InsertBook">
      {{ $session.get("myI") }} <br /><br />
      info : {{ info }} <br /><br />
      infos : {{ infos }} <br /><br />
      infop : {{ infop }} <br /><br />
      {{ $session.get("myI") }}
      <br /><br />

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
          <div class="form-horizontal">
              <div class="form-group">
                <div class="col-md-10">
                  <input
                    type="file"
                    id="photoUrl"
                    name="myFileName"
                    v-on:change="fileChange($event.target.files)"
                    accept="application/vnd.msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
                  />
                </div>
              </div>
            </div>
          <!--<input
            type="hidden"
            v-model="cover_image"
            name="cover_image"
            class="form-control"
            style="width:80%;"
            maxlength="100"
          />-->
        </div>
        <div class="form-group">
          <button
            type="button"
            v-on:click="created()"
            class="btn btn-primary btn-sm"
            style="width:25%;"
          >
            Add
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
      files: new FormData(),
      info: null,
      infos: null,
      infop: "",
      myId: "",
      cover_image: "",
      author: "",
      description: "",
      myFileNameA: null,
      title: "",
      book: ""
    };
  },
  beforeMount() {
    axios({
      method: "POST",
      url: "https://ad440-dev-function.azurewebsites.net/v1/sastoken/",
      data: { container: "merryfairytalesassets" },
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        this.$session.set("myI", response.data.token);
      })
      .catch(error => (this.info = error));
  },
  mounted() {
    this.myId = this.$route.query.id;
    this.myNumber = this.$route.query.page;
  },
  methods: {
      fileChange(fileList) {
      this.files.append("file", fileList[0], fileList[0].name);
      this.myFileNameA = this.myId + "_cover_image.jpg";
    },
    created() {
      var myDate = new Date();
      var myUrl =
        "https://ad440uidevassetstorage.blob.core.windows.net/merryfairytalesassets/"+
        this.myFileNameA +
        this.$session.get("myI");
      axios({
        method: "PUT",
        url: myUrl,
        data: this.files,
        headers: {
          "x-ms-blob-type": "BlockBlob",
          "x-ms-date": myDate,
          "x-ms-version": "2018-03-28",
          "Content-Type": "multipart/form-data"
        },
        ContentLength: this.files.length
      })
        .then(response => (this.cover_image = response.data))
        .catch(error => (this.infos = "oyo "+error));

      this.cover_image = "https://ad440uidevassetstorage.blob.core.windows.net/merryfairytalesassets/"+this.myFileNameA;
      var myUrl2 = "https://ad440-dev-function.azurewebsites.net/v1/books";
      axios
        .post(myUrl2, {
          title: this.title,
          author: this.author,
          cover_image: this.cover_image,
          description: this.description
        })
        //.then(response => (this.infop = response.data))
        .then(response => (this.$router.push({ name: "BookPage", query: { id: response.data } })))
        .catch(error => (this.infop = "aha "+error));

      //this.$router.push({ name: "BookPage", query: { id: this.infop } });
    }
  }
};
</script>