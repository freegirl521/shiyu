<template>
    <div>
    <header>
        <div class="headerTop">
            <div class="left l-info">
                <a class="city" target="_blank">
                    <el-dropdown @command="handleCommand" trigger="click" >
  <span class="el-dropdown-link">
    <span class="map-info"></span>
    <span class="city1">{{city[$store.state.cityId]}}</span>
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
               <el-dropdown-item command="1" >北京</el-dropdown-item>
               <el-dropdown-item command="2" >上海</el-dropdown-item>
               <el-dropdown-item command="3" >广州</el-dropdown-item>
               <el-dropdown-item command="4" >深圳</el-dropdown-item>
               <el-dropdown-item command="5" >武汉</el-dropdown-item>
               </el-dropdown-menu>
          </el-dropdown>
                </a>
            </div>
            <div class="right r-info">
                <ul>
                    <li><router-link :to="{name:''}">注册</router-link></li>
                    <li><a href="" :class="{userName:$store.state.Info!=='登录'}">{{$store.state.Info}}</a></li>
                    <li><span style="padding-left: 15px;">|</span></li>
                    <li ><a href="javascript:;" @click="goUser">个人中心</a></li>
                    <li @click="goShop"><a href="javascript:;">商户中心</a></li>
                </ul>
            </div>
        </div>
    </header>
        <search></search>
        <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="30%"
                >
            <span>请先登录</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>

    </div>

</template>

<script>
    import Search from "./search";

    export default {
        data(){
            return{
                info:"登录",
                city:["","北京","上海","广州","深圳","武汉"],
                centerDialogVisible: false,
            }
        },
    methods: {
        handleCommand(command) {
            this.$store.commit("CHANGE_CITY",command);
            this.$store.dispatch("getAll",command)
        },
        goLogin(){
            this.dialogVisible = false;
            this.$router.push({name:''});
        },
        goUser(){
            if(localStorage.userId){
               this.$router.push({name:''});
            }else{
                this.centerDialogVisible = true;
            }
        },
        goShop(){
            if(localStorage.shopId){
                this.$router.push({name:''});
            }else{
                this.centerDialogVisible = true;
            }
        }

    },
        mounted(){
            this.$store.commit("CHANGE_INFO");
            console.log(this.$store.state.cityId,111);
           // this.$store.dispatch("getAll",this.$store.state.cityId);
        },
        components: {
            Search,
        },
    }
</script>

<style scoped>
@import "../../static/index_css/base.css";
@import "../../static/index_css/index.css";
@import "../../static/index_css/public.css";

    .userName{
        font-size: 12px;
        color: #3b3b3b;
    }
    .city1{
        color:#DE1C31;font-size: 16px
    }
    .el-icon--right{
        vertical-align: middle;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #DE1C31;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>