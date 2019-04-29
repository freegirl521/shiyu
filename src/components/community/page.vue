<template>
   
	<div class="pagination" disabled="true">
        <el-pagination
           
            prev-text="上一页"
            next-text="下一页"
            layout="prev, pager, next"
            :page-count="Math.ceil($store.state.communitymessage.total/pagesize)"
			@size-change="pageSize"
            @current-change ="v=>this.$store.dispatch('rows',{postId,pageNum:v})"
             >
        </el-pagination>
    </div>
        
   
</template>

<script>
	export default{
        name:"page",
        data(){
			return{
					pagesize:2,

			}
		
		},	
		methods:{
			search(postId,pageNum){
				this.$store.dispatch("rows",{postId:$store.state.communitymessage.rows.id,pageNum:1});
				console.log(postId,pageNum,22222222229);
			},	
			pageSize(pageSize){
				pageSize=this.pagesize;
				console.log(pageSize,7878);
				// var page=Math.cell($store.state.communitymessage.total/pagesize)
			}		
		}
	}
</script>

<style scoped>
.pagination{	
	width: 1140px;
	margin: 0 auto;
	background: #fff;
}
		/*
	.el-pager li{
		background: #F55465 !important;
		color: #FFFFFF !important;
	}
	.el-pager li.active{
		background: #DE1C31 !important;
	} */
	.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;
    text-align: center;
	}
</style>


