<template>
	<div class="page">
		<div class="page1">
			<!-- <img src="../../static/img/listimg/hz.png"> -->
			<el-pagination
			 background
			 layout="prev, pager, next" 
			 @current-change="handleCurrentChange"
			 :page-count="!!$store.state.list.listtype.pageInfo ? $store.state.list.listtype.pageInfo.pages : 0"
			 > 
			 </el-pagination>
			<!-- {{this.$store.state.list.req}} -->
			<!-- @current-change="handleCurrentChange"	 -->
			<!-- :current-page="this.$store.state.list.listtype.pageInfo.pageNum" -->
			<!-- {{this.$store.state.list.listtype.pageInfo.pages}} -->
			<!-- :page-count="this.$store.state.list.res.total" -->
			<!-- <img src="../../static/img/listimg/hy.png"> -->
		<!-- 	<el-pagination
									@current-change="handleCurrentChange"
									:current-page.sync="currentPage"
									:page-size="100"
									layout="prev, pager, next, jumper"
									:total=$store.state.page.pageSum
									prev-text="上一页"
									next-text="下一页"
									>
								</el-pagination> -->
		</div>
	</div>
	
</template>

<script>
	import {mapState} from "vuex"
	export default{
		name:"page",
		
		/* data(){
			return{
				total:""
			}
		}, */
		/* computed:mapState({
			pageNum:state=>state.pageNum
		}), */
		created() {
// 			this.$http.get("/MultitermSearch").then((data)=>{
// 				
// 			})
			/* console.log(this.$store.state.list.res) */
			},
			
			
		methods:{
			handleCurrentChange(pageNum){
				let obj = this.$store.state.list.req 
				obj.pageNum = pageNum
				// console.log(this.$store.state.list.listtype,2150)
				this.$store.dispatch("handleCurrentChange",obj)
				// console.log(req,820)
			},
			
		}
	}
</script>

<style scoped>
	.el-pagination.is-background .btn-prev{
		width: 30px !important;
		height: 30px !important;
	}
	.el-pager li{
		background: #F55465 !important;
		color: #FFFFFF !important;
	}
	.el-pager li.active{
		background: #DE1C31 !important;
	}
	.page{
		margin-bottom: 20px;
	}
</style>
