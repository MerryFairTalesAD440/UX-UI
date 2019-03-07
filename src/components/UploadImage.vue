<template>
    <div id="app">
        {{$session.get('sesh')}}
        <br /><br />
        {{ info2 }}
        <h2>Upload An Image</h2>
        <form enctype="multipart/form-data">
            <div class="form-horizontal">
                <div class="form-group">
                    <input type="file" multiple="multiple" id="urlPic" name="file" v-on:change="fileChange($event.target.files)" accept="image/*">
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
        name: 'UploadImage',
        data() {
            return {
                files: new FormData(),
                info: null,
                info2: null
            }
        },
        methods: {
            fileChange(fileList) {
                this.files.append("file", fileList[0], fileList[0].name);
            },
            created() {
              axios({ method: "POST", "url": "https://merryfairytales.azurewebsites.net/api/getSAS", "data": {'container': 'getsastoken'}, "headers": {'Content-Type': 'application/json'}})
                .then(response => {this.$session.set('sesh',response.data.token);})
                .catch(error => (this.info = error))
              var myDate = new Date();
              var myUrl = " var myUrl = "https://ad440oneboxtempbb81.blob.core.windows.net/getsastoken/pic.jpg"+this.$session.get('sesh');
              axios({ method: "PUT",
                  "url": myUrl,
                  "data": this.files,
                  "headers": {
                      "x-ms-blob-type": "BlockBlob",
                      "x-ms-date": myDate,
                      "x-ms-version": "2018-04-04",
                      "Content-Type": "multipart/form-data"},
                      "ContentLength": this.files.length
                  })
                .then(response => (this.info2 = response))
                .catch(error => (this.info2 = error));
            }
        }
    }
</script>
