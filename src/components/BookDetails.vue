<template>
<b-container id="topPage" border-variant="dark">
<div id="BookDetails">
        {{$session.get('myI')}}
        <br /><br />
        info : {{ info }}
        <br /><br />
        infos : {{ infos }}
        <br /><br />
        infop : {{ myId }}
        <br /><br />

        <h2>Manage book</h2>

        
            <b-row>
                <b-col>        
                <!-- Cards to Display Books(getBooks) -->
                <div>
                    <b-card >
                        <h2 class="card-text">The Book: {{ book.title }}</h2>
                        <h5 class="card-text">Author: {{ book.author }}</h5>
                        <h6 class="card-text">
                            Description: {{book.description}}
                        </h6>
                        <div class="mt-3">
                            <b-button-group>
                            <b-button variant="primary" v-on:click="gotopage()">Edit Book</b-button>
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
            <div class="col-md-4">
            <h2>Pages</h2>
            <!-- Cards to Display Books(getBooks) -->
            <div v-for="book in book.pages" :key="book.id" >
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
            <div class="col-md-4">
                <h2>Images</h2>
                <!-- Cards to Display Books(getBooks) -->
                <div v-for="book in book.pages" :key="book.id" >
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
            <div class="col-md-4">
                <h2>Audios</h2>
                <!-- Cards to Display Books(getBooks) -->
                <div v-for="book in book.pages" :key="book.id">
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
        </div>

        <form enctype="multipart/form-data">
            <div class="form-horizontal">
                <div class="form-group">
                    <p class="control-label col-md-2">File Type</p>
                    <div class="col-md-10">
                        <select class="form-control" style="width:80%;" v-model="myType">
                            <option>page</option>
                            <option>image</option>
                            <option>audio</option>
                        </select><br />
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Language</p>
                    <div class="col-md-10">
                        <select class="form-control" style="width:80%;" v-model="myLanguage">
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>Chineese</option>
                            <option>Ngambaye</option>
                        </select><br />
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Number</p>
                    <div class="col-md-10">
                        <select class="form-control" style="width:80%;" v-model="myNumber">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                        </select><br />
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Images</p>
                    <div class="col-md-10">
                        <input type="file" id="photoUrl" name="myFileName" v-on:change="fileChange($event.target.files)" accept="application/vnd.msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
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
                infop: null,
                know: null,
                myFileName: null,
                myNumber: null,
                myType: null,
                myLanguage: null,
                myFileNameA: null,
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
            this.myId = this.$route.params;
            axios
            .get('https://merry-fairy-tales.azurewebsites.net/v1/books')
            //.get('https://merry-fairy-tales.azurewebsites.net/v1/books')
            .then(response => (this.book = response.data[1]))
            .catch(error => (this.info = error))
            },
        methods: {
            fileChange(fileList) {
                this.files.append("file", fileList[0], fileList[0].name);
                this.myFileNameA = this.book.id + "_" + this.myType + "_" + this.myLanguage + "_" + this.myNumber;

                //this.book.pages.push(this.myNumber);
                //this.book.pages.number.push(this.myNumber);
                //this.book.pages.number.push(this.myNumber);
                //this.book.pages.number.push(this.myNumber);
            },
            gotopage(){
                this.$router.push({ path: '/EditBook', query: { id: this.book.id } })
            },
            created() {
              var myDate = new Date();
              var myUrl = "https://ad440oneboxtempbb81.blob.core.windows.net/getsastoken/"+this.myFileNameA+this.$session.get('myI');
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
                .then(response => (this.infos = response.status))
                .catch(error => (this.infos = error));

            //edit json file to pass to API
            //redirect logic
            if (this.infos == '201') {
              var myUrl2 = "https://melanieoneboxfunctionsprint3.azurewebsites.net/v1/books/1e4b5f8e-aa41-4074-adf6-4eec3769be80";
              axios({ method: "PUT",
                  "url": myUrl2,
                  "data": this.book,
                  "ContentLength": this.book.length
                  })
                .then(response => (this.infop = response.data))
                .catch(error => (this.infop = error));
                }
                /*if(this.infop == '201'){
                    self.$router.push('/BookDetails');
                }*/
            }
        }
    };
</script>
