<template>
  <div id="UploadText">
    <b-container id="topPage" border-variant="dark">
      <div>
        <hr class="my-4" />
        <b-jumbotron>
          <template slot="header">
            Upload Text File Here
          </template>
          <hr class="my-4" />

          <b-btn variant="primary" b-link to="#">Upload Text File</b-btn>

          <hr class="my-4" />
          <b-btn variant="info" b-link to="BookPage">Back to Book Page</b-btn>
        </b-jumbotron>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UploadText",
  data() {
    return {};
  }
};
</script>
