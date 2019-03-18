<template>
<div id="AddPage">
<b-container id="topPage" border-variant="dark">
    <div>

        <hr class="my-4">
        <b-jumbotron>
            <template slot="header">
                Page Added
            </template>
            <hr class="my-4">
          
            <b-btn variant="primary" v-on:click="created()">Add Language</b-btn>
            <br /><br />
            <select class="form-control" @change="handleChange" style="width:80%;" name="partitionkey">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="Chineese">Chineese</option>
                <option value="Ngambaye">Ngambaye</option>
            </select><br />

            <b-btn variant="primary" v-on:click="gotoUploadPic()">Upload Image</b-btn>
            <hr class="my-4">
            <b-btn variant="info" b-link to="BookPage">Back to Book Page</b-btn>
        
            <!-- <nav>
                <router-link to='/addpage'>Add Page</router-link>
            </nav> -->
       
        </b-jumbotron>
        <hr class="my-4">
        <h2><ul>List of Languages for this Page Beaneath Here</ul></h2>

            <div v-for="lg in languages" :key="lg.id" >
                <div v-if="lg">
                    <b-card >
                        <h3 class="card-text">Title: {{ lg.language }}</h3>
                    </b-card>
                </div>
            <hr class="my-4">
            </div>

        <hr class="my-4">
    
    </div>
</b-container>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'AddPage',
  data(){
    return {
        info: null,
        page: null,
        myLanguage: null,
        languages: [],
        myPage:null,
        book: null,
        myId: null
        }    
    },
    mounted () {
        this.myId = this.$route.query.id;
        this.myPage = this.$route.query.page;

        var myUrl2 = "https://ad440-dev-function.azurewebsites.net/v1/books/"+this.myId+"/pages/"+this.myPage+"/language"
        axios.post(myUrl2,this.book)
            .then(response => (this.languages = response.data))
            .catch(error => (this.infop = error));
    },
    methods:{
    handleChange(e) {
        if(e.target.options.selectedIndex > -1) {
            this.myLanguage = e.target.options[e.target.options.selectedIndex].dataset.foo;
        }
    },
    gotoUploadPic:function(){
            this.$router.push({ name: 'UploadPic', query: { id: this.myId} })
    },
    created() {
            //edit json file to pass to API
            //redirect logic
              var myUrl2 = "https://ad440-dev-function.azurewebsites.net/v1/books/"+this.myId+"/pages/"+this.myPage+"/language/"+this.myLanguage;
              axios.post(myUrl2,this.book)
                .then(response => (this.infop = response.data))
                .catch(error => (this.infop = error));

            //}
            //if(this.infop == '201'){
                this.$router.push({ name: 'AddLanguage', query: { id: this.myId, page: this.myPage } })
            //}
        }
  }
}
</script>