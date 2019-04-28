<template>
	<div class="biglist">
		<!-- {{$store.state.list.listtype.pageInfo.list}} -->
		<!-- t -->
	<template>
	<div class="list" v-for="(item,index) in (!!$store.state.list.listtype.pageInfo ? $store.state.list.listtype.pageInfo.list : [])" :key="index">
		<div class="list1" >
			<img :src="item.shopphoto" alt="" class="pic">
			<div class="text">
				<a href="#" class="name">{{item.shopname}}</a>
				<a href="#" class="name">人均:<span>{{item.price}}</span></a>
				<div class="imgs">
				<el-rate
                 v-model="item.commentscore"
                 disabled
				 :colors="['#FF2B3B', '#FF2B3B', '#FF2B3B']"
                 text-color="red"
                 score-template="{value}">
                 </el-rate>
				</div>
				<p class="foodss">
					<a href="javascript:;">推荐菜:</a>
					<span v-for="(item,index) in item.menus">
						<a href="javascript:;">{{item}}</a>
						</span>
					
<!-- 					<a href="javascript:;">{{item.menus}}</a>
					<a href="javascript:;">{{item.menus}}</a> -->
				</p>
				<p class="wz">
					<a href="javascript:;">{{item.footname}}</a>
					<a href="javascript:;">{{item.shopads}}</a>
				</p>
			</div>
			<div class="tdw">
				<img v-show="item.draw" src="../../static/img/listimg/ding.png"  alt="">
				<img v-show="item.group" src="../../static/img/listimg/tuan.png" alt="">
				<img v-show="item.outer" src="../../static/img/listimg/wai.png" alt="">
			</div>
			<div class="score">
				<h4>环境:<span>{{item.taste | numFilter}}</span></h4>
				<h4>口味:<span>{{item.environment | numFilter}}</span></h4>
				<h4>服务:<span>{{item.serve | numFilter}}</span></h4>
			</div>
		</div>
		
	</div>
	</template>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:"biglist",
	/* 	props:["value"], */
		data(){
			return{	
				// navlist:"",
				value:3.7
			}
		},
		created() {
			// console.log(this.$store.state,220)
		},
		mounted(){
			// this.$store.dispatch("multitermSearch",{shopName:'三里屯'});
			// console.log(this.$store.state.list.listtype,235)
		}
// 		created() {
// 			axios.get('/MultitermSearch')
// 			.then((data)=> {
// 
// 				// this.navlist=data.data.pageInfo.list;
// 				console.log(this.navlist,2222)
// 			})
// 			fetch('/FootTypeList',{
// 				method: 'GET'
// 			}).then(response => {
// 				console.log(response,223)
// 				return response.json()
// 			}).then(data => {
// 				console.log(data,555)
			//})
		// }
		
	}
</script>

<style scoped>
	.el-rate__icon{
		font-size: 20px !important;
	}
</style>
