<template>
  <b-container id="topPage" border-variant="dark">
    <hr class="my-4" />
    <b-jumbotron>
      <template slot="header">
        Add Book Form
      </template>
      <hr class="my-4" />
    </b-jumbotron>
    <hr class="my-4" />

    <!-- submission form ===================== -->
    <!-- <form id="submisson-form" @submit.prevent="processForm"> -->
    <b-form id="getSas" @submit.prevent="processForm">
      <!-- book title -->
      <!-- <div class="field">
            <label class="label">Title</label>
            <input type="text" class="input" name="title"  v-model="title">
          </div> -->
      <div>
        <b-form-input
          v-model="title"
          type="text"
          placeholder="Enter Book Title"
        />
        <div class="mt-2">Value: {{ title }}</div>
      </div>
      <hr class="my-4" />

      <!-- author -->
      <!-- <div class="field">
          <label class="label">Description</label>
          <input type="text" class="input" name="description"  v-model="description">
        </div> -->
      <div>
        <b-form-input
          v-model="author"
          type="text"
          placeholder="Enter Book Author"
        />
        <div class="mt-2">Value: {{ author }}</div>
      </div>
      <hr class="my-4" />

      <!-- description -->
      <!-- <div class="field">
            <label class="label">Author</label>
            <input type="author" class="input" name="author"  v-model="author">
          </div> -->
      <div>
        <b-form-input
          v-model="description"
          type="text"
          placeholder="Enter Book Description"
        />
        <div class="mt-2">Value: {{ description }}</div>
      </div>
      <hr class="my-4" />

      <!-- Add book button -->
      <!-- <div class="field has-text-right">
            <button type="submit" class="button">Add Book</button>
          </div> -->
      <b-btn variant="primary" type="submit" b-link to="#">Submit</b-btn>
    </b-form>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "AddBook",

  data() {
    return {
      title: "",
      description: "",
      author: ""
    };
  },

  mounted() {
    var self = this;

    data = {
      title: this.title,
      description: this.description,
      author: this.author
    };
    const url =
      "https://melanieoneboxfunctionsprint3.azurewebsites.net/v1/books";

    axios
      .post(url, data)

      .then(response => {
        alert("Book information submitted");

        var newId = response.data;
        console.log(newId);

        data.id = newId;
        console.log(data);
      });

    console.log({
      title: this.title,
      description: this.description,
      author: this.author
    });
    alert("Processing!");
  }
};
</script>
