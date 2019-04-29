<template>

    <el-pagination
            background
            @current-change="handleCurrentChange"
            :pager-count="5"
            layout="prev, pager, next"
            :total="100"
            :current-page.sync="this.pageColl.pageNum"
            prev-text="上一页"
            next-text="下一页"
    >
    </el-pagination>


</template>

<script>
    export default {
        name: "pageCenter",
        props:['page-coll',],
        methods:{
            handleCurrentChange(){
               /* getComment({commit},data){
                    axios.get("/",{
                        userid:0,
                        pageNum:data.pageIndex,
                        pageSize:2
                    }).then(data=>{
                        commit("GET_COMMENT_INFO",data)
                    })
                }*/
            }
        }
    }



</script>

<style scoped>
   .el-pager li{
       background: #DE1C31 !important;
       opacity: 0.7 !important;
       color: white !important;
   }
   .el-pager li.active{
       background: #DE1C31 !important;
       opacity: 1 !important;
   }

</style>