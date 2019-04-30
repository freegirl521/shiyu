<template>
 
         <div class="box"> 
                <ul>
                    <li v-for="(item,index) in $store.state.communitymessage.postImgList" :key="index">
                       <img :src="item.postimg" alt="">
                        <h1 class="box-text">
                                <template>
                                    <p  v-for="(item,index) in $store.state.communitymessage.postInfo.postText.split(',')" :key="index" >{{item}}</p>
                                </template>     
                        </h1>
                    </li>
                    <!-- <li>
                            <img :src="$store.state.communitymessage.postImgList[1]" alt="">
                            <h1 class="box-text" >
                                <template>
                                    <p  v-for="(item,index) in $store.state.communitymessage.postInfo.postText.split(',')" :key="index" >{{item}}</p>
                                </template>  
                            </h1>
                    </li>
                    <li>
                            <img :src="$store.state.communitymessage.postImgList[2]" alt="">
                            <h1 class="box-text">
                                 <template>
                                    <p  v-for="(item,index) in $store.state.communitymessage.postInfo.postText.split(',')" :key="index" >{{item}}</p>
                                </template>  
                            </h1>
                    </li> -->
                </ul>
                <div class="box-bottom">
                    <p class="bottom-left"><img :src="$store.state.communitymessage.postInfo.shopheadimg" alt=""></p>
                    <div class="bottom-right">
                        <p>{{$store.state.communitymessage.postInfo.shopName}}</p>
                        <p class="img">
                            <el-rate
                                v-model="$store.state.communitymessage.postInfo.commentScore"
                                disabled
                                :colors="['#DE1C31','#DE1C31','#DE1C31']"
                                >
                            </el-rate>
                        </p> 
                        <div class="msg">
                            <p>人均:</p><span>{{$store.state.communitymessage.postInfo.price}}元</span>
                                
                        </div>
                        <div class="msg">
                            <p>{{$store.state.communitymessage.postInfo.shopType}}:</p><span>{{$store.state.communitymessage.postInfo.shopAds}}</span>
                        </div>
                    </div> 
                    
                </div>
        </div>

</template>

<script>
    export default {
        name:"datailed",
        data(){
            return{
              
            }
        },
        
    }
</script>

<style  scoped>

</style>