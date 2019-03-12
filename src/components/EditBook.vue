<template>
<b-container id="topPage" border-variant="dark">
<div id="InsertBook">
        {{$session.get('myI')}}
        <br /><br />
        infop : {{ infop }}
        <br /><br />
        route : {{ myId }}
        <br /><br />

        <h2>Edit book</h2>
        <form enctype="multipart/form-data">
            <div class="form-horizontal">
                <div class="form-group">
                    <p class="control-label col-md-2">Book Title</p>
                    <div class="col-md-10">
                        <input type="text" v-model="book.title" name="title" class="form-control" style="width:80%;" maxlength="200">
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Description</p>
                    <div class="col-md-10">
                        <textarea rows="3" v-model="book.description" class="form-control" style="width:80%;" name="body" maxlength="2000"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Book Author</p>
                    <div class="col-md-10">
                        <input type="text" v-model="book.author" name="custom5" class="form-control" style="width:80%;" maxlength="100">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button type="button" v-on:click="created()" class="btn btn-primary btn-lg" style="width:25%;">Update</button>
            </div>
        </form>
    </div>
    </b-container>
</template>

<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>-->
<!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
<script>
    import Vue from 'vue'
    import axios from "axios";
    import VueSession from 'vue-session';
    Vue.use(VueSession);
    export default {
        name: 'EditBook',
        data() {
            return {
                info: null,
                infos: null,
                infop: null,
                book: null,
                myId: null
            }
        },
        beforeMount(){
              axios({ method: "POST", "url": "https://merryfairytales.azurewebsites.net/v1/sastoken", "data": {'container': 'getsastoken'}, "headers": {'Content-Type': 'application/json'}})
                .then(response => {this.$session.set('myI',response.data.token);})
                .catch(error => (this.info = error))
            },
        mounted () {
            this.myId = this.$route.params.id;
                axios
                    .get('https://merry-fairy-tales.azurewebsites.net/v1/books')
                    .then(response => (this.book = response.data[0]))
                    .catch(error => (this.info = error))
            },
        methods: {
            created() {
              if (this.$session.get('MyI') !== null) {

              /*var myUrl2 = "https://melanieoneboxfunctionsprint3.azurewebsites.net/v1/books/1e4b5f8e-aa41-4074-adf6-4eec3769be80";
              axios.post(myUrl2,this.book)
                .then(response => (this.infop = response.data))
                .catch(error => (this.infop = error));*/

                //if(this.infop == '201'){
                    this.$router.push({ path: '/BookDetails', query: { id: this.book.id } })
                //}
              }
            }
        }
    }
</script>