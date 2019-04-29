<template >
    <div class="shop">
      
        <el-button type="text" @click="discount_message" class="rushing" id="rushing">
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
                    <th width="70%" >套餐</th>
                    <th width="15%" >单价</th>
                    <th width="15%" >数量</th>
                </tr>
                <tr v-for="(cart,index) in $store.state.storeInformation.cart_list" :key="index">
                  <!-- <tr> -->
                    <!-- <td width="60%"><input type="checkbox" :value="cart" v-model="check_goods" /><span>{{cart.resName}}代金券</span></td> -->
                    
                    <td width="15%">￥{{cart.proPrices}}</td>
                    <td width="15%" class="col-xs-3">
                        <span class="border">
                            <span class="btn btn-default down_btn" v-on:click="reduce(num)">-</span>
                            <input class="btn-group item_num" type="number" v-model="num" />
                            <span class="btn btn-default up_btn" v-on:click="add_num(num)">+</span>
                        </span>
                    </td>
                </tr>
            </table>
            <div class="shopCart-bottom">
              <div style="display:inline-block;width:120px">

                <span class="span" style="width:auto">
                  已选择 {{total_num}} 件
                </span>
                <span class="pull-right span">
                    {{total_price}}元
                   
                </span>
              </div>
                 <span class="rushing span" type="primary" @click="submit">
                            <span class="go">提交</span>
                 </span>
            </div>
        </div>
</el-dialog>


    </div>
</template>

<script>
  export default {
      name:"snapUp",
    data() {
      return {
        dialogVisible: false,
        num:1,
        check_goods: [] //选择商品
      };
    },
    methods: {
      discount_message(){
        this.dialogVisible = true;
       this.$store.dispatch('get_discount_message',{shopId:this.$route.query.shopId,})
      },
      submit(){
        this.dialogVisible = false;
        this.$store.dispatch('get_discount_message',
        {num:this.num,
        id:this.$route.query.shopId,
        userId:localStorage.userId,
        proPrices:this.$store.state.storeInformation.succes.proPrices})
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      // 减减
      reduce(num) {
          if(num <=1) {
              num = 1
          } else {
             this.num --
          }
      },
     //累加
      add_num(num) {
          this.num++
      },
  },
  computed: {
//              总价
                total_price() {
                    let price = 0　　　　　　　　　　　　　　　　　　　　　　　
                    this.check_goods.forEach(item => {
//                      总价 = 价格 * 数量
                        price += Number(item.proPrices) * Number(this.num)
                        console.log(item);
                        console.log(this);
                    })
                    return price;
                    
                },
//              数量
                total_num() {
                    let t_num = 0;
                    this.check_goods.forEach(item => {
                        t_num += Number(this.num);
                    })
                    return t_num
                }
            },
            mounted(){
              //提交异步请求
              // this.$route.query.shopid
              // this.$store.dispatch("get_discount_message",{num:this.num,id:this.$route.query.shopId,userId:localStorage.userId,proPrices:this.$store.state.storeInformation.succes.proPrices})
            console.log(this.num);
            this.$store.dispatch("get_discount_message",{id:1,shopNum:this.num})
            }
  }
</script>

<style>
.rob .shop .el-dialog__wrapper .el-dialog .el-dialog__body{
  padding: 0;
}
</style>