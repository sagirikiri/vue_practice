var app = new Vue({
  el:'#app',
  data: {
    message: 'Hello,Vue.js',
    list: ['りんご','みかん','いちご'],
    show: false,
    name: 'ほげほげ',
    creatures: [{id:1, name:'ゴブリン', hp:300},
                {id:2, name:'スライム', hp:500},
                {id:3, name:'ドラゴン', hp:100}
                ],
    text: '',
    width: 800
    },
   methods: {
      handleClick: function(event){
        alert(event.target)
      },
      doAdd: function(){
        var max = this.creatures.reduce(function(a, b){
            return a.id > b.id? a.id:b.id
        },0)
        this.creatures.push({
          id: max+1,
          name: this.name,
          hp:500
        })
      },
      doRemove: function(index){
        this.creatures.splice(index,1)
      },
      doAttack: function(index){
        this.creatures[index].hp -= 10
      },
   },
     created: function(){
        this.list.forEach(function(item){
          this.$set(item, 'active',false)
        },this);  // this.$setメソッドは、プロパティの追加や要素の書き換えに使われる
   },
   computed: {
     halfWidth: {
        get: function() { 
          return this.width / 2
        },
        set: function(val){ 
          this.width = val * 2
        }
     }
   }
});

var sort = new Vue({
  el:'#chap4',
  data:{
    budget:300,
    limit:10,
    list: [
        {id: 1, name: 'りんご', price: 100},
        {id: 2, name: 'ばなな', price: 200},
        {id: 3, name: 'いちご', price: 500}
      ],
    order: false
  },
  watch: {
    list: {
        handler: function(newVal, oldVal){
          // listが変化したときに行いたい処理
        }
    },
    deep: true,
    immidiate: true
  },
  created: function(){
    this.$watch('value',function(newVal,oldVal){
      //　メソッド内でのウォッチャの登録
    })
  },
  computed:{
    matched: function(){
      return this.list.filter(function(el){
        return el.price <= this.budget
      },this)
    },
    sorted: function(){
      return _.orderBy(this.matched,'price',this.order? 'desc':'asc')
    },
    limited: function(){
      return this.sorted.slice(0,this.limit)
    },
  }
});


