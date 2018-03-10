<style scoped>

</style>
<template>
    <Row>
        <Col span="18" offset="3">
            <Row>
                <Col>
                    <div style="margin-top: 15px;margin-bottom: 15px">
                        <Breadcrumb>
                            <BreadcrumbItem to="/">
                                <Icon type="ios-home-outline"></Icon> Home
                            </BreadcrumbItem>
                            <BreadcrumbItem to="/components/breadcrumb">
                                <Icon type="social-buffer-outline"></Icon> Components
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Icon type="pound"></Icon> <span>{{this.$route.params.obj.name}}</span>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style="margin-bottom: 15px">
                        <Card :bordered="false" dis-hover>
                            <p slot="title">{{this.$route.params.obj.name}}</p>
                            <img :src="this.$route.params.obj.imgUrl" width="230px" height="340px">
                            <p>{{this.$route.params.obj.synopsis}}</p>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabs>
                        <TabPane label="macOS" icon="social-apple">标签一的内容</TabPane>
                        <TabPane label="Windows" icon="social-windows">标签二的内容</TabPane>
                        <TabPane label="Linux" icon="social-tux">标签三的内容</TabPane>
                    </Tabs>
                </Col>
            </Row>
        </Col>
    </Row>
</template>
<script>
    export default {
        created: function(){
          console.log(this.$route)
        },
        mounted:function(){
          // alert("hello");
          // console.log(route.params.id)
        }
    	
    }
</script>