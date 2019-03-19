<template>
  <div id="UploadPic">
    <b-container id="topPage" border-variant="dark">
      <div>
        <hr class="my-4" />
        {{ $session.get("myI") }}
        <br /><br />
        info : {{ info }} <br /><br />
        infos : {{ infos }} <br /><br />
        infop : {{ infop }} <br /><br />
        <b-jumbotron>
          <template slot="header">
            Upload Image File Here
          </template>
          <hr class="my-4" />

          <form enctype="multipart/form-data">
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
            <div class="form-group">
              <button
                type="button"
                v-on:click="created()"
                class="btn btn-primary btn-lg"
                style="width:25%;"
              >
                Add
              </button>
            </div>
          </form>
          <hr class="my-4" />
        </b-jumbotron>
      </div>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueSession from "vue-session";
Vue.use(VueSession);
export default {
  name: "mekone",
  data() {
    return {
      files: new FormData(),
      info: null,
      infos: null,
      infop: null,
      know: null
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
      .catch(error => (this.info = "sas "+error));
  },
  mounted() {

  },
  methods: {
    fileChange(fileList) {
      this.files.append("file", fileList[0], fileList[0].name);
    },
    created() {
      var myDate = new Date();
      var myUrl = "https://ad440uidevassetstorage.blob.core.windows.net/merryfairytalesassets/mekone.jpg"+this.$session.get('myI');
      axios({
        method: "PUT",
        url: myUrl,
        data: this.files,
        headers: {
          //"Access-Control-Allow-Origins": "*",
          //"Access-Control-Allow-Headers": "*",
          //'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          "x-ms-blob-type": "BlockBlob",
          "x-ms-date": myDate,
          "x-ms-version": "2018-03-28",
          "Content-Type": "multipart/form-data"
        },
        ContentLength: this.files.length
      })
        .then(response => (this.infos = response.data))
        .catch(error => (this.infos = "nt "+error));
    }
  }
};
</script>
