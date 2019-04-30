<template>
   
	<div class="pagination" >
        <el-pagination
            prev-text="上一页"
            next-text="下一页"
            layout="prev, pager, next, jumper"
            :page-count="Math.ceil($store.state.communitymessage.total/pagesize)"
			:page-size="2"
            @current-change ="handleChange"
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
			handleChange(val){
				console.log(val);
				this.$emit("hh",val)
				this.$store.dispatch('row',{postId:this.$route.query.postId,pageNum:val})
			},	
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


