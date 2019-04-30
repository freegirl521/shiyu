<template>
  	<div id="box">
  		
  		<navfood></navfood>
  	
  		<navarea>
			<!-- <tab></tab> -->
		</navarea>
  		<choice></choice>
		<biglist></biglist>
  		<page></page>
		<bottom></bottom>
  </div>
</template>
<script>
	import axios from "axios"
	import "../../static/css/listcss/list.css" 
	import bottom from "../../components/bottom/bottom.vue"
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
			bottom
			
		},
		created() {
			this.$store.dispatch("getall",{
				cityId:sessionStorage.cityId      /*this.cityId  */,
				catId:this.$route.query.catId/* :,this.catId */
			
			})
		}
	}
</script>
<style scoped="">
body{
	background:rgba(248,248,248,1);
}
</style>

