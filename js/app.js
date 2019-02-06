
//Sample Data For Temporary Display
new Vue({
  el: '#app',
  data: {
    results: [
      {title: "Cinderella", author: "Marcia Brown", description: "Cinderella is a folk tale embodying a myth-element of unjust oppression and triumphant reward" },
      {title: "The Prince and the Pauper", author: "Mark Twain", description: "The novel represents Twain's first attempt at historical fiction."},
      {title: "Snow White", author: "Jacob Grimm", description: "The fairy tale features such elements as the magic mirror, the poisoned apple, the glass coffin, and the characters of the evil queen and the Seven Dwarfs."},
      {title: "Sleeping Beauty", author: "Michael Teitelbaum", description: "With the help of three good fairies, Princess Aurora grows up safe and protected from the evil Maleficent. But everything changes when she meets Prince Phillip and falls in love. Disney Princess fans ages 2 to 5 will love this Little Golden Book retelling of Disney Sleeping Beauty!"}
    ]
  }
});





//***ACTUAL WORKING API CALL */
//
//
// new Vue({
//   el: '#app',
//   data () {
//     return {
//       info: null,
//       loading: true,
//       errored: false
//     }
//   },
//   mounted () {
//     axios
//       .get('https://merry-fairy-tales.azurewebsites.net/api/GetBooks')
//       .then(response => (this.info = response))
//       .catch(error => {
//         console.log(error)
//         this.errored = true
//       })
//       .finally(() => this.loading = false)
//   }
// })






















