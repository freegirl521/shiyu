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
				let arr = Array.from(document.querySelectorAll("span") ) 
				arr.forEach(item => {
					item.className = ''
				})
				let obj = this.$store.state.list.req
				
				obj.shopAds = e.target.innerHTML 
				this.$store.dispatch("address",
					obj
				)
				e.target.className = "active"
			}
	}
}
</script>

<style scoped>
	.active{
		color: red;
	}
</style>
