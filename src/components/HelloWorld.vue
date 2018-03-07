<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    
    <Button type="primary" @click="postData()">Primary</Button>
    <Button type="ghost" @click="getData()">Ghost</Button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {

    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    getData () {
      var _this = this;
      this.$http.get('http://localhost:9000/test',{params:{
        data:'hah'
      }}).then(function(respone){
        console.log(respone);
        _this.msg = respone.data;

      })
    },
    postData(){
      this.$http.post('http://localhost:9000/user',{firstName:'hello',lastName:'world'}).then(function(respone){
        console.log(respone)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
