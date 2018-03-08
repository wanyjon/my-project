<template>
	<div>
		<!-- <h1>im test</h1> -->
		<Row>
			<Col span="18" offset="3">
				<Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="settings"></Icon>
            综合设置
        </MenuItem>
        <!-- <Icon type="earth" size="1000px"></Icon> -->
    	</Menu>
			</Col>
			
		</Row>
		<Row>
			<Col span="18" offset="3">
				<Carousel autoplay v-model="value2" loop autoplay-speed="4000">
			        <CarouselItem>
			            <div class="demo-carousel">
			            	<img src="http://www.jurassicworld.com/sites/default/files/2018-02/jw_homepage_hero_dsktp_2880x796.jpg">
			            </div>
			        </CarouselItem>
			        <CarouselItem>
			            <div class="demo-carousel">
			            	<img src="http://www.jurassicworld.com/sites/default/files/2017-12/jw_homepage_hero_dsktp_2880x796%20%283%29_0.jpg">
			            </div>
			        </CarouselItem>
			        <CarouselItem>
			            <div class="demo-carousel">
			            	<img src="http://www.jurassicworld.com/sites/default/files/2017-12/jw_homepage_hero_dsktp_2880x796%20%281%29_0.jpg">
			            </div>
			        </CarouselItem>
		    	</Carousel>
			</Col>
		</Row>
		<Row>
			<Col span="18" offset="3" style="background: #1c2438">
			
			</Col>
		</Row>
		
		<!-- <img src="@/assets/back.jpg"> -->
	</div>
</template>
<script type="text/javascript">
	export default {
		// created: function(){
		// 	alert("hey")
		// 	console.log("hah");
		// },
		// mounted:function(){
		// 	alert("hello");
		// 	console.log("qq")
		// }   
    }
</script>