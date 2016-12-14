var App = new Vue({
  el: '#app',
  template: '#search-template',
  data: {
    className: 'weui-search-bar',
    val: ''
  },
  methods: {
    barFocus: function() {
      this.className = 'weui-search-bar weui-search-bar_focusing'
    },
    barBlur: function() {
      this.className = 'weui-search-bar'
    },
    searchClear: function() {
      this.val = ''
    }
  }
})
