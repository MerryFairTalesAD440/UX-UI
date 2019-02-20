
Vue.http.options.emulateJSON = true;

const app = new Vue({
    el: '#submisson-form',
  
    // data
    data: {
      title: '',
      description: '',
      author: '',
      errors: []
    },
  

// methods
    methods: {
      processForm: function() {

          //axios.post('https://melanieoneboxfunctionsprint2.azurewebsites.net/api/books', {
          axios.post('https://merry-fairy-tales.azurewebsites.net/api/GetBooks', {

             data: this.data
             
          })
          .then(response => {

            alert('Book information submitted');

            console.log(response.data);
          })
          .catch(e => {

            this.errors.push(e)
            alert('Error ' + e);
            console.log('Error ' + e);
          })

        console.log({ title: this.title, description: this.description, author: this.author });
        alert('Processing!');
      }

    }
    
  });

    // API endpoint if running into CORS issues
// https://cors.io/?https://demofunctionsmikal-1-10-2019.azurewebsites.net/api/printname?name=Dave