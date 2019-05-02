<template>
    <div id="shopcenter">
		<header>
			<div class="headerTop">
				<div class="left l-info">
					<a class="city" target="_blank">
						<span class="map-info"></span><span>北京</span>
					</a>
					</div>
				<div class="right r-info">
					<ul>
						<li><a href="" class="user-name">你好，亲爱的“喵小姐串串香”</a></li>
						<li><span style="padding-left: 15px;">|</span></li>
						<li><a href="">设置</a></li>
						<li><a href="">退出登陆</a></li>
					</ul>
				</div>
			</div>
		</header>
		<div class="contenttop_wrap">
			<div class="header-content center clear">
				<div class="header-img left">
					<img src="../../assets/img/comment_shopcenter/Food Meet@2x.png" />
					<div class="shop-center right"><span class="circle"></span>商户中心</div>
				</div>
				<img class="right user-img" src="../../assets/img/comment_shopcenter/u-img.png"/>
			</div>
		</div>
		<div class="shopcenter">
			<div class="manage">FOOD MEET ·<br />  前端商户管理中心</div>
			<div class="title">
				<p>
					菜品&价格<img src="../../assets/img/comment_shopcenter/close.png" />
				</p>
			</div>
		</div>
		<!-- 选项卡 -->
		<template>
			<el-tabs v-model="activeName" type="border-card" :tab-position="tabPosition">
				<el-tab-pane>
					<span slot="label">喵小姐串串香</span>
				</el-tab-pane>
				<el-tab-pane name="first">
					<span slot="label">
						<i>
							<img src="../../assets/img/comment_shopcenter/shopcenter1.png">
						</i>
						 菜品&价格
					</span>
					<div class="shop-wrap">
						<div class="shop-content">
							<div class="content-class">菜品&价格</div>
							<ul class="clear" style="width: 1200px;" >
								<li class="food-info">
									<div class="upPic">
										<input class="file" type="file" />
									</div>
									<input class="food-name" type="text" value="请编辑名称"/>
								</li>
								<!-- 遍历菜品 -->
								<template>
									<div class="menu-item" v-for="(item,index) in $store.state.shop.shopInfoList" :key=index>
										<li class="food-info" @mouseover="handle(index)" @mouseout="hiden">
											<div class="upPic">
												<img class="del" src="../../assets/img/comment_shopcenter/del.png" @click="del(item.menuid)"/>
												<img v-show="item.type" class="coll" src="../../assets/img/comment_shopcenter/黄星.png"/>
												<img :src="item.img"/>
											</div>
											<p class="food-name" >{{item.menuname}}</p>
											<div class="mask" v-show="index===isShow">
												<!-- 触发弹框的按钮 -->
												<el-button type="text" @click="update(item.menuid)"><h3 class="write">编辑</h3></el-button>
											</div>
										</li>
									</div>
								</template>
							</ul>
							<el-dialog  :visible.sync="dialogFormVisible" width="40%">
								<div class="wrap">
									<!-- 上传 -->
									<el-upload
											class="upload-demo"
											drag
											action="https://jsonplaceholder.typicode.com/posts/"
											multiple>
										<i class="el-icon-upload"></i>
										<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
									</el-upload>
									<img src="../../assets/img/comment_shopcenter/shopcenter1.png">
									<img src="../../assets/img/comment_shopcenter/shopcenter1.png">
									<img src="../../assets/img/comment_shopcenter/shopcenter1.png">
								</div>
									<div class="food_info">
											<div>
													<p>菜品名称： <input class="food_name" type="text" v-model="$store.state.shop.Dialog.menuname" /></p>
													<p>价格： <input class="food_price" type="text" v-model="$store.state.shop.Dialog.price"/></p>
													<p>简介： <input class="food_context" type="text" v-model="$store.state.shop.Dialog.menutext"/></p>
													<div>是否推荐菜：
													<el-switch
																	v-model="value"
																	active-color="#DE1C31"
																	active-value="0"
																	inactive-value="1">
													</el-switch>
													</div>


											</div>
									</div>


									<div slot="footer" class="dialog-footer">
											<el-button type="primary" @click="updated($store.state.shop.Dialog.menuid)">确 定</el-button>
									</div>
							</el-dialog>	
							<div class="footer">
								<!-- <span>首页</span><span>上一页</span><i>1/2</i><span>下一页</span><span>末页</span>
								<input class="page" type="text" /> 
								<span class="jump">跳转</span> -->
								<!-- 分页 -->
								<el-pagination
									@current-change="handleCurrentChange"
									:current-page.sync="currentPage"
									:page-size="100"
									layout="prev, pager, next, jumper"
									:total=$store.state.page.pageSum
									prev-text="上一页"
									next-text="下一页"
									>
								</el-pagination>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane name="second">
					<span slot="label"><i><img src="../../assets/img/comment_shopcenter/shopcenter2.png"></i> 商家相册</span>
					<!-- 相册 -->
					<div class="shop-wrap">
						<div class="shop-content">
							<div class="content-class">菜品&价格</div>
							<ul class="clear" style="width: 1200px;" >
								<li class="food-info">
									<div class="upPic">
										<input class="file" type="file" />
									</div>
									<input class="food-name" type="text" value="请编辑名称"/>
								</li>
								<!-- 遍历菜品 -->
								<template>
									<div class="menu-item" v-for="(item,index) in $store.state.shop.shopInfoList" :key=index>
										<li class="food-info" @mouseover="handle(index)" @mouseout="hiden">
											<div class="upPic">
												<img class="del" src="../../assets/img/comment_shopcenter/del.png" @click="del(item.menuid)"/>
												<img v-show="item.type" class="coll" src="../../assets/img/comment_shopcenter/黄星.png"/>
												<img :src="item.img"/>
											</div>
											<p class="food-name" >{{item.menuname}}</p>
											<div class="mask" v-show="index===isShow">
												<!-- 触发弹框的按钮 -->
												<el-button type="text" @click="update(item.menuid)"><h3 class="write">编辑</h3></el-button>
											</div>
										</li>
									</div>
								</template>
							</ul>
							<el-dialog  :visible.sync="dialogFormVisible" width="40%">
								<div class="wrap">
									<!-- 上传 -->
									<el-upload
											class="upload-demo"
											drag
											action="https://jsonplaceholder.typicode.com/posts/"
											multiple>
										<i class="el-icon-upload"></i>
										<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
									</el-upload>
									<img src="../../assets/img/comment_shopcenter/shopcenter1.png">
									<img src="../../assets/img/comment_shopcenter/shopcenter1.png">
									<img src="../../assets/img/comment_shopcenter/shopcenter1.png">
								</div>
									<div class="food_info">
											<div>
													<p>菜品名称： <input class="food_name" type="text" v-model="$store.state.shop.Dialog.menuname" /></p>
													<p>价格： <input class="food_price" type="text" v-model="$store.state.shop.Dialog.price"/></p>
													<p>简介： <input class="food_context" type="text" v-model="$store.state.shop.Dialog.menutext"/></p>
													<div>是否推荐菜：
													<el-switch
																	v-model="value"
																	active-color="#DE1C31"
																	active-value="0"
																	inactive-value="1">
													</el-switch>
													</div>


											</div>
									</div>


									<div slot="footer" class="dialog-footer">
											<el-button type="primary" @click="updated($store.state.shop.Dialog.menuid)">确 定</el-button>
									</div>
							</el-dialog>	
							<div class="footer">
								<!-- <span>首页</span><span>上一页</span><i>1/2</i><span>下一页</span><span>末页</span>
								<input class="page" type="text" /> 
								<span class="jump">跳转</span> -->
								<!-- 分页 -->
								<el-pagination
									@current-change="handleCurrentChange"
									:current-page.sync="currentPage"
									:page-size="100"
									layout="prev, pager, next, jumper"
									:total=$store.state.page.pageSum
									prev-text="上一页"
									next-text="下一页"
									>
								</el-pagination>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane name="third">
					<span slot="label"><i><img src="../../assets/img/comment_shopcenter/shopcenter3.png"></i> 优惠&团购</span>
					<!-- 优惠&团购 -->
					<div class="shop-wrap">
						<div class="shop-content">
							<div class="content-class">优惠&团购</div>
							<template>
								<div >
									<div v-for="(item,index) in $store.state.shop.discountList" :key=index>
									<div style="overflow: hidden;margin-bottom: 10px">
										<div class="discount">
											<p class="discount_name">代金券1张</p>
												<p class="discount_price">￥{{item.now }}<del>￥{{item.was}}</del></p>
												<p class="discount_num">已售{{item.num}}</p>
										</div>
										<div class="modify">
											<button class="btnDel" @click="delDiscount(item.discountId)">删除</button>
											<button >修改</button>
										</div>
									</div>
									
									<div class="remind">
										<h4 style="font-size: 16px">购买须知</h4>
										<div style="font-size: 12px;line-height: 18px">
											<p>有效期 {{item.startTime}} 至{{item.endTime}}（周末、法定节假日通用)</p>
											<p> 使用时间 {{item.useTime}}</p>
										{{item.content}}
										</div>
									</div>
									</div>
									<div style="overflow: hidden;margin-bottom: 10px">
										<div class="discount">
											<p class="discount_name">代金券1张</p>
											<p class="discount_price discount_input" ><input style="width: 145px;" type="text" placeholder="￥XX.XX" v-model="now"/><input class="price_was" type="text" placeholder="￥xx.xx" v-model="was"></p>
											<p class="discount_num">已售0</p>
										</div>
										<div class="modify">
											<button class="btnDel" @click="addDiscount">确定</button>
											<button @click="clear">清空</button>
										</div>
									</div>
									<div class="remind_edit">
											<h4 style="font-size: 16px;padding-left: 15px">购买须知</h4>
											<el-input
															type="textarea"
															placeholder="请输入想要编辑的内容"
															v-model="textarea"
															maxlength="1000"
															show-word-limit
											>
											</el-input>
									</div>
								</div>
							</template>				
							<div class="footer">
								<!-- <span>首页</span><span>上一页</span><i>1/2</i><span>下一页</span><span>末页</span>
								<input class="page" type="text" /> 
								<span class="jump">跳转</span> -->
								<!-- 分页 -->
								<el-pagination
									@current-change="handleCurrentChange"
									:current-page.sync="currentPage"
									:page-size="100"
									layout="prev, pager, next, jumper"
									:total=$store.state.page.pageSum
									prev-text="上一页"
									next-text="下一页"
									>
								</el-pagination>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane name="fourth">
					<span slot="label"><i><img src="../../assets/img/comment_shopcenter/shopcenter4.png"></i> 基本信息&订座</span>
				
					<!--基本信息&订座-->
					<div class="shop-wrap">
					<div class="shop-content">
							<div class="content-class">	基本信息&订座</div>
							<shoporder></shoporder>
								<div class="footer">
								<!-- <span>首页</span><span>上一页</span><i>1/2</i><span>下一页</span><span>末页</span>
								<input class="page" type="text" /> 
								<span class="jump">跳转</span> -->
								<!-- 分页 -->
								<el-pagination
									@current-change="handleCurrentChange"
									:current-page.sync="currentPage"
									:page-size="100"
									layout="prev, pager, next, jumper"
									:total=$store.state.page.pageSum
									prev-text="上一页"
									next-text="下一页"
									>
								</el-pagination>
							</div>
					</div>
					</div>
				</el-tab-pane>
				<!-- 左边底部的设置 -->
				<el-tab-pane>
					<span slot="label">
						<div class="more1">
							<img src="../../assets/img/comment_shopcenter/setting.png" />
							<img src="../../assets/img/comment_shopcenter/skin.png">
							<img src="../../assets/img/comment_shopcenter/more.png">
							<img src="../../assets/img/comment_shopcenter/message.png">
						</div>
					</span>
				</el-tab-pane>
			</el-tabs>												
		</template>
    </div>
</template>

<script>
	
	import dialog from "../../components/shopcenter/dialog.vue";
	import shoporder from "../../components/seats/shoporder.vue";
	export default {
		name:"shopcenter",
		data() {
			return {
				textarea: '',
				value:this.$store.state.shop.Dialog.type,
				pageIndex:1,
				currentPage: 5,
				foodId:'',
				isShow:-1,
				activeName: 'first',
				tabPosition: 'left',
				now:'',
				was:'',
				tags: [
					{ name: '标签一', type: '' },
					{ name: '标签二', type: 'success' },
					{ name: '标签三', type: 'info' },
					{ name: '标签四', type: 'warning' },
					{ name: '标签五', type: 'danger' }
				],
				// list:[
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙",
				// 		score:1
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/2.png"),
				// 		name:"神仙",
				// 		score:0,
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/2.png"),
				// 		name:"神仙",
				// 		score:1
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙"
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙"
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙"
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙"
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙"
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙"
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙"
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙"
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙"
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙"
				// 	},
				// 	{
				// 		img:require("../assets/img/comment_shopcenter/1.png"),
				// 		name:"神仙"
				// 	}
				// ],
				str:"开心两份",
				price:"￥28",
				context:"凉菜，酸甜口，红糖，素菜",
				value:1,
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
						name: '',
						region: '',
						date1: '',
						date2: '',
						delivery: false,
						type: [],
						resource: '',
						desc: ''
				},
				formLabelWidth: '120px'
			};
		},
		methods:{
			update(menuid){
				this.dialogFormVisible = true;
				this.$store.dispatch("updateInfo",menuid);
			},
			updated(menuid){
				this.dialogFormVisible = false;
				console.log(menuid,this.$store.state.shop.Dialog.type/1)
				console.log(menuid,this.$store.state.shop.Dialog)
				this.$store.dispatch("updatedInfo",this.$store.state.shop.Dialog);
				this.$store.dispatch("getShopInfo",this.currentPage);
			},
			del(menuid){
				this.$store.dispatch("delete",menuid);
				this.$store.dispatch("getShopInfo",this.currentPage);
			},
			handleClose(tag){
				this.tags.splice( this.tags.indexOf(tag), 1);
			},
			handle(index){
				this.isShow=index;
			},
			hiden(){
				this.isShow=!this.isShow;
			},
			handleCurrentChange(val) {
				//console.log(`11111当前页: ${val}`); 
				this.$store.dispatch("getShopInfo",val);
			},
			delDiscount(discountId){
      this.$store.dispatch("delDiscount",{shopId:localStorage.shopId,discountId,});
      this.$store.dispatch("getDiscount",localStorage.shopId);
			},
			updateDiscount(discountId,now,was){
      this.$store.dispatch("updateDiscount",{shopId:localStorage.shopId,discountId,});
      this.$store.dispatch("getDiscount",localStorage.shopId);
	},
	addDiscount(){
		console.log(this.now,this.was);
		this.$store.dispatch("addDiscount",{now:this.now,was:this.was,remind:this.textarea});
		 this.$store.dispatch("getDiscount",localStorage.shopId);
	},
	clear(){
			this.now='';
			this.was='';
	}
		},
		mounted() {
		this.$store.dispatch("getShopInfo",this.pageIndex);
		 this.$store.dispatch("getDiscount",localStorage.shopId);
			},
			components:{
				shoporder,
			}
  	}  
</script>

<style scoped>
@import "../../assets/style/public.css";
@import "../../assets/style/shopcenter.css";
	.mask{
		width:180px;
		height:160px;
		background:rgba(0,0,0,0.3);
		position:absolute;
		top:20px;
		z-index:100;
	}
	.write{
		width:59px;
		height:59px;
		text-align:center;
		font-size:14px;
		line-height: 59px;
		font-weight:bold;
		color:rgba(255,255,255,1);
		background:rgba(254,143,155,1);
		border-radius:50%;
	}
	.food-info{
		position:relative;
	}
	.el-message-box__wrapper .el-message-box{
		width:513px !important;
		height:517px !important;
		background:rgba(25,255,255,1) !important;
	}
    .el-dialog__header{
        width:100%;
        height:40px;
        background:rgba(254,143,155,1);
        padding: 0 !important;
    }
    .el-dialog__body{
        padding:20px 40px !important;
        overflow: hidden;
	}
	.upload-demo{
		
		float:left;
	}
    .wrap{
        width: 114%;
    }
    .wrap img{
        margin-top: 24px;
        width: 180px;
        height: 120px;
        margin-right: 62px;
    }
    .el-dialog__headerbtn .el-dialog__close{
        width:16px;
        height:17px;
        color: #fff!important;
    }
    .el-dialog__headerbtn{
        top:11px !important;
	}
	.el-upload-dragger{
		width:180px !important;
		height:120px !important;
		background:#FE8F9B !important;
	}
	.el-upload-dragger .el-icon-upload{
		color:#fff !important;
		line-height:28px !important;
	}
	.el-upload-dragger .el-icon-upload:hover{
		color:red !important;
	}
    .food_name{
        width:106px;
        text-align:center;
        height:22px;
    }
    .food_context{
        width:180px;
        text-align:center;
        height:22px;
    }
    .food_info input{
        border:1px solid rgba(222,28,49,1);
    }
    .food_price{
        width: 60px;
        text-align: center;
        height: 22px;
    }
    .food_info p{
        line-height: 24px;
		}
	/* 优惠券样式 */
	.discount{
		float: left;
		width: 370px;
		height: 170px;
		padding-left: 136px;
		padding-top:20px;
		color:#333;
		/*//border-left: 1px solid #DE1C31;*/
	
		background: url("../../assets/img/comment_shopcenter/discount.png")no-repeat;
	}
	.discount_name{
		font-size: 24px;
	}
	.discount_price{
		font-size: 36px;
	}
	.discount_num{
		font-size: 16px;
		padding-left:124px;
		padding-top: 16px;
	}
	.discount del{
		font-size:16px;
	}
	.remind{
		padding:14px 18px;
		width:885px;
		height:150px;
		margin-bottom: 20px;
		background:rgba(255,255,255,1);
		border:1px solid rgba(222,28,49,1);
	}
	.modify{
		float: right;
	}
	.modify button{
		padding:9px 18px;
		font-size: 12px;
		color:#333;
		font-weight:bold;
		display: block;
		border:1px solid rgba(222,28,49,1);
		border-radius:5px;
		margin-top: 10px;
	}
	.btnDel{
		color: #fff !important;
		background:rgba(222,28,49,1);
	}
	.discount_input{
		width:225px;
		height:41px;
		padding-left:6px;
		line-height: 41px;
		border:1px solid rgba(222,28,49,1);
	}
	.price_was{
		width: 66px;
		font-size: 18px;
		padding-left: 5px;
		text-decoration: line-through;
	}
	.el-textarea__inner{
		border:transparent !important;
	}
	.el-textarea__inner:hover{
		border:transparent !important;
	}
	.remind_edit{
		width:100%;
		height:100%;
		border:1px solid rgba(222,28,49,1);
	}
</style>