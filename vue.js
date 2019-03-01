
Vue.http.options.emulateJSON = true;

const app = new Vue({
    el: '#submisson-form',
  
     data: {
      title: '',
      description: '',
      author: ''
    },
   
// methods
    methods: {
      processForm: function() { 
             
          data = { title: this.title, description: this.description, author: this.author }
          const url = 'https://melanieoneboxfunctionsprint2.azurewebsites.net/v1/books';

          axios.post(url, data)  
 
          .then(response => {
            
            alert('Book information submitted');

            var newId = response.data;
            console.log(newId);

            data.id= newId
            console.log(data);

           })

        console.log({ title: this.title, description: this.description, author: this.author });
        alert('Processing!');
      }
        
  }
  });

   