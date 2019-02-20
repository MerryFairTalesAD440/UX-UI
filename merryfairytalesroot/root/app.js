
//***ACTUAL WORKING API CALL */

new Vue({
  el: '#app',
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











// new Vue({
//   el: '#app',
//   data () {
//     return {
//       bookList: [],
//       loading: true,
//       errored: false
//     }
//   },
//   mounted () {
//     axios
//       .get('https://merry-fairy-tales.azurewebsites.net/api/GetBooks')
//       .then(response => (this.bookList = response))
//       .catch(error => {
//         console.log(error)
//         this.errored = true
//       })
//       .finally(() => this.loading = false)
//   }
// })






















