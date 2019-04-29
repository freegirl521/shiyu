<template>
    <div>
        <!-- 写点评 -->
         <div class="commentOn common_style" id="anchorPoint">
            <div class="infoCenter">
                <div class="commentOn_shopName">
                    <!-- <span>徐家铺子</span>(带星号的为必填字段) -->
                    <span>徐家铺子</span>
                </div>
                <div class="commentOn_mag">
                    <!-- 评分 -->
                   <p class="commentOn_Tit">点击星星为商家评分</p>
                   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                       <el-form-item label="总体评分" prop="overallRating" >
                            <div class="block">
                                <el-rate v-model="value1"
                                :colors="['#DE1C31','#DE1C31','#DE1C31']"
                                ></el-rate>
                            </div>
                        </el-form-item>
                        <!-- 口味  环境   服务评价 -->
                        <div class="comClassify clearfloat">
                            <el-form-item label="口味" prop="taste">
                              <div class="block">
                                  <el-rate v-model="value2"
                                  :colors="['#DE1C31','#DE1C31','#DE1C31']"
                                  ></el-rate>
                              </div>
                          </el-form-item>
                          <el-form-item label="环境" prop="surroundings">
                              <div class="block">
                                  <el-rate v-model="value3"
                                  :colors="['#DE1C31','#DE1C31','#DE1C31']"
                                  ></el-rate>
                              </div>
                          </el-form-item>
                          <el-form-item label="服务" prop="service">
                              <div class="block">
                                  <el-rate v-model="value4"
                                  :colors="['#DE1C31','#DE1C31','#DE1C31']"
                                  ></el-rate>
                              </div>
                          </el-form-item>
                        </div>
                        
                            <el-form-item label="评价" prop="desc">
                              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                            </el-form-item>
                          <!-- 上传图片 -->
                          <div class="uploadImage clearfloat">
                            <el-upload
                              class="upload-demo"
                              action="https://jsonplaceholder.typicode.com/posts/"
                              :on-preview="handlePreview"
                              :on-remove="handleRemove"
                              :file-list="fileList"
                              list-type="picture">
                              <el-button size="small" type="primary">点击上传</el-button>
                              <div slot="tip" class="el-upload__tip">只能上传png文件，且不超过500kb</div>
                            </el-upload>
                          </div>

                        <!-- 提交按钮 -->
                        <div class="submitBtn">
                            <el-form-item>
                              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                            </el-form-item>
                        </div>
                        
                    </el-form>                     
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"storeDetailComOn",
          data() {
      return {
        // 星星
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        // 上传图片
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        // 表单
        ruleForm: {
          name: ''
          
        },
        rules: {
          overallRating: [
            { required: true, message: '', trigger: 'blur' },
            //  { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            
          ],
          taste: [
            { required:false , message: '', trigger: 'blur' }
          ],
          surroundings: [
            { type: 'number', required: false,  trigger: 'blur' }
          ],
          service: [
            { type: 'number', required: false,  trigger: 'blur' }
           ],
          desc: [
            { required: true, message: '请填写评价', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } 
        });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
    }
</script>

<style lang="scss" scoped>
   
</style>