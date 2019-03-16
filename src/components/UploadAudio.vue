<template>
  <div id="UploadAudio">
    <b-container id="topPage" border-variant="dark">
      <div>
        <hr class="my-4">
        <b-jumbotron>
          <template slot="header">
            <div class="large-12 medium-12 small-12 cell">
              <label>
                File
                <input type="file" id="file" ref="file" v-on:change="handleAudioUpload()">
              </label>
              <button v-on:click="submitAudio()">Submit</button>
            </div>
          </template>
          <hr class="my-4">

          <b-btn variant="primary" b-link to="#">Upload Audio File</b-btn>

          <hr class="my-4">
          <b-btn variant="info" b-link to="BookPage">Back to Book Page</b-btn>
        </b-jumbotron>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  /*
      Defines the data used by the component
    */
  data() {
    return {
      file: ""
    };
  },

  methods: {
    /*
        Submits the file to the server
      */
    submitAudio() {
      /*
                Initialize the form data
            */
      let formData = new FormData();

      /*
                Add the form data we need to submit
            */
      formData.append("file", this.file);

      /*
          Make the request to the POST /single-file URL
        */
      axios
        .post("/single-file", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    },

    /*
        Handles a change on the file upload
      */
    handleAudioUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>
