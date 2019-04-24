<template>
    <div>
      <div class="modal">
        <div class="choose">
            <div class="chooses">
                选择套餐和数量
            </div>
        </div>
        <table width="100%" cellpadding="0" cellspacing="0" class="modal-table" >
            <thead>
                <tr>
                    <th width="70%">套餐</th>
                    <th width="15%">单价</th>
                    <th width="15%">数量</th>
                </tr>
            </thead>
            <tbody>
                <tr class="modal-middle">
                    <td>
                        <el-radio-group v-model="radio">
                                <el-radio :label="3">备选项</el-radio>
                        </el-radio-group>
                    </td>
                    <td class="tc"><span>1</span><span>张</span></td>
                    <td class="tc"><span class="shopPrices">100</span><span>元</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>

<script>
    export default {
        name:"modalDialog",
        data(){
            return{
                //选择
            radio: 3
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>