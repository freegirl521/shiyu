<template>
        <!-- 瀑布流 -->
        <div class="waterfall"  id="waterfall" ref='box'>
            <template>
            <div class="wrap"  style="float:left" id="wrap" v-for="(item,index) in $store.state.community.rows" :key="index">
               <router-link :to="{name:'communitymessage',query:{postId:item.postId,userId:item.userId}}" class="router">
                <div ><!-- 跳转到详情页，传值：帖子id  post:id  ,用户id :userid-->
               
                    <div class="wrap-image">
                        <div class="background"></div>
                        <p class="bg"><img src="@/assets/img/community/coverage.png" alt="" title="" /></p>
                    </div>	
                    <p class="btn">{{item.userName}}</p>
                    <h3>{{item.postName}}</h3>
                    <p class="time">{{item.createdate}}</p>
                    <h4 class="content1">{{item.postText}}</h4>
                    <ul>
                        <li>
                            <img src="@/assets/img/community/count.png" alt="">
                            <h5 class="count">评论数{{item.sumComm}}条</h5>
                        </li>
                        <li>
                            <img src="@/assets/img/community/zssist.png" alt="">
                            <h5 class="count">点赞数{{item.postTop}}条</h5>
                        </li>
                    </ul>
                </div>
                </router-link>
            </div>
            
            </template>
        </div>
       
</template>
<script>

 export default {
   name:"waterfall",
   
}
</script>
<script>
window.onload=function(){
warterFall('#waterfall');
}
//onresize : 浏览器窗口尺寸改变事件.
window.onresize = function(){
    warterFall('#waterfall');
}
function warterFall(ele,child,space){
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
        var index = minHeight(arr); //求出最小高度列的下标值
        //定位每一个子节点
        oChilds[i].style.position = 'absolute';
        //设置坐标
        // sport(oChilds[i],{left : arr[index].left,top : arr[index].top});
		oChilds[i].style.left = arr[index].left + 'px';
		oChilds[i].style.top = arr[index].top + 'px';
        arr[index].top += space + oChilds[i].offsetHeight;
        oBigBox.style.height = arr[index].top + 'px';
    }
}
//最小高度
function minHeight(arr){
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
</script>

<style scoped>
.router{
    float: left;
    width: 269px;
    background: #fff;
    padding: 0px 20px;
    overflow:hidden;
    text-decoration: none;
}

</style>


