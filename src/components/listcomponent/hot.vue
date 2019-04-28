<template>
	<div id="hot">
		<p class="line3">
			<a href="javascript:;" @click="area"><span>三里屯</span></a>
			<a href="javascript:;" @click="area"><span>国贸</span></a>
			<a href="javascript:;" @click="area"><span>王府井</span></a>
			<a href="javascript:;" @click="area"><span>中关村</span></a>
			<a href="javascript:;" @click="area"><span>五道口</span></a>
			<a href="javascript:;" @click="area"><span>亚运村</span></a>
			<a href="javascript:;" @click="area"><span>望京</span></a>
			<a href="javascript:;" @click="area"><span>大望路</span></a>
			<a href="javascript:;" @click="area"><span>航天桥</span></a>
			<a href="javascript:;" @click="area"><span>朝外大街</span></a>
			<a href="javascript:;" @click="area"><span>亮马桥</span></a>
			<a href="javascript:;" @click="area"><span>蓝色港湾</span></a>
			<a href="javascript:;" @click="area"><span>三元</span></a>
		</p>
		<p class="line3">
			<a href="javascript:;" @click="area"><span>鼓楼东大街</span></a>
			<a href="javascript:;" @click="area"><span>南锣鼓巷</span></a>
			<a href="javascript:;" @click="area"><span>东单</span></a>
			<a href="javascript:;" @click="area"><span>远大路</span></a>
			<a href="javascript:;" @click="area"><span>五棵松</span></a>
			<a href="javascript:;" @click="area"><span>工人体育场</span></a>
		</p>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		name:"hot",
		methods:{
			area(e){
				let obj = this.$store.state.list.req
				obj.shopAds = e.target.innerHTML 
				axios.get("/MultitermSearch",{
					params:obj
				})
			}
		}
	}
</script>

<style scoped>
</style>
