<template>
    <div class="aside-nav fl">
        <div class="hd">
            <h1>我的资料</h1>
        </div>

        <div class="con">
            <ul>
                <li><i></i><a href="#">个人信息</a></li>
                <li><i></i><a href="#">账号信息</a></li>
                <li><i></i><a href="#">隐私设置</a></li>
                <li><i></i><a href="#">消息提醒</a></li>
                <li><i></i><a href="#">订阅设置</a></li>
                <li><i></i><a href="#">绑定与同步</a></li>
                <li><i></i><a href="#">黑名单</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navleft",
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .aside-nav{
        width: 438px;
        height: 808px;
        background: lightgray;
    }
    .hd{
        height: 68px;
        line-height: 68px;
        text-align: center;
        border-bottom: 1px solid #9da0a4;
        margin-bottom: 12px;
    }
    .con li{
        height: 64px;
        line-height: 64px;
        text-align: center;
        border-top:1px solid #9da0a4;
    }
    .con li.active{
        background: #DE1C31;
    }
</style>