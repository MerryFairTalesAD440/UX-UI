<template>
<div id="app">
        {{$session.get('myI')}}
        <br /><br />
        {{ infos }}
        <br /><br />
        {{ infos2 }}
        <br /><br />
        {{ infos3 }}
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
                        <input type="file" multiple="multiple" id="photoUrl3" name="file2" v-on:change="fileChange3($event2.target.files2)" accept="application/vnd.msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                text/plain, application/pdf, image/*">
                    </div>
                </div>
                <div class="form-group">
                    <p class="control-label col-md-2">Text File</p>
                    <div class="col-md-10">
                        <input type="file" multiple="multiple" id="photoUrl2" name="file3" v-on:change="fileChange2($event3.target.files3)" accept="application/vnd.msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
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
                files2: new FormData(),
                files3: new FormData(),
                info: null,
                infos: null,
                info2: null,
                infos2: null,
                info3: null,
                infos3: null
            }
        },
        methods: {
            beforeMount(){
                this.getSas()
            },
            fileChange(fileList) {
                this.files.append("file", fileList[0], fileList[0].name);
            },
            fileChange(fileList2) {
                this.files2.append("file2", fileList2[0], fileList2[0].name);
            },
            fileChange(fileList3) {
                this.files3.append("file3", fileList3[0], fileList3[0].name);
            },
            getSas(){
              axios({ method: "POST", "url": "https://merryfairytales.azurewebsites.net/v1/sastoken", "data": {'container': 'getsastoken'}, "headers": {'Content-Type': 'application/json'}})
                .then(response => {this.$session.set('myI',response.data.token);})
                .catch(error => (this.info = error))
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

              var myUrl2 = "https://ad440oneboxtempbb81.blob.core.windows.net/getsastoken/FebruarySound.mp3"+this.$session.get('myI');
              axios({ method: "PUT",
                  "url": myUrl2,
                  "data": this.files2,
                  "headers": {
                      "x-ms-blob-type": "BlockBlob",
                      "x-ms-date": myDate,
                      "x-ms-version": "2018-03-28",
                      "Content-Type": "multipart/form-data"},
                      "ContentLength": this.files2.length
                  })
                .then(response => (this.infos2 = response))
                .catch(error => (this.infos2 = error));

              var myUrl3 = "https://ad440oneboxtempbb81.blob.core.windows.net/getsastoken/februaryFile.docx"+this.$session.get('myI');
              axios({ method: "PUT",
                  "url": myUrl3,
                  "data": this.files3,
                  "headers": {
                      "x-ms-blob-type": "BlockBlob",
                      "x-ms-date": myDate,
                      "x-ms-version": "2018-03-28",
                      "Content-Type": "multipart/form-data"},
                      "ContentLength": this.files3.length
                  })
                .then(response => (this.infos3 = response))
                .catch(error => (this.infos3 = error));
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
