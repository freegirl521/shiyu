<template>
      <div>
        <div class="container" id="app">
            <div class="closee">
                <h2 class="page-header">选择套餐和数量</h2>
                <span class="close"><img src="../../assets/img/store_information/叉号 (1)@2x.png"> </span>
            </div>
            <table class="table" width="100%">
                <tr>
                    <th width="70%">套餐</th>
                    <th width="15%">单价</th>
                    <th width="15%">数量</th>
                </tr>
                <tr v-for="(cart,index) in cart_list" :key="index">
                    <td width="70%"><input type="checkbox" :value="cart" v-model="check_goods" /><span>{{cart.goods_name}}</span></td>
                    <td width="15%">￥{{cart.goods_price}}</td>
                    <td width="15%" class="col-xs-3">
                        <span class="border">
                            <span class="btn btn-default down_btn" v-on:click="reduce(cart)">-</span>
                            <input class="btn-group item_num" type="number" v-model="cart.num" />
                            <span class="btn btn-default up_btn" v-on:click="add_num(cart)">+</span>
                        </span>
                    </td>
                </tr>
            </table>
            <div class="shopCart-bottom">
                已选择 {{total_num}} 件
                <span class="pull-right">
                    {{total_price}}元
                   
                </span>
                 <div class="rushing">
                            <span>立即抢购</span>
                 </div>
            </div>
        </div>
         </div> 
        
   
</template>

<script>
    export default {
        name:"shopCart",
        data() {
            return {
                cart_list: [{
                　　goods_name: '小米6',
                　　goods_price: '1699',
                　　num: '1',
                }],
                check_goods: [] //已选择的商品
            }
    },
        computed: {
//              总价
                total_price() {
                    let price = 0　　　　　　　　　　　　　　　　　　　　　　　
                    this.check_goods.forEach(item => {
//                      总价 = 价格 * 数量
                        price += Number(item.goods_price) * Number(item.num)
                        console.log(item);
                    })
                    return price;
                    
                },
//              数量
                total_num() {
                    let t_num = 0;
                    this.check_goods.forEach(item => {
                        t_num += Number(item.num);
                    })
                    return t_num
                }
            },
            methods:{
            //     //隐藏
            //     likeFun(){
            //     this.type = !this.type
            // },
//              商品类减减
                reduce(cart) {
                    if(cart.num <=0) {
                        cart.num = 0
                    } else {
                        cart.num --
                    }
                },
//              商品累加
                add_num(cart) {
                    cart.num++
                },
// //              删除商品
//                 delete_num(cart){
//                     this.check_goods.splice(this.check_goods.indexOf(cart),1)
//                     this.cart_list.splice(this.cart_list.indexOf(cart),1)
//                 },
//              全选
                // check_all() {
                //     if (this.check_goods.length >0) {
                //         this.check_goods = []
                //     } else {
                //         this.cart_list.forEach(item => {
                //             this.check_goods.push(item)
                //         })
                //     }
                // }
            }
    }
</script>

<style lang="scss" scoped>

</style>