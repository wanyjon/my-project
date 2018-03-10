<template>
  <div id="app">
    <Affix>
      <Row>
        <Col>
          <div>
              <Menu mode="horizontal" :theme="theme1" active-name="1">
                  <MenuItem name="1">
                      <Icon type="ios-paper"></Icon>
                      首页
                  </MenuItem>
                  <MenuItem name="2">
                      <Icon type="ios-people"></Icon>
                      排行榜
                  </MenuItem>
                  <Submenu name="3">
                      <template slot="title">
                          <Icon type="stats-bars"></Icon>
                          剧集频道
                      </template>
                      <!-- <MenuGroup title="使用"> -->
                          <MenuItem name="3-1"><router-link :to="{params:{obj:item},name:'HelloWorld'}">魔幻/科幻</router-link></MenuItem>
                          <MenuItem name="3-2">灵异/惊秫</MenuItem>
                          <MenuItem name="3-3">都市/情感</MenuItem>
                      <!-- </MenuGroup> -->
                      <!-- <MenuGroup title="留存"> -->
                          <MenuItem name="3-4">犯罪/历史</MenuItem>
                          <MenuItem name="3-5">选秀/综艺</MenuItem>
                          <MenuItem name="3-6">动漫/卡通</MenuItem>
                      <!-- </MenuGroup> -->
                  </Submenu>
                  <MenuItem name="4">
                      <Icon type="settings"></Icon>
                      最近更新
                  </MenuItem>
              </Menu>
          </div>
        </Col>
      </Row>
    </Affix>
    
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/iview">Go to dev</router-link> -->
    <!-- <router-link to="/foo">Go to Foo</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 0px;
}
a{
  color: #495060
}
img {
    max-width: 100%;
    max-height: 100%;
}
body
  { 
  /*background-image: url(./assets/back.jpg);*/
  /*background-attachment:fixed;*/
  /*background-color: #000000;*/
  }
p{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis
}
h3{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis
}
</style>
