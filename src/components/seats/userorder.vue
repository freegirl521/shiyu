<template>
<<<<<<< HEAD
    <div class="order1" @mouseenter="isShow = !isShow" @mouseleave="isShow = !isShow" >
        <div v-for="(items,index) in $store.state.shop.shopOrdersList.list" :key="index"  class="orderbox">
        <div class="order" >
=======
<<<<<<< HEAD
    <div class="order1" @mouseenter="isShow = !isShow" @mouseleave="isShow = !isShow" >
        <div v-for="(items,index) in $store.state.shop.shopOrdersList.list" :key="index"  class="orderbox">
        <div class="order" >
            <div class="order-top">
                <div class="order-left dib">
                    <img :src="items.userimg">
                </div>
                <div class="order-right dib" >
                    <h3>{{items.username}}</h3>
                    <p>{{items.createdate}}</p>
                </div>
                <div class="order-news">
                    <p>人数：2</p>
                    <p>时间：{{items.mealtime}}</p>
                </div>
                <p>联系方式：{{items.userphone}}</p>
            </div>
            <div class="delete" v-show="isShow" @click="deleteOrder(items.indentid)">
                <img src="../../assets/img/order/clear.png">
            </div>
        </div>
        </div>
=======
    <div>
        <div class="order">
>>>>>>> df77b5ee28f85009f0d8d47786437bfd85bc1f8e
            <div class="order-top">
                <div class="order-left dib">
                    <img :src="items.userimg">
                </div>
                <div class="order-right dib" >
                    <h3>{{items.username}}</h3>
                    <p>{{items.createdate}}</p>
                </div>
                <div class="order-news">
                    <p>人数：2</p>
                    <p>时间：{{items.mealtime}}</p>
                </div>
                <p>联系方式：{{items.userphone}}</p>
            </div>
            <div class="delete" v-show="isShow" @click="deleteOrder(items.indentid)">
                <img src="../../assets/img/order/clear.png">
            </div>
        </div>
<<<<<<< HEAD
        </div>
=======
>>>>>>> 8124c75c32628c71d45a883d50158c6263936d5e
>>>>>>> df77b5ee28f85009f0d8d47786437bfd85bc1f8e
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> df77b5ee28f85009f0d8d47786437bfd85bc1f8e
                    isShow:false,
                    List:[
                        {
                    indented:"1",
                    username:"爱吃的仙女",
                    createdate:"2019年04月18日 9:46",
                    mealtime:"2019年04月18日 17:30",
                    userphone:"13333333333",
                },
                {
                     indented:"2",
                    username:"爱吃的仙女",
                    createdate:"2019年04月18日 9:46",
                    mealtime:"2019年04月18日 17:30",
                    userphone:"13333333333",
                },
                {
                     indented:"3",
                    username:"爱吃的仙女",
                    createdate:"2019年04月18日 9:46",
                    mealtime:"2019年04月18日 17:30",
                    userphone:"13333333333",
                },
                {
                     indented:"3",
                    username:"爱吃的仙女",
                    createdate:"2019年04月18日 9:46",
                    mealtime:"2019年04月18日 17:30",
                    userphone:"13333333333",
                },
                {
                     indented:"3",
<<<<<<< HEAD
=======
                    username:"爱吃的仙女",
                    createdate:"2019年04月18日 9:46",
                    mealtime:"2019年04月18日 17:30",
                    userphone:"13333333333",
                },
                
                ]
            }
        },
        methods:{
            deleteOrder(indentid){
                 this.$http.get("/shop/RemoveShopIndent",{
                 params:{
                    indentid:indentid,
                    shopid: 1
                 }
             })
                 .then(({data})=>{
                     console.log(data)
                   this.$store.dispatch("getShopOrders");
                     
             })

            }
        },
        mounted(){
            this.$store.dispatch("getShopOrders");
=======
                    List:[{
                    indented:"",
>>>>>>> df77b5ee28f85009f0d8d47786437bfd85bc1f8e
                    username:"爱吃的仙女",
                    createdate:"2019年04月18日 9:46",
                    mealtime:"2019年04月18日 17:30",
                    userphone:"13333333333",
                },
                
                ]
            }
        },
        methods:{
            deleteOrder(indentid){
                 this.$http.get("/shop/RemoveShopIndent",{
                 params:{
                    indentid:indentid,
                    shopid: 1
                 }
             })
                 .then(({data})=>{
                     console.log(data)
                   this.$store.dispatch("getShopOrders");
                     
             })

            }
<<<<<<< HEAD
        },
        mounted(){
            this.$store.dispatch("getShopOrders");
=======
>>>>>>> 8124c75c32628c71d45a883d50158c6263936d5e
>>>>>>> df77b5ee28f85009f0d8d47786437bfd85bc1f8e
        }
    }
</script>

<style scoped>
<<<<<<< HEAD

.orderbox{
    width: 32%;
    padding:15px;
    background: #F8F8F8;
    position: relative;
    margin-top:10px;
    display: inline-block;
    margin-right: 5px;
    border:1px solid #DE1C31;
=======
<<<<<<< HEAD

.orderbox{
    width: 32%;
    padding:15px;
    background: #F8F8F8;
    position: relative;
    margin-top:10px;
    display: inline-block;
    margin-right: 5px;
    border:1px solid #DE1C31;
=======
.order{
    width: 278px;
    padding:15px;
    background: #F8F8F8;
    position: relative;
>>>>>>> 8124c75c32628c71d45a883d50158c6263936d5e
>>>>>>> df77b5ee28f85009f0d8d47786437bfd85bc1f8e
}
.order-left{
    margin-right: 10px;
}
.order-news{
    background: #fff;
    margin:10px 0;
    padding:10px 0;
    padding-left: 10px;
}
.delete{
    position: absolute;
    top:10px;
    right: 10px;
}
</style>