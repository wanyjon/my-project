<template>
  <div class="hello">

    <!-- <Affix> -->
    <Row>
      <Col align="center">
        <div style="margin-top: 15px;margin-bottom: 15px">
          <Page :total="total" @on-change="pageSwitch" show-total :current="page"></Page>
        </div>
        
      </Col>
    </Row>
    <Row >
        <Col span="12" align="center" offset="6">
          <!-- <img :src="img"> -->
          <Row>
            <Col span="12" v-for="item in items"style="margin-top: 15px;margin-bottom: 15px">

              <Card :bordered="false" dis-hover>

                <div style="text-align:center">

                  <Row>
                    <Col span="12">
                      <img :src="item.imgUrl" width="120px" height="160px">
                    </Col>
                    <Col align="left">
                      <div>
                        <router-link :to="{params:{obj:item},name:'HelloVue'}"><h3 style="color: #2d8cf0">{{item.name}}</h3></router-link>
                        <p>状态：{{item.status}}</p>
                        <p>{{item.formerly}}</p>
                        <p>{{item.alias}}</p>
                        <p>{{item.tvstation}}</p>
                        <p>年份：{{item.year}}年</p>
                        <p>{{item.classify}}</p>
                      </div>
                      
                    </Col>
                  </Row>
                  
                  

                </div>
            </Card>
            </Col>
          </Row>
        </Col>
    </Row>
    <!-- <br> -->
    <Row>
      <Col align="center">
        <Page :total="total" @on-change="pageSwitch" show-total :current="page"></Page>
      </Col>
    </Row>
    <Row>
       
    </Row>
  
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {

    return {
      msg: 'Welcome to Your Vue.js App',
      img: 'http://img.kukan5.com:808/pic/uploadimg/2016-11/338.jpg',
      items:[],
      total:0,
      page:1
      // to: ''
    }
  },
  methods:{
    getData () {
      var _this = this;
      this.$http.get('http://192.168.0.84:8989/findAll/1/10',{params:{
        data:'hah'
      }}).then(function(respone){
        console.log(respone);
        _this.msg = respone.data.totalPage;
        _this.img = respone.data.list[0].imgUrl;
        _this.items = respone.data.list;
        _this.total = respone.data.totalCount;

      })
    },
    postData(){
      this.$http.post('http://192.168.0.84:9000/user',{firstName:'hello',lastName:'world'}).then(function(respone){
        console.log(respone)
      })
    },
    pageSwitch(page){
      console.log('http://192.168.0.84:8989/findAll/'+page+'/10')
      var _this = this;
      this.$http.get('http://192.168.0.84:8989/findAll/'+page+'/10',{params:{
        data:'hah'
      }}).then(function(respone){
        console.log(respone);
        _this.msg = respone.data.totalPage;
        _this.img = respone.data.list[0].imgUrl;
        _this.items = respone.data.list;
        _this.total = respone.data.totalCount;
        _this.page = page;

      })
    }
  },
  created: function(){
      var _this = this;
      this.$http.get('http://192.168.0.84:8989/findAll/1/10',{params:{
        data:'hah'
      }}).then(function(respone){
        console.log(respone);
        _this.msg = respone.data.totalPage;
        _this.img = respone.data.list[0].imgUrl;
        _this.items = respone.data.list;
        _this.total = respone.data.totalCount;
        _this.to = '/foo/'+respone.data.list;

      })
  },
  mounted:function(){
      // alert("hello");
      // console.log("qq")
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
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
