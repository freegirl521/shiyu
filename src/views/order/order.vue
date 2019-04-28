<template>
    <div>
     <shopcenter></shopcenter>
    
    </div>
</template>

<script>
    import shopcenter from "../../components/seats/shopcenter.vue"
    import usernews from "../../components/seats/usernews.vue"
    import userorder from "../../components/seats/userorder.vue"

    export default {
        name: '',
        data() {
            return {}
        },
        components:{
           
            shopcenter,
            
        }
    }
</script>

<style scoped>
   
</style>