// Vue.filterを使うことで汎用的なフィルタを定義できる
Vue.filter('localeNum',function(val){
  return val.toLocaleString()
}); 

var app = new Vue({
  el: "#app",
  data:{
    list:[],
    current:'',
    topics: [
      {value: 'vue',name:'vue.js'},
      {value: 'jQuery', name:'jQuery'}
    ],
  },
  watch: {
    current: function(val){
      axios.get('https://api.github.com/search/repositories',{
        params: {q: 'topic'+ val}
      }).then(function(response){
          this.list = response.data.items
      }.bind(this))
    }
  },
});
var filter = new Vue({
  el: "#filter",
  data: {
    price: 1234567890987654,
    message: "こんにちは",
    foo: "あああ",
    num: 1000,
    video1: false,
  },
  filters:{
    filter: function(message,foo,num){
      console.log(message,foo,num)
    }
  },
  directives:{
    focus: {
      inserted: function(el) {
        el.focus(),
        console.log('v-focusされたよ！');
      }
    },
// bindingは、バインドされた値・引数・修飾子のオブジェクト
// arg(引数), modifiers(修飾子のオブジェクト),value(あたらしい値),oldValue(古い値)
    video(el,binding){
        binding.value ? el.play(): el.pause()
    }
  }
});