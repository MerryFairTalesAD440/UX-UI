<template>
  <div id="AddLanguage">
    <b-container id="topPage" border-variant="dark">
      <div>
        <hr class="my-4" />
        <b-jumbotron bg-variant="info" border-variant="dark" text-variant="white">
          <template slot="header">
            Add Text and Audio Files Here
          </template>
         
        </b-jumbotron>
        <div>
  <b-card title="File Upload" >
   
    <hr class="my-4" />

          <b-btn variant="primary" v-on:click="gotoUploadText()">Upload Text File</b-btn>
          &nbsp;&nbsp;
          <b-btn variant="primary" v-on:click="gotoUploadAudio()">Upload Audio File</b-btn>

          <hr class="my-4" />
          <b-btn variant="info" b-link to="BookPage">Back to Book Page</b-btn>
  </b-card>
</div>
      </div>
    </b-container>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "AddLanguage",
  data() {
    return {
      myId: null
    };
  },
  mounted() {
    this.myId = this.$route.query.id;
    this.myNumber = this.$route.query.page;
  },
  methods: {
    gotoUploadText: function() {
      this.$router.push({ name: "UploadText", query: { id: this.myId, page: this.myNumber } });
    },
    gotoUploadAudio: function() {
      this.$router.push({ name: "UploadAudio", query: { id: this.myId, page: this.myNumber} });
    }
  }
};
</script>