<template>
  	<div id="box">
  		
  		<navfood></navfood>
  	
  		<navarea></navarea>
  		<choice></choice>
		<biglist></biglist>
  		<page></page>
  </div>
</template>
<script>
	import axios from "axios"
	import "../../static/css/listcss/list.css" 
	import navfood from "../../components/listcomponent/navfood.vue"
	import navarea from "../../components/listcomponent/navarea.vue"
	import choice from "../../components/listcomponent/choice.vue"
	import biglist from "../../components/listcomponent/biglist.vue"
	import page from "../../components/listcomponent/page.vue"
	export default{
		components:{
			navfood,
			navarea,
			choice,
			biglist,
			page,
			
		},
		created() {
			this.$store.dispatch("getall",{
				cityId:sessionStorage.cityId      /*this.cityId  */,
				catId:this.$route.query.catId/* :,this.catId */
			
			})
		}
	}
</script>
<style>

</style>

