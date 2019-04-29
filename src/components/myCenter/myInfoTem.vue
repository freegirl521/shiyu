<template>
    <div class="model-box fl">
        <div class="hd">
            <h1>基本信息<i>(*为必填项)</i></h1>
        </div>
        <div class="con">
            <h1>为了让各位食友了解你，以下信息将显示在个人资料页。</h1>
            <div class="con-d1">
               <form>
                   <ul>
                       <li class="clear">
                           <div class="tit theadpic fl clear">
                               <label class="fr">头像：</label>
                           </div>
                            <div class="fl uphead">
                                <img :src="src">
                                <input type="button" value="上传头像" class="inp" @click="uppic()">
                            </div>
                       </li>
                       <li class="clear">
                           <div class="tit fl clear">
                               <label class="fr">昵称：</label>
                           </div>
                           <div class="fl">
                               <input type="text" value="dpuser" class="input_bor">
                           </div>
                       </li>
                       <li class="clear">
                           <div class="tit fl clear">
                               <label class="fr">性别：</label>
                           </div>
                           <div class="fl radio clear" >
                              <!-- <input name="sexss" v-model="sex"  type="radio" value="1" id="man">
                               <label for="man">男</label>
                               <input name="sexss" v-model="sex" type="radio" value="0" id="women">
                               <label for="women">女</label>-->
                               <radio-my-info></radio-my-info>

                           </div>
                       </li>
                       <li class="clear">
                           <div class="tit fl clear">
                               <label class="fr">长居地：</label>
                           </div>
                           <div class="fl">
                               <input type="text" value="dpuser" class="input_bor">
                           </div>
                       </li>
                       <li class="clear">
                           <div class="tit fl clear">
                               <label class="fr">自我介绍：</label>
                           </div>
                           <div class="fl">
                               <textarea name="userSign" cols="" rows="7" class="tar-plain J_ph" id="J_sign" placeholder="简单介绍下自己，让更多Dper了解你吧~~"></textarea>
                           </div>
                       </li>
                   </ul>
                   <div class="foot">
                       <span>
                           <button class="my-btn" type="submit">保存</button>
                       </span>
                   </div>
               </form>
            </div>
        </div>
    </div>
</template>

<script>
    import radioMyInfo from "./radioMyInfo"
    export default {
        name: "myInfoTem",
        data(){
          return {

              src:require("../../assets/img/myCenter/timg (2)@2x.png")
          }
        },
        methods:{
            uppic(){
                console.log("11111111")
            }
        },
        components:{
            radioMyInfo,
        }

    }
</script>

<style scoped>
    .my-btn{
        width: 62px;
        height: 22px;
        background: #DE1C31;
        color: white;
        border-radius: 4px;
    }
    .tar-plain{
        width:498px;
        height: 210px;
        border:1px solid #DE1C31;
        border-radius: 4px;
        background: #F6F6F6;
        padding: 7px;
    }
    .input_bor{
        width:127px;
        border:1px solid #DE1C31;
        border-radius: 4px;
    }
    .theadpic{
        margin-top: 50px;
    }
    .con-d1{
        margin-top: 52px;
    }
    .hd{
        height: 68px;
        line-height: 68px;
       /*text-align: center;*/
        border-bottom: 1px solid #9da0a4;
        margin-bottom: 12px;
    }
.tit{

    width: 100px;
}
.uphead img{
    width: 106px;
    height: 106px;
}
    .uphead{
        width: 106px;
        height: 106px;
        border-radius: 50%;
        background: #CCCCCC;
        overflow: hidden;
        position: relative;
    }
.model-box{
    height:808px ;
    width: 762px;
    background: white;
}
    .inp{
        width: 106px;
        background: #9da0a4;
        position: absolute;
        left: 0;
        top:80px;
        height: 25px;
        font-size: 14px;
        index:1
    }
    li{
        margin:40px 0;
       /* height: 32px;
        line-height: 32px;*/
    }
  /*  .radio{
        -webkit-appearance:radio;
    }*/

</style>