<template>
    <div class="shuffling">
        <el-carousel indicator-position="outside" :autoplay="true">
        <el-carousel-item v-for="(item,index) in $store.state.storeInformation.succes.bImage" :key="index">
          <img :src="item.img" alt="" >
          {{item}}
          <h3>{{ item }}</h3>
        </el-carousel-item>
        </el-carousel>
       <!-- $store.state.storeInformation.succes. -->
    </div>
    
</template>

<script>
    export default {
      data(){
       return{
       
       }
      }
        
    }
</script>

<style>
    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  /* .el-carousel__item:nth-child(0) {
    background:url("../../assets/img/store_information/timg (1)@2x.png") no-repeat !important;
  }
  .el-carousel__item:nth-child(1) {
    background:url("../../assets/img/store_information/timg (1)@2x.png") no-repeat !important;
  }
    .el-carousel__item:nth-child(2) {
    background:url("../../assets/img/store_information/timg (1)@2x.png") no-repeat !important;
  }
  .el-carousel__item:nth-child(3) {
    background:url("../../assets/img/store_information/timg (1)@2x.png") no-repeat !important;
  } */

  .shuffling .el-carousel__indicator .el-carousel__button{
     width: 133px !important;
    height: 91px !important;
  }
  .shuffling .el-carousel__indicator button:nth-child(4){
      background: url("../../assets/img/store_information/timg (3).png") no-repeat !important;
  } 
  .shuffling .el-carousel__indicator button:nth-child(1){
      background: url("../../assets/img/store_information/timg (3).png") no-repeat !important;
  } 
  .shuffling .el-carousel__indicator button:nth-child(2){
      background: url("../../assets/img/store_information/timg (3).png") no-repeat !important;
  } 
  .shuffling .el-carousel__indicator button:nth-child(3){
      background: url("../../assets/img/store_information/timg (3).png") no-repeat !important;
  }  

</style>