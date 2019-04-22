<template>
	<div class="choice">
		<div class="choice1">
			<div class="tg" @click="fn">
				<img src="../static/img/bdj.png" v-show="imgPic">
				<img src="../static/img/hdj.png" v-show="!imgPic">
				<span :class="this.cur===1?'red':'active'">有团购</span>
			</div>
			<div class="tg" @click="fn1">
				<img src="../static/img/bdj.png" v-show="imgPic1">
				<img src="../static/img/hdj.png" v-show="!imgPic1">
				<span :class="this.cur1===2?'red':'active'">可定座</span>
			</div>
			<div class="tg" @click="fn2">
				<img src="../static/img/bdj.png" v-show="imgPic2">
				<img src="../static/img/hdj.png" v-show="!imgPic2" >
				<span :class="this.cur2===3?'red':'active'">可外卖</span>
			</div>
			<ul>
				<li @click="fn3">
					<a href="javascript:;">好评</a>
					<img src="../static/img/bxx.png" v-show="imgPic3">
					<img src="../static/img/hxx.png" v-show="!imgPic3">
				</li>
				<li @click="fn4">
					<a href="javascript:;">人气</a>
					<img src="../static/img/bxx.png" v-show="imgPic4">
					<img src="../static/img/hxx.png" v-show="!imgPic4">
				</li>
				<li @click="fn5">
					<a href="javascript:;">口味</a>
					<img src="../static/img/bxx.png" v-show="imgPic5">
					<img src="../static/img/hxx.png" v-show="!imgPic5">
				</li>
			</ul>
			<div class="sort">
				<a href="javascript:;">其他排序
				<img src="../static/img/jt.png">
				</a>
			</div>
			<div class="aver">
				<a href="javascript:;">人均
				<img src="../static/img/jt.png">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"choice",
		data(){
			return{
				imgPic:true,
				imgPic1:true,
				imgPic2:true,
				cur:0,
				cur1:0,
				cur2:0,
				imgPic3:true,
				imgPic4:true,
				imgPic5:true,
			}
		},
		methods:{
			fn(){
				
				this.imgPic=!this.imgPic
				this.cur=(this.cur-1)*-1;
			},
			fn1(){
					this.imgPic1=!this.imgPic1
					this.cur1=(this.cur1-2)*-1;
			},
			fn2(){
				this.imgPic2=!this.imgPic2
				this.cur2=(this.cur2-3)*-1;
			},
			fn3(){
				this.imgPic3=!this.imgPic3
			},
			fn4(){
				this.imgPic4=!this.imgPic4
			},
			fn5(){
				this.imgPic5=!this.imgPic5
			},
		}
	}
</script>

<style>
	.active{
		color: #ABABAB !important;
	}
	.red{
		color: red !important;
	}
	
</style>
