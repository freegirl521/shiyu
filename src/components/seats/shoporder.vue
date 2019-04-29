<template>
<div class="shoporder">
    
    <h3>基本信息</h3>
    
    <usernews></usernews>
   
    <h3>订座</h3>
    
    <userorder></userorder>
   
</div>
</template>

<script>
import usernews from "../../components/seats/usernews"
import userorder from "../../components/seats/userorder"
export default {
  name: '',
  data() { 
    return {

    }
  },
  components:{
    usernews,
    userorder
  }
 }
</script>

<style scoped>
.shoporder{
  margin-left:20px;
  width:100%;
}
.shoporder h3{
width:100%;
font-size: 18px;
line-height:52px ;
background:#DE1C31;
margin-top:10px;
color:#fff;
padding-left: 35px;
}
</style>