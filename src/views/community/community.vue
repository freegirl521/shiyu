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
import waterfall from "@/components/community/waterfall.vue"
import { setTimeout } from 'timers';
export default{
    name:"community",
    data(){
      return {
            offset:0
      }
    },
    components:{
        waterfall
    },
    methods:{//加载
        loading(){
           this.offset = this.offset +9;
            // this.offset+=9;
            console.log(this.offset);
            this.$store.dispatch("rows",this.offset);
            console.log(this.offset,11111111);
            setTimeout(()=>{
                this.warterFall('#waterfall');
            },1500)
            
        },
        warterFall(ele,child,space){
    //1. 初始化参数
    if(!ele){return;}
    child = child || 'div';
    space = space || 30;//行距
    //2. 获取大盒子
//console.log(this.$refs,1111);
   // 
   console.log(ele);
var oBigBox=document.querySelector(ele);   
    //3. 获取所有的子节点
    let oChilds = oBigBox.children;
    //4. 计算大盒子的宽度
    // console.log(oBigBox.childWidth);
    let bigBoxWidth = oBigBox.offsetWidth;
    //5. 计算一个子节点的宽度
   let childWidth = oChilds[0].offsetWidth;
    //6. 计算列数
    let colNum = Math.floor(bigBoxWidth / childWidth);
    //7. 计算列之的间隙
    let padding = Math.floor((bigBoxWidth - (colNum * childWidth)) / (colNum + 1));
    //8. 创建一个数组,存放坐标值
    let arr = [];
    //初始化第一行的坐标值
    for(let i = 0;i < colNum;i ++){
        let obj = {};
        obj.left = padding * (i + 1) + childWidth * i;
        obj.top = space;
        arr.push(obj);
    }
    //9. 对号入座
    for(let i = 0,len = oChilds.length;i < len;i ++){
        var index = this.minHeight(arr); //求出最小高度列的下标值
        //定位每一个子节点
        oChilds[i].style.position = 'absolute';
        //设置坐标
        // sport(oChilds[i],{left : arr[index].left,top : arr[index].top});
		oChilds[i].style.left = arr[index].left + 'px';
		oChilds[i].style.top = arr[index].top + 'px';
        arr[index].top += space + oChilds[i].offsetHeight;
        oBigBox.style.height = arr[index].top + 'px';
    }
},
minHeight(arr){
    var index = 0;
    var min = arr[0].top;
    for(let i = 0,len = arr.length;i < len;i ++){
        if(min > arr[i].top){
            min = arr[i].top;
            index = i;
        }
    }
    return index;
}
    },
    mounted(){
        this.$store.dispatch("topimg");
        this.$store.dispatch("rows",this.offset);
        setTimeout(()=>{
                this.warterFall('#waterfall');
            },1500)
    }
    
    
}
</script>
<style scoped>
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




