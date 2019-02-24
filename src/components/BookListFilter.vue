<template>
  <div class="container">
    Filter: <input v-model="search" placeholder="author name or book title"/>
    <div v-if="bookList">
      <br>
      <tr>
        <th>Title</th>
        <th>Author</th>
      </tr>
      <tr v-for="book in filteredBook" :key="book.id">
        <td> {{ book.title }} </td>
        <td> {{ book.author }} </td>
      </tr>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';
    const API_URL = "https://merry-fairy-tales.azurewebsites.net/api/v1/books";
    export default {
        name: 'BookListFilter',
        data () {
            return {
                search: '',
                bookList: []
            }
        },
        mounted () {
            var self = this
            axios
                .get(API_URL)
                .then(function (response) {
                    self.bookList = response.data
                    console.log('Data: ', response.data)
                })
        },
        computed: {
            filteredBook: function () {
                return this.bookList.filter((book) => {
                    return book.title.toLowerCase().match(this.search.toLowerCase()) || book.author.toLowerCase().match(this.search.toLowerCase())
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    td {
        text-align: center;
        width: 200px;
        text-indent: 25px;
    }
    th {
        text-align: center;
        width: 200px;
    }
</style>
