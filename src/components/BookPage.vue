<template>
  <div id="BookPage">
    <b-container id="topPage">
      <div>
        <hr class="my-4" />
        <b-jumbotron>
          <template slot="header">
            Book Page
            <!-- <h1>{{book.title}}</h1>
                    <h3>{{book.author}}</h3>
                       <h4>{{book.description}}</h4> -->
          </template>
          <hr class="my-4" />

          <b-btn variant="primary" b-link to="AddPage">Add Page</b-btn>

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
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BookPage",
  data() {
    return {};
  }
};
</script>
