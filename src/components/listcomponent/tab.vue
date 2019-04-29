<template>
	
		<div class="area"> 
			<div class="line2">
				<span @click="tabsFun(0)">热门商区</span>
				<span @click="tabsFun(1)">行政区</span>
				<span @click="tabsFun(2)">地铁线</span>
				
			</div>
			<hot v-show="tabs == 0"></hot>
			<district v-show="tabs == 1"></district>
			<subway v-show="tabs == 2"></subway>
	</div>
	
	<!-- 不使用二级路由，使用组件即可 -->
	 
	
		
	

</template>

<script>
import hot from "./hot.vue"
import district from "./district.vue"
import subway from "./subway.vue"
	export default{
		name:"tab",
		data() {
			return {
				tabs: 0
			}
		},
		components:{
			hot,
			district,
			subway
		},
		methods:{
			tabsFun(index){
				this.tabs = index;
			}
		}
	}
</script>

<style>
</style>
