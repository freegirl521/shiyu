import Vue from "vue"
import vuex from "vuex"
import bus from "../../bus"
import axios from "axios"
export default{
    state:{//集中式管理数据
        // //星级评分
        // value: 3.7,
        // //购买数量
        // num:1,
        // 
        succes:{
            proPrices : "99",
            resName:"海底捞"
        },
        shop:{
            proPrices : "99",
            resName:"海底捞"
        }
    },
    mutations:{
        SHOREINFORMATION(state,succes){
            state.succes=succes;
        }
    },
    getters:{

    },
    actions:{//异步操作
        //展示接口
        getInfo({commit},shopId){
            axios.post("/shiyu/test",{
                id:shopId
            })
            .then(({data})=>{
                console.log(data);
                commit("SHOREINFORMATION",data.succes);
            })
        }
    }
}