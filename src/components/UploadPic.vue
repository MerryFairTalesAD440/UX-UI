<template>
<b-container id="topPage" border-variant="dark">
<div id="BookDetails">
        {{$session.get('myI')}}
        <br /><br />
        info : {{ info }}
        <br /><br />
        infos : {{ infos }}
        <br /><br />
        route : {{ myId }}
        <br /><br />
        infop : {{ infop }}
        <br /><br />

        <h2>Upload Image</h2>

        <form enctype="multipart/form-data">
            <div class="form-horizontal">
                <div class="form-group">
                    <div class="col-md-10">
                        <input type="file" id="photoUrl" name="myFileName" v-on:change="fileChange($event.target.files)" accept="application/vnd.msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*">
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
                myFileNameA: null,
                page:null,
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
            this.myId = this.$route.query.id;
            axios
            //.get('https://melanieoneboxfunctionsprint3.azurewebsites.net/v1/books/'+this.myId)
            .get('https://melanieoneboxfunctionsprint3.azurewebsites.net/v1/books/f7603c88-278c-4211-bfc8-549644172954')
            //.get('https://merry-fairy-tales.azurewebsites.net/v1/books')
            .then(response => (this.book = response.data))
            .catch(error => (this.info = error))
            },
        methods: {
            fileChange(fileList) {
                this.files.append("file", fileList[0], fileList[0].name);
                    this.myFileNameA = this.book.id + "_"  + this.book.myNumber + ".JPG";
                
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
            //if (this.infos == '201') {
                //this.book.pages.push(this.myFileNameA);
                //this.page.book.id = this.book.id;
                //this.page.language = this.myLanguage;
                //this.book.pages.push(this.pages);
              var myUrl2 = "https://ad440-dev-function.azurewebsites.net/v1/books/f7603c88-278c-4211-bfc8-549644172954/pages/1";
              axios.post(myUrl2,this.book)
                .then(response => (this.infop = response.data))
                .catch(error => (this.infop = error));
                //}
                if(this.infop == '201'){
                    //this.$router.push({ path: '/BookDetails', query: { id: this.book.id } })
                }
            }
        }
    };
</script>
