<template>
    <!--<div class="block">
        <el-rate v-model="value"></el-rate>
    </div>-->
    <div>
        <div class="star mb-10" :class="starType">
            <span class="star-item" v-for = "itemClass in itemClassess" :class="itemClass" track-by="$index"></span>
        </div>
    </div>

</template>

<script>
    const LENGTH = 5;//星星个数
    const CLS_ON = "on";//满星状态
    //const CLS_HALF = "half";//半星状态
    const CLS_OFF = "off";//无星状态
    export default {
        name: "centerStar",
        /*data(){
            return {
                value : null,
            }
        },*/
        props: {
            size: {
                type : Number//参数：尺寸
            },
            score: {
                type : Number//参数：评分
            }
        },
        computed: {
            starType(){//设置星星尺寸
                return "star-" + this.size;
            },
            itemClassess(){
                let result = [];//记录状态的数组
                let integer = this.score;
                /*let score = Math.floor(this.score * 2) / 2;
                let hasDecimal = score % 1 !==0;
                let integer = Math.floor(score);//向下取整*/
                //全星
                for(let i = 0; i < integer; i++){
                    result.push(CLS_ON);
                }
               /* //半星
                if(hasDecimal){
                    result.push(CLS_HALF);
                }*/
                //无星
                if(result.length < LENGTH){
                    result.push(CLS_OFF);
                }
                return result;
            }
        }


    }
</script>

<style scoped>
    .star {
        display: flex;
        width: 100%;
    }
    .star-48 .star-item {
        width: 20px;
        height: 20px;
        margin-right: 6px;
        background-repeat: no-repeat;
        background-size: 20px 20px;
    }
    .star-48 .star-item:last-child {
        margin-right: 0px;
    }
    .star-48 .star-item.on {
        background-image: url("../../assets/img/myCenter/on.png");
    }
    /*.star-48 .star-item.half {
        background-image: url("./half.png");
    }*/
    .star-48 .star-item.off {
        background-image: url("../../assets/img/myCenter/off.png");
    }

    .star-36 .star-item {
        width: 15px;
        height: 15px;
        margin-right: 6px;
        background-repeat: no-repeat;
        background-size: 15px 15px;
    }
    .star-36 .star-item:last-child {
        margin-right: 0px;
    }
    .star-36 .star-item:last-child {
        margin-right: 0px;
    }
    .star-36 .star-item.on {
        background-image: url("../../assets/img/myCenter/on.png");
    }
    /*.star-36 .star-item.half {
        background-image: url("./half.png");
    }*/
    .star-36 .star-item.off {
        background-image: url("../../assets/img/myCenter/off.png");
    }

</style>