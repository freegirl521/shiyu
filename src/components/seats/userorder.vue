<template>
    <div>
        <div class="order">
            <div class="order-top">
                <div class="order-left dib">
                    <img src="../../assets/img/order/user.png">
                </div>
                <div class="order-right dib" >
                    <h3>爱吃的仙女</h3>
                    <p>2019年04月18日 9:46</p>
                </div>
                <div class="order-news">
                    <p>人数：2</p>
                    <p>时间：2019年04月18日 17:30</p>
                </div>
                <p>联系方式：13333333333</p>
            </div>
            <div class="delete">
                <img src="../../assets/img/order/clear.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                    List:[{
                    indented:"",
                    username:"爱吃的仙女",
                    createdate:"2019年04月18日 9:46",
                    mealtime:"2019年04月18日 17:30",
                    userphone:"联系方式：13333333333",
                }]
            }
        }
    }
</script>

<style scoped>
.order{
    width: 278px;
    padding:15px;
    background: #F8F8F8;
    position: relative;
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