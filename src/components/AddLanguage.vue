<template>
<div id="AddLanguage">
<b-container id="topPage" border-variant="dark">
    <div>
        <hr class="my-4">
        <b-jumbotron>
            <template slot="header">
                Add Text and Audio Files Here
            </template>
            <hr class="my-4">

                                
                            
                                <b-btn variant="primary" b-link to="UploadText">Upload Text File</b-btn>
                                &nbsp;&nbsp;
                                <b-btn variant="primary" b-link to="UploadAudio">Upload Audio File</b-btn>
                                
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
  name:'AddLanguage',
  data(){
    return {
      
      
    }
  },
}

</script>
