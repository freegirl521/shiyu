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
<<<<<<< HEAD
     
        succes:{
            // proPrices : "99",
            // resName:"海底捞",
            // bImage:[
            //     {img:require("@/assets/img/store_information/timg (1)@2x.png")},
            //     {img:require("@/assets/img/store_information/timg (1)@2x.png")},
            //     {img:require("@/assets/img/store_information/timg (1)@2x.png")},
            //     {img:require("@/assets/img/store_information/timg (1)@2x.png")},
            //   ],
        },
        shop:{
            // proPrices : "99",
            // resName:"海底捞"
        },
        cart_list: [{
            // 　　resName: 'haidil',
            // 　　proPrices: '129'
            
            }],
=======
        succes:{
            proPrices : "99",
            resName:"海底捞"
        },
        shop:{
            proPrices : "99",
            resName:"海底捞"
        }
>>>>>>> 8dc41066c3e0c9eb88dd395eda5b33cb9ff05f47
    },
    mutations:{
        SHOREINFORMATION(state,succes){
            state.succes=succes;
<<<<<<< HEAD
        },
        SHOREINFORMATIONONE(state,cart_list){
            state.cart_list=cart_list;
=======
>>>>>>> 8dc41066c3e0c9eb88dd395eda5b33cb9ff05f47
        }
    },
    getters:{

    },
<<<<<<< HEAD
    actions:{
        //展示接口
        //commit 是提交mutations中的SHOREINFORMATION方法修改state中的succes数据
        //shopId形参（给对方数据id:shopId）
        //axios  异步post  根据  "/shiyu/test"路径  传输给对方
        //{data}对方传给的参数
        getInfo({commit},shopId){
            axios.post("/shiyu/tuangou",{
                id:shopId
            })
            .then(({data})=>{
                console.log(data,"111");
                commit("SHOREINFORMATION",data.succes);
            })
        },


        // 抢购接口
        get_discount_message({commit},obj){
            axios.post("/shiyu/qianggou1",{
                    // shopId:obj.shopId,
                    // couponsId:obj.id,
                    id:obj.shopId,
                    shopNum:obj.num,
                    // proPrices:obj.proPrices
            })
            .then(({data})=>{
                console.log(data);
                commit("SHOREINFORMATIONONE",data.cart_list);
=======
    actions:{//异步操作
        //展示接口
        getInfo({commit},shopId){
            axios.post("/shiyu/test",{
                id:shopId
            })
            .then(({data})=>{
                console.log(data);
                commit("SHOREINFORMATION",data.succes);
>>>>>>> 8dc41066c3e0c9eb88dd395eda5b33cb9ff05f47
            })
        }
    }
}