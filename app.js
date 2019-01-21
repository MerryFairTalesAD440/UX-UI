


var message = new Vue({
        el: '#message',

        data: {
            getMessage: []
        },

        created: function () {
            this.fetchData();
        },        

        methods: {
            fetchData: function () {
                this.$http.get('https://demofunctionsmikal-1-10-2019.azurewebsites.net/api/printname?name=Dave')
                          .then(response => {
                             this.getMessage = response.data
                         
                          })
            }
        }

    })
    ;

    // API endpoint if running into CORS issues
    // https://cors.io/?https://demofunctionsmikal-1-10-2019.azurewebsites.net/api/printname?name=Dave
