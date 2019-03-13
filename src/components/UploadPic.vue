<template>
<div id="UploadPic">
<b-container id="topPage" border-variant="dark">
    <div>
        <hr class="my-4">
        <b-jumbotron>
            <template slot="header">
                Upload Image File Here
            </template>
            <hr class="my-4">
                            
                                <b-btn variant="primary" b-link to="#">Upload Image File</b-btn>
                                
                                <hr class="my-4">
                                <b-btn variant="info" b-link to="BookPage">Back to Book Page</b-btn>
        
   
       
        </b-jumbotron>
       
    </div>
</b-container>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'UploadPic',
  data(){
    return {
      
      
    }
  },
}

</script>