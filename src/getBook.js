//***ACTUAL WORKING API CALL */

new Vue({
  el: '#getBook',
  data () {
    return {
      bookList: [],
    }
  },
  mounted () {
    var self = this
    axios
        .get('https://merry-fairy-tales.azurewebsites.net/api/GetBooks')
        .then(function (response) {
            self.bookList = response.data
            console.log('Data: ', response.data)
        })
}
})   


