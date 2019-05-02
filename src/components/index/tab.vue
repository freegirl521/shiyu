<template>

    <div class="tab_nav clear">
        <ul class="guide">
            <li class="link" @mouseover="link=true" @mouseout="link=false">
                <a href="">美食分类</a>
                <div class="cate-nav" v-show="link">
                    <ul class="nav-menu" v-for="(List,index) in navList" :key="index">
                        <li v-on:mouseover="showToggle(index)" v-on:mouseout="handleHide" :class="{active:index===isShow}">
                            <span>
                                <a href="javascript:;" class="index-title" >{{List.catName}}</a>
                                <router-link class="index-item" :to="{name:'listapp',query:{keyWord:List.footTypeDTO[0].catName}}">{{List.footTypeDTO[0].catName}}</router-link>
                                <router-link class="index-item" :to="{name:'listapp',query:{keyWord:List.footTypeDTO[0].catName}}">{{List.footTypeDTO[0].catName}}</router-link>
                            </span>
                            <dl class="sec-container clear"  v-show="index===isShow" >
                                <dt class="sec-title">{{List.catName}}</dt>
                                <dd class="sec-item" v-for="(item,index) in List.footTypeDTO " :key="index"><router-link :to="{name:'',query:{keyWord:item.catName}}">{{item.catName}}</router-link></dd>
                            </dl>
                        </li>

                    </ul>
                </div>

            </li>
            <li><router-link :to="{name:'comment'}">砧评食语</router-link></li>
            <li><router-link :to="{name:'community'}">食遇社区</router-link></li>

        </ul>



    </div>


</template>

<script>

    export default {
        name: "tab",
        data(){
            return{
                link:false,
                isShow:0,
                navList:[],
            }
        },
        mounted() {
                // 避免第一个渲染的显示
                this.isShow = -1;
                // this.$store.dispatch("getType");
            this.$store.dispatch("getAll",this.$store.state.cityId);
            this.$axios.post("/index/show",
                { cityId:this.$store.state.cityId}
            ).then(data=>{
                //console.log(data.type,8080980);
                this.navList=data.type;
                console.log(this.navList,8080980);
            })
            },
        methods:
            {
                showToggle: function (index) {
                    this.isShow = index;

                },
                handleHide: function () {
                    this.isShow = !this.isShow;
                },
                getMore(keyWord){
                    console.log(keyWord);
                }
            },



        }
</script>

<style scoped>

.active{
    background:rgba(222,28,49,0.3) !important;
}
.router-link-exact-active{

}
    .router-link-active {
        color: #DE1C31 ;

    }
</style>