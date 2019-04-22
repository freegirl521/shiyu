<template>
	<div class="page">
		<div class="page1">
			<!-- <img src="../static/img/hz.png"> -->
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :page-size="pagesize"
			  :page-count="pagecount"
			  :current-page="curpage"
			   @current-change="handleCurrentChange"
			 
			  >
			</el-pagination>
			<!-- <img src="../static/img/hy.png"> -->
		</div>
	</div>
</template>

<script>
	export default{
		name:"page",
		data(){
			return{
				curpage:1,//默认在第一页
				pagesize:3,//默认每页的数量
				pagecount:20,//默认的显示的数量
				
			}
		},
		methods:{
			handleCurrentChange(val){
				console.log(val)
				this.curpage=val;
				
				
			},
			
		}
	}
</script>

<style>
	.el-pagination.is-background .btn-prev{
		width: 30px;
		height: 30px;
	}
	.el-pager li{
		background: #F55465 !important;
		color: #FFFFFF !important;
	}
	.active{
		background: #42B983;
	}
</style>
