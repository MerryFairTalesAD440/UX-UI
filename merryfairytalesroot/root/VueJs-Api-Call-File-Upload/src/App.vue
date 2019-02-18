<template>
<div id="app">
        {{$session.get('myI')}}
        <br /><br />
        {{ infos }}
        <h2>Upload a File - Vuejs API Call</h2>
        <form enctype="multipart/form-data">
            <div class="form-horizontal">
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
                    <p class="control-label col-md-2">Book Title</p>
                    <div class="col-md-10">
                        <input type="text" name="title" class="form-control" style="width:80%;" maxlength="200">
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Book Text</p>
                    <div class="col-md-10">
                        <textarea rows="5" class="form-control" style="width:80%;" name="body" maxlength="2000"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Images</p>
                    <div class="col-md-10">
                        <input type="file" multiple="multiple" id="photoUrl" name="file" v-on:change="fileChange($event.target.files)" accept="application/vnd.msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                text/plain, application/pdf, image/*">
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Sounds</p>
                    <div class="col-md-10">
                        <input type="file" multiple="multiple" id="photoUrl" name="file" v-on:change="fileChange($event.target.files)" accept="application/vnd.msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                text/plain, application/pdf, image/*">
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Book Author</p>
                    <div class="col-md-10">
                        <input type="text" name="custom5" class="form-control" style="width:80%;" maxlength="100">
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Tags</p>
                    <div class="col-md-10">
                        <input type="text" name="custom3" class="form-control" style="width:80%;" maxlength="500">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button type="button" v-on:click="created()" class="btn btn-primary btn-lg" style="width:25%;">Submit</button>
            </div>
        </form>
    </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>
    import Vue from 'vue'
    import axios from "axios";
    import VueSession from 'vue-session';
    Vue.use(VueSession);
    export default {
        name: 'app',
        data() {
            return {
                files: new FormData(),
                info: null,
                infos: null,
                myFileName : null
            }
        },
        methods: {
            fileChange(fileList) {
                this.files.append("file", fileList[0], fileList[0].name);
                this.myFileName = fileList[0].name;
            },
            created() {
              axios({ method: "POST", "url": "https://merryfairytales.azurewebsites.net/api/getSAS", "data": {'container': 'getsastoken'}, "headers": {'Content-Type': 'application/json'}})
                .then(response => {this.$session.set('myI',response.data.token);})
                .catch(error => (this.info = error))
              var myDate = new Date();
              var myUrl = "https://ad440oneboxtempbb81.blob.core.windows.net/getsastoken/"+this.myFileName+"/"+this.$session.get('myI');
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
    }
</script>

<style>
    @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    @import "https://fonts.googleapis.com/css?family=Roboto|Parisienne|Fahkwang|Marmelad";
    #app {
      padding: 20px;
      font-family: Marmelad;
    }
</style>
