<template>
	<div>
		<p class="line3">
			<a href="javascript:;" @click="area"><span>三里屯</span></a>
			<a href="javascript:;" @click="area"><span>国贸</span></a>
			<a href="javascript:;" @click="area"><span>王府井</span></a>
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
	export default{
		name:"district",
		methods:{
			area(e){
				/* console.log(e.target) */
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
