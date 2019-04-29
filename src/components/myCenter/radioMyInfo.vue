<template>
        <div>
                <el-radio v-model="radio" label="1">男</el-radio>

                <el-radio v-model="radio" label="2">女</el-radio>
        </div>
</template>

<script>
    export default {
        name: "radioMyInfo",
        data(){
            return {
                radio:'1'
            }
        }
    }
</script>

<style scoped>

</style>