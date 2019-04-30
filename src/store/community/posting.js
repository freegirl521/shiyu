import vue from "vue"
import bus from  "../../bus"
import axios from "axios"

export default{
    state:{
        // userImg:require("@/assets/img/community/posting.png"),
        aboutList:[
            {
                id:1,
                about:"美食"
            },
            {
                id:2,
                about:"甜品"
            },
            {
                id:3,
                about:"饮料"
            }
        ]
     
    },
    mutations:{
        GETWRITEINFO(state,data){
            state.userImg = data.userImg;
            state.aboutList = data.aboutList;
        },
       
    },
    actions:{
        getwriteinfo({commit},userid=1){//获取用户与主题信息:
            axios.get("/community/getwriteinfo?userid="+userid)
            .then(({data})=>{
                commit("GETWRITEINFO",data);
            })
        },
        addpost({commit},obj){//写帖子
            console.log(obj,77777);
            axios.post("/community/addpost",{
                userid:obj.userid,
                posttext:obj.posttext,
                postname:obj.postname,
                aboutid:obj.aboutid
            }).then(({data})=>{
                if(data.code===0){
                    alert("填写成功")
                }else{
                    alert(data.msg)
                }
              
            })
           
        },
        
    }
}