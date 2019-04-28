<template>
	<div class="choice">
		<div class="choice1">
			<div class="tg" @click="group">
				<img src="../../static/img/listimg/bdj.png" v-show="imgPic">
				<img src="../../static/img/listimg/hdj.png" v-show="!imgPic">
				<span :class="!imgPic?'red':'active'">有团购</span>
			</div>
			<div class="tg" @click="seat">
				<img src="../../static/img/listimg/bdj.png" v-show="imgPic1">
				<img src="../../static/img/listimg/hdj.png" v-show="!imgPic1">
				<span :class="!imgPic1?'red':'active'">可定座</span>
			</div>
			<div class="tg" @click="send">
				<img src="../../static/img/listimg/bdj.png" v-show="imgPic2">
				<img src="../../static/img/listimg/hdj.png" v-show="!imgPic2" >
				<span :class="!imgPic2?'red':'active'">可外卖</span>
			</div>
			<ul>
				<li>
					<a href="javascript:;"  @click="choice"
					:class="this.four.commentscore?'red':'active'">好评</a>
					<span @click="sp">
						<img src="../../static/img/listimg/bxx.png" v-show="!(this.four.commentscore && this.spa)">
						<img src="../../static/img/listimg/hxx.png" v-show="this.four.commentscore && this.spa">
					</span>
				</li>
				<li>
					<a href="javascript:;"  @click="choice"
					:class="this.four.savesum?'red':'active'">人气</a>
					<span @click="sp">
					<img src="../../static/img/listimg/bxx.png" v-show="!(this.four.savesum && this.spa)">
					<img src="../../static/img/listimg/hxx.png" v-show="this.four.savesum && this.spa">
					</span>
				</li>
				<li>
					<a href="javascript:;"  @click="choice"
					:class="this.four.taste?'red':'active'">口味</a>
					<span @click="sp">
					<img src="../../static/img/listimg/bxx.png" v-show="!(this.four.taste && this.spa)">
					<img src="../../static/img/listimg/hxx.png" v-show="this.four.taste && this.spa">
					</span>
				</li>
			</ul>
			<div class="sort">
				<a href="javascript:;">其他排序
				<img src="../../static/img/listimg/jt.png">
				</a>
			</div>
			<div class="aver" @click="avea">
				<a href="javascript:;">人均
				<img src="../../static/img/listimg/jt.png">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import _ from "lodash"
	
	export default{
		name:"choice",
		data(){
			return{
				imgPic:true,
				imgPic1:true,
				imgPic2:true,
				spa:true,
				price:true,
				four:{
					commentscore:true,
					savesum:false,//人气
					taste:false,//口味 
					price:false//人均消费

				},
				sortType:"",
				
			}
		},
		mounted(){
			
			//this.fn3()
		},
		methods:{
			group(){				
				this.imgPic=!this.imgPic
				let obj = this.$store.state.list.req
				obj.group= this.imgPic ? 0 : 1;
				this.$store.dispatch("group",obj)	
				console.log(obj,22222)
			},
			seat(){
				this.imgPic1=!this.imgPic1
				let obj = this.$store.state.list.req
				obj.draw= this.imgPic1 ? 0 : 1
				this.$store.dispatch("group",obj)	
			},
			send(){
				this.imgPic2=!this.imgPic2
				let obj = this.$store.state.list.req
				obj.outer= this.imgPic2 ? 0 : 1
				this.$store.dispatch("group",obj)	
			},
			choice(e){
				for(var value in this.four){
					this.four[value] = false
				}
				switch (e.target.innerHTML){
					case '好评':
					this.four.commentscore=true
					this.sortType = 'commentscore'
						break;
					case '人气':
					this.four.savesum=true
					this.sortType = "savesum"
						break;
					case '口味':
					this.four.taste=true
					this.sortType = "taste"
					
						break;
					case '人均':
					this.four.price=true
					this.sortType = 'price'
						break;
					default:
						break;
				}
				let obj = this.$store.state.list.req
				obj.sortType = this.sortType
				obj.sort = "DESC"
				this.$store.dispatch("choice",obj)
			},
			sp(){
				this.spa = !this.spa
				let obj = this.$store.state.list.req
				obj.sortType = this.sortType
				obj.sort = this.spa ? "ASC" : "DESC"
				this.$store.dispatch("choice",obj)
			},
			avea(){
				this.price = !this.price
				let obj = this.$store.state.list.req
				obj.sortType = this.sortType
				obj.sort = this.spa ? "ASC" : "DESC"
				this.$store.dispatch("avea",obj)
			},
			
		}
	}
</script>

<style scoped>
	.active{
		color: #ABABAB !important;
	}
	.red{
		color: red !important;
	}
	
</style>
