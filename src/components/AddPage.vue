<template>
<div id="AddPage">
<b-container id="topPage" border-variant="dark">
    <div>
        <hr class="my-4">
        <b-jumbotron>
            <template slot="header">
                Add Page
            </template>
            <hr class="my-4">
                            
                                <b-btn variant="primary" b-link to="AddLanguage">Add Language</b-btn>
                                &nbsp;&nbsp;
                                <b-btn variant="primary" b-link to="Uploadpic">Upload Image</b-btn>
                                <hr class="my-4">
                                <b-btn variant="info" b-link to="BookPage">Back to Book Page</b-btn>
        
        <!-- <nav>
            <router-link to='/addpage'>Add Page</router-link>
        </nav> -->
       
        </b-jumbotron>
        <hr class="my-4">
        <h2><ul>List of Languages for this Page Beaneath Here</ul></h2>
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
      
      
    }
  },
}

</script>