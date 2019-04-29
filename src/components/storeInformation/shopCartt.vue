<template >
    <div class="shop">
        <el-button type="text" @click="dialogVisible = true" class="rushing" id="rushing">
            立即抢购
        </el-button>

<el-dialog
  title="选择套餐和数量"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
   <div class="container" id="app">
            <table class="table" width="100%">
                <tr >
                    <!-- <th><label><input type="checkbox" @click="check_all" :checked="check_goods.length == cart_list.length"/>全选</label></th> -->
                    <th width="70%" style="border-bottom:1px dashed #999">套餐</th>
                    <th width="15%" style="border-bottom:1px dashed #999">单价</th>
                    <th width="15%" style="border-bottom:1px dashed #999">数量</th>
                </tr>
                <!-- <tr v-for="(cart,index) in cart_list" :key="index"> -->
                <tr v-for="(cart,index) in cart_list" :key="index">
                    <td width="60%"><input type="checkbox" :value="cart" v-model="check_goods" /><span>{{$store.state.storeInformation.succes.resName}}代金券</span></td>
                    
                    <td width="15%">￥{{$store.state.storeInformation.succes.proPrices}}</td>
                    <td width="15%" class="col-xs-3">
                        <span class="border">
                            <span class="btn btn-default down_btn" v-on:click="reduce(cart)">-</span>
                            <input class="btn-group item_num" type="number" v-model="cart.num" />
                            <span class="btn btn-default up_btn" v-on:click="add_num(cart)">+</span>
                        </span>
                    </td>
                </tr>
            </table>
            <!-- <div class="shopCart-bottom">
                已选择 {{total_num}} 件
                <span class="pull-right">
                    {{total_price}}元
                    <!-- <a href="" class="btn btn-success" :disabled="check_goods.length <= 0">去结算</a> -->
               <!-- </span>
                 <div class="rushing">
                            <span>提交订单</span>
                 </div>
            </div> -->
        </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>


    </div>
</template>

<script>
  export default {
      name:"shopCartt",
    data() {
      return {
        dialogVisible: false,
        // cart_list: [{
                // 　　goods_name: '小米6',
                // 　　goods_price: '1699',
                // 　　num: '1',
                // }],
        check_goods: [] //已选择的商品
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
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
    },
//     computed: {
// //              总价
//                 total_price() {
//                     let price = 0　　　　　　　　　　　　　　　　　　　　　　　
//                     this.check_goods.forEach(item => {
// //                      总价 = 价格 * 数量
//                         price += Number(item.goods_price) * Number(item.num)
//                         // price += Number(item.proPrices) * Number(item.num)
//                         console.log(item);
//                     })
//                     return price;
                    
//                 },
// //              数量
//                 total_num() {
//                     let t_num = 0;
//                     this.check_goods.forEach(item => {
//                         t_num += Number(item.num);
//                     })
//                     return t_num
//                 }
//             }
  }
</script>

<style scoped>
</style>