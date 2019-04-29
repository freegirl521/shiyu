<template>
	<div class="page">
		<div class="page1">
			<!-- <img src="../static/img/hz.png"> -->
			<!-- <el-pagination
			  background
			  layout="prev, pager, next"
				
			  :current-page="this.$store.state.list.res.pageNum"
			   @current-change="handleCurrentChange"		 
			  >
			</el-pagination> -->
			<!-- :page-count="this.$store.state.list.res.total" -->
			<!-- <img src="../static/img/hy.png"> -->
		</div>
	</div>
	
</template>

<script>
	import {mapState} from "vuex"
	export default{
		name:"page",
		
// 		data(){
// 			return{
// 				/* curpage:1,//默认在第一页
// 				pagesize:3,//默认每页的数量
// 				pagecount:20 *///默认的显示的数量
// 				
// 			}
// 		},
		/* computed:mapState({
			pageNum:state=>state.pageNum
		}), */
		created() {
// 			this.$http.get("/MultitermSearch").then((data)=>{
// 				
// 			})
			console.log(this.$store.state.list.res)
			},
			
		methods:{
			handleCurrentChange(){
				/* console.log(pageNum) */
				//this.$store.dispatch("handleCurrentChange",pageNum)
			},
			
		}
	}
</script>

<style scoped>
	.el-pagination.is-background .btn-prev{
		width: 30px;
		height: 30px;
	}
	.el-pager li{
		background: #F55465 !important;
		color: #FFFFFF !important;
	}
	.el-pager li.active{
		background: #DE1C31 !important;
	}
</style>
