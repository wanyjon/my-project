<template>
  <div class="hello">
    <Affix>
    <Row>
      
      <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
        </Layout>
      </div>
      
    </Row>
    </Affix>
    <!-- <Row>
        <Col span="12"><h1>{{ msg }}</h1></Col>
        <Col span="12"><h2>Essential Links</h2></Col>
    </Row> -->
    <!-- <br> -->
    <Row >
        <Col span="12" v-for="item in items" align="center" style="margin-top: 15px;margin-bottom: 15px">
          <!-- <img :src="img"> -->
          <Card style="width:320px" >
            <div style="text-align:center">
              <img :src="item.imgUrl" width="120" height="160" >
              <h3>{{item.name}}</h3>
            </div>
          </Card>
        </Col>
        <!-- <Col span="8"><Page :total="100"></Page></Col> -->
        <!-- <Col span="8">col-8</Col> -->
    </Row>
    <!-- <br> -->
    <Row>
      <Col>
        <Page :total="total" @on-change="pageSwitch" show-total></Page>
      </Col>
    </Row>
    <Row>
        <Col span="12"><Button type="primary" @click="postData()">Primary</Button></Col>
        <!-- <Col span="6"></Col> -->
        <!-- <Col span="6"></Col> -->
        <Col span="12"><Button type="ghost" @click="getData()">Ghost</Button></Col>
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
    }
  },
  methods:{
    getData () {
      var _this = this;
      this.$http.get('http://localhost:8989/findAll/1/10',{params:{
        data:'hah'
      }}).then(function(respone){
        console.log(respone);
        _this.msg = respone.data.size;
        _this.img = respone.data.content[0].imgUrl;
        _this.items = respone.data.content;
        _this.total = respone.data.totalElements;

      })
    },
    postData(){
      this.$http.post('http://localhost:9000/user',{firstName:'hello',lastName:'world'}).then(function(respone){
        console.log(respone)
      })
    },
    pageSwitch(page){
      console.log('http://localhost:8989/findAll/'+page+'/10')
      var _this = this;
      this.$http.get('http://localhost:8989/findAll/'+page+'/10',{params:{
        data:'hah'
      }}).then(function(respone){
        console.log(respone);
        _this.msg = respone.data.size;
        _this.img = respone.data.content[0].imgUrl;
        _this.items = respone.data.content;
        _this.total = respone.data.totalElements;

      })
    }
  },
  created: function(){
      var _this = this;
      this.$http.get('http://localhost:8989/findAll/1/10',{params:{
        data:'hah'
      }}).then(function(respone){
        console.log(respone);
        _this.msg = respone.data.size;
        _this.img = respone.data.content[0].imgUrl;
        _this.items = respone.data.content;
        _this.total = respone.data.totalElements;

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
