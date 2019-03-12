<template>
<b-container id="topPage" border-variant="dark">
<div id="BookDetails">
        {{$session.get('myI')}}
        <br /><br />

        <h2>Manage book</h2>

        
            <b-row>
                <b-col>        
                <!-- Cards to Display Books(getBooks) -->
                <div>
                    <b-card >
                        <h2 class="card-text">The Book: {{ bookList[0].title }}</h2>
                        <h5 class="card-text">Author: {{ bookList[0].author }}</h5>
                        <h6 class="card-text">
                            Description: {{bookList[0].description}}
                        </h6>
                        <div class="mt-3">
                            <b-button-group>
                            <b-button variant="danger" b-link to="#">Delete Book</b-button>                           
                            </b-button-group>
                        </div>
                    </b-card>
                    <hr class="my-4">
                </div>
                <!-- End Book Cards -->
                </b-col>
            </b-row>
        

        <div class="row">
            <div class="col-md-3">
            <h2>Pages</h2>
            <!-- Cards to Display Books(getBooks) -->
            <div v-for="book in bookList[0].pages" :key="book.id" >
                <div v-for="item in book.languages" :key="item.id">
                <b-card >
                    <p class="card-text">Number: {{ book.number }} <br />URL : {{ item.text_url }}<br />lg : {{ item.language}}</p>
                    <div class="mt-3">
                        <b-button-group>
                        <b-button variant="danger" b-link to="#">Delete</b-button>                                       
                        </b-button-group>
                    </div>
                </b-card>
                </div>
                <hr class="my-4">
            </div>
            </div>
            <div class="col-md-3">
                <h2>Images</h2>
                <!-- Cards to Display Books(getBooks) -->
                <div v-for="book in bookList[0].pages" :key="book.id" >
                    <b-card >
                        <p class="card-text">Number: {{ book.number }} <br />URL: {{ book.image_url }}</p>
                        <div class="mt-3">
                            <b-button-group>
                            <b-button variant="danger" b-link to="#">Delete</b-button>                                       
                            </b-button-group>
                        </div>
                    </b-card>
                    <hr class="my-4">
                </div>

            </div>
            <div class="col-md-3">
                <h2>Audios</h2>
                <!-- Cards to Display Books(getBooks) -->
                <div v-for="book in bookList[0].pages" :key="book.id">
                    <div v-for="item in book.languages" :key="item.id">
                    <b-card >
                        <p class="card-text">Url: {{ item.audio_url }}<br />lg: {{ item.language }}</p>
                        <div class="mt-3">
                            <b-button-group>
                            <b-button variant="danger" b-link to="#">Delete</b-button>                                       
                            </b-button-group>
                        </div>
                    </b-card>
                    </div>
                    <hr class="my-4">
                </div>

            </div>
            <div class="col-md-3">
                <h2>Languages</h2>
                <!-- Cards to Display Books(getBooks) -->
                <div v-for="book in bookList[0].pages" :key="book.id" >
                    <div v-for="item in book.languages" :key="item.id">
                    <b-card >
                        <p class="card-text">Language: {{ item.language }}</p>
                        <div class="mt-3">
                            <b-button-group>
                            <b-button variant="danger" b-link to="#">Delete</b-button>                                       
                            </b-button-group>
                        </div>
                    </b-card>
                    </div>
                    <hr class="my-4">
                </div>

            </div>
        </div>

        <form enctype="multipart/form-data">
            <div class="form-horizontal">
                <div class="form-group">
                    <p class="control-label col-md-2">File Type</p>
                    <div class="col-md-10">
                        <select class="form-control" style="width:80%;" name="partitionkey">
                            <option value="page">page</option>
                            <option value="image">image</option>
                            <option value="audio">audio</option>
                        </select><br />
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Language</p>
                    <div class="col-md-10">
                        <select class="form-control" style="width:80%;" name="partitionkey">
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="Chineese">Chineese</option>
                            <option value="Ngambaye">Ngambaye</option>
                        </select><br />
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Number</p>
                    <div class="col-md-10">
                        <select class="form-control" style="width:80%;" name="partitionkey">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </select><br />
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Images</p>
                    <div class="col-md-10">
                        <input type="file" multiple="multiple" id="photoUrl" name="file" v-on:change="fileChange($event.target.files)" accept="application/vnd.msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                text/plain, application/pdf, image/*">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button type="button" v-on:click="created()" class="btn btn-primary btn-lg" style="width:25%;">Add</button>
            </div>
        </form>
    </div>
    </b-container>
</template>

<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
<script>
    import Vue from 'vue'
    import axios from "axios";
    import VueSession from 'vue-session';
    Vue.use(VueSession);
    export default {
        name: 'BookDetails',
        data() {
            return {
                files: new FormData(),
                info: null,
                infos: null,
                bookList: []
            }
        },
        beforeMount(){
              axios({ method: "POST", "url": "https://merryfairytales.azurewebsites.net/v1/sastoken", "data": {'container': 'getsastoken'}, "headers": {'Content-Type': 'application/json'}})
                .then(response => {this.$session.set('myI',response.data.token);})
                .catch(error => (this.info = error))
            },
        mounted () {
        // var self = this
        axios
        //.get('https://melanieoneboxfunctionsprint3.azurewebsites.net/v1/books/francesco')
        .get('https://merry-fairy-tales.azurewebsites.net/v1/books')
        .then(response => (this.bookList = response.data))
            },
        methods: {
            fileChange(fileList) {
                this.files.append("file", fileList[0], fileList[0].name);
            },
            created() {
              var myDate = new Date();
              var myUrl = "https://ad440oneboxtempbb81.blob.core.windows.net/getsastoken/februaryPic.jpg"+this.$session.get('myI');
              axios({ method: "PUT",
                  "url": myUrl,
                  "data": this.files,
                  "headers": {
                      "x-ms-blob-type": "BlockBlob",
                      "x-ms-date": myDate,
                      "x-ms-version": "2018-03-28",
                      "Content-Type": "multipart/form-data"},
                      "ContentLength": this.files.length
                  })
                .then(response => (this.infos = response))
                .catch(error => (this.infos = error));
            }
        }
    };
</script>
