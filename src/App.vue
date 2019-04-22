<template>
  	<div id="box">
  		<!-- 菜品 -->
  		<navfood></navfood>
  		<!-- 地点 -->
  		<navarea></navarea>
  		<choice></choice>
		<biglist></biglist>
  		<page></page>
  </div>
</template>
<script>
	import "./static/css/list.css" 
	import navfood from "./components/navfood.vue"
	import navarea from "./components/navarea.vue"
	import choice from "./components/choice.vue"
	import biglist from "./components/biglist.vue"
	import page from "./components/page.vue"
	export default{
		components:{
			navfood,
			navarea,
			choice,
			biglist,
			page,
			
		}
	}
</script>
<style>

</style>

