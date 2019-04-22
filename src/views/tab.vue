<template>
	
		<div class="area"> 
		<div class="line2">
			<router-link to="/hot"><span>热门商区</span></router-link>
			<router-link to="/district"><span>行政区</span></router-link>
			<router-link to="/subway"><span>地铁线</span></router-link>
			
		</div>
		<router-view></router-view>
	</div>
	
	
	 
	
		
	

</template>

<script>
	export default{
		name:"tab"
	}
</script>

<style>
</style>
