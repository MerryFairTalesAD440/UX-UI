//Optional Pagination Feature
new Vue({
  el: '#pagination',

  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#page/' + pageNum + '/foobar'
    }
  }


})