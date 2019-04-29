<template>
    <div>
        <el-carousel :interval="5000" arrow="never">
            <el-carousel-item v-for="item in $store.state.community.imgList" :key="item.id" autoplay="true" >
            <img :src="item.img" class="image">
            <div class="fall">{{ item.id }}</div>
            </el-carousel-item>
        </el-carousel>
        <waterfall></waterfall>
        <div style="position:relative">
            <div class="pic" @click="loading"></div><!--点击请求9条数据-->
        </div>
        
    </div>
</template>


<script>
import "@/assets/style-community/index.css";
import waterfall from "../components/community/waterfall.vue"

export default{
    name:"community",
    data(){
      return {
            offset:9
      }
    },
    components:{
        waterfall
    },
    methods:{//加载
        loading(){
            this.offset+=9;
             this.$store.dispatch("rows",this.offset);
             console.log(this.offset,11111111);
        }
    },
    mounted(){
        this.$store.dispatch("topimg");
        this.$store.dispatch("rows",this.offset);
    }
    
    
}
</script>
<style>
    .el-carousel__item>img{
        width: 1200px;
        height: 200px;
    }
    .el-carousel{
        width:1200px;
        height:200px;
        margin:0 auto;
    }
    .el-carousel__item {
        width: 1200px;
        height: 200px;
    }
    div.el-carousel__container {
        position: relative;
        height: 200px;
    }
    ul.el-carousel__indicators {
        left: 935px;
       
    }
    .pic{
        cursor: pointer;
    }
 
</style>




