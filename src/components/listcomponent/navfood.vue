<template>
	<div class="nav-food">
		<div class="nav-food1">
			<div class="left">
				<h4>分类:</h4>
				<a href="javascript:;" class="no">不限</a>
			</div>
			<!-- {{$store.state.list.listtype.footTypes}} -->
			<ul class="ufooda left">
				<li v-for="item in $store.state.list.listtype.footTypes" :key="item.id"><a href="javascript:;" class="item.id===catId?'active' : ''" @click="food(item.id)">{{item.footname}}</a></li>
			</ul>
			<!-- <span class="ufooda" v-for="item in this.navfood">
				<a href="javascript:;" :key="item.id" ><span class="item.id===catId ? 'active' : ''">{{item.footname}}</span></a>
			</span> -->
			<!-- 	<a href="javascript:;"><span>小吃快餐</span></a>
				<a href="javascript:;"><span>下午茶</span></a>
				<a href="javascript:;"><span>北京菜</span></a>
				<a href="javascript:;"><span>湘菜</span></a>
				<a href="javascript:;"><span>素食</span></a>
				<a href="javascript:;"><span>家乡菜</span></a>
				<a href="javascript:;"><span>火锅</span></a>
				<a href="javascript:;"><span>饮品店</span></a>
				<a href="javascript:;"><span>咖啡厅</span></a>
				<a href="javascript:;"><span>私房菜</span></a>
				<a href="javascript:;"><span>创意菜</span></a>
				<a href="javascript:;" class="lasta"><span>东南亚菜</span></a>
				
				
				<a href="javascript:;"><span>烧烤自助餐</span></a>
				<a href="javascript:;"><span>粤菜</span></a>
				<a href="javascript:;"><span>江河湖海鲜</span></a>
				<a href="javascript:;"><span>东北菜</span></a>
				<a href="javascript:;"><span>西北菜</span></a>
				<a href="javascript:;"><span>粉面馆</span></a>
				<a href="javascript:;"><span>面包甜点</span></a>
				<a href="javascript:;"><span>川菜</span></a>
				<a href="javascript:;"><span>日本菜</span></a>
				<a href="javascript:;"><span>特色菜</span></a>
				<a href="javascript:;"><span>徽菜</span></a>
				<a href="javascript:;" class="lasta"><span>湖北菜</span></a>
				
				<a href="javascript:;"><span>韩国料理</span></a>
				<a href="javascript:;"><span>云贵菜</span></a>
				<a href="javascript:;"><span>小龙虾</span></a>
				<a href="javascript:;"><span>本帮江浙菜</span></a>
				<a href="javascript:;"><span>早茶</span></a>
				<a href="javascript:;"><span>水果生鲜</span></a>
				<a href="javascript:;"><span>食品保健</span></a>
				<a href="javascript:;"><span>西餐</span></a>
				<a href="javascript:;"><span>新疆菜</span></a>
				<a href="javascript:;"><span>人气餐厅</span></a>
				<a href="javascript:;"><span>鲁菜</span></a>
				<a href="javascript:;" class="lasta"><span>台湾菜</span></a> -->
				
			
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import {mapState} from "vuex"
	export default{
		name:"navfood",
		data(){
			return{
				/* navfood:"", */
				/* cityId:1,
				catId:1 */
				
			}
		},
		methods:{
			food(num){
				this.$store.dispatch("food",{
					shopType:num
				})
				
			}
			
		},
		/* created(){
			axios.get("/MultitermSearch").then((data)=>{
			 	console.log(data.data,2256); 
		
			this.navfood=data.data.footTypes;
			})
			console.log(this.navfood,852)
		}, */
		mounted(){
			
			/* console.log(this.$route) */
			
		}
	}
</script>

<style scoped>
	.left{
		float: left;
	}
	.nav-food{
		width: 100%;
		
	}
	.nav-food .nav-food1{
		width: 1200px;
		background: white;
		margin: 0 auto;
		overflow: hidden;
	}
	.nav-food .nav-food1 h4{
		margin-left: 30px;
		width: 37px;
		height: 14px;
		font-size: 14px;
		color: #111111FF;
		
	    display: inline-block;
		padding-top: 20px;
	}
	.nav-food .nav-food1 .no{
		width:29px;
		height:13px;
		font-size:14px;
		font-family:PingFangSC-Light;
		
		color:rgba(17,17,17,1);	
		margin-top: 25px;
		margin-left: 15px;
	}
	.nav-food .nav-food1 .ufooda li{
		display: inline-block;
		float: left;
		padding-bottom: 8px;
		text-align: left;
		height: 21px;
		line-height: 21px;
	}
	.nav-food .nav-food1 .ufooda{
		padding-top: 20px;
		/* margin-left: 15px; */
		width: 1075px;
		
	}
	.nav-food .nav-food1 .ufooda li a{
		font-size: 14px;
		margin-left: 19px;
		/* text-align: center; */
		width: 70px;
		display: inline-block;
		/* display:block; */
		
	}
	.nav-food .nav-food1 .ufooda li a:hover{
		color: white;
		background: #DE1C31FF;
		border-radius:5px;
		text-align: center;
	}
	
	.nav-food .nav-food1 .ufooda li a.active{
		color: white;
		background: #DE1C31FF;
		border-radius:5px;
	}

</style>
