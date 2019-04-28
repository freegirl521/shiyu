<template>
	<div class="nav-area">
		<div class="nav-area1">
			<h4>地点:</h4>
			<div class="bx"><a href="javascript:;">不限</a></div>
			<tab></tab>
		</div>
		
	</div>
</template>

<script>
	import tab from "./tab.vue"
	 
	export default{
		name:"navarea",
		components:{
			tab
		}
	}
</script>

<style scoped>
</style>
