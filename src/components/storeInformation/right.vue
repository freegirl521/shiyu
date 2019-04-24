<template>
    <div>
         <div class="right">
                    <div class="resName">马可波罗西餐厅店</div>
                    <div class="slogan ">仅售95元！价值100代金券一张，全场通用</div>
                    <div class="prices">
                        <div class="proPrices"><i>￥</i><span>95</span> </div>
                        <div class="shopPrices">门店价 <i>￥</i><span>100</span> </div>
                    </div>
                    <div class="informtion">
                        <div class="soldNum">
                            <div class="soldNumt">已售<span>1631</span></div>
                        </div>
                        <div class="evaNum">
                            <el-rate
                                v-model="value"
                                disabled
                                show-score
                                :colors="['#DE1C31','#DE1C31','#DE1C31']"
                                text-color="#DE1C31"
                                score-template="{value}">
                            </el-rate>
                            <div class="evaNums">
                                <span>117</span>条团购评价
                            </div>
                        </div>
                        <div class="evaScore">
                            <div class="lit">支持随时退</div>
                            <div class="lit">过期自动退</div>
                        </div>
                    </div>
                    <div class="input_wrap">
                        <h1>数量:</h1>
                        <!-- <div class="border">
                            <a href="javascript:" class="down_btn">
                                <i class="iconfont">&#xe603;</i>
                            </a> 
                            <input type="text" class="item_num" value="1"> 
                            <a href="javascript:" class="up_btn">
                                <i class="iconfont">&#xe602;</i>
                            </a>
                        </div> -->
                        <!-- //计数器 -->
                        <el-input-number v-model="num" @change="handleChange" :min="1" label="计数"></el-input-number>
                    </div>
                        <div class="rushing">
                            <span>立即抢购</span>
                        </div>
                </div> 
    </div>
</template>

<script>
    export default {
        name:"right",
        data(){
            return{
                //星级评分
                value: 3.7,
                //购买数量
                num:1
            }
            
        },
        methods: {
            //购买数量计数器
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>