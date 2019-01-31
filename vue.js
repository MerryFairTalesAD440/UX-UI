
Vue.http.options.emulateJSON = true;

const app = new Vue({
    el: '#submisson-form',
  
    // data
    data: {
      title: '',
      author: '',
      errors: []
    },
  

// methods
    methods: {
      processForm: function() {

         axios.post('https://demofunctionsmikal-1-10-2019.azurewebsites.net', {
  
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

        console.log({ title: this.title, author: this.author });
        alert('Processing!');
      }

    }
    
  });
