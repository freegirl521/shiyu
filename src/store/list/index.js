import Vue from "vue"
import bus from "../../bus"
import axios from "axios"
import Qs from 'qs'
export default{
	state:{
 		listtype:{},
		req:{
			pageNum:1,//要跳转的页
			shopAdsType:"",//顶部地址
			shopName:"",//店铺名称（模糊查）
			shopType:"",//分类
			shopAds:"",//地点（模糊查）
			sortType:"commentscore",//排序类型
			sort:"DESC",//排序方式
			group:0,//团(1为选中)
			draw:0,//订
			outer:0,//外
		}
	},
	
	getters:{
		
	},
	mutations:{
		MUIT(state,data){
			state.listtype = data;
		},
		CHANG_LIST(state,data){
			state.listtype=data;
		},
		CHANG_LIST1(state,data){
			state.listtype=data
		},
		CHANG_LIST2(state,data){
			state.listtype=data
		},
		CHANG_LIST3(state,data){
			state.listtype=data
		},
		CHANG_LIST4(state,data){
			state.listtype=data
		},
		CHANG_LIST5(state,data){
			state.listtype=data
		},
		CHANG_LIST6(state,data){
			state.listtype=data
		},
		CUR_PAGE(state,data){
			state.listtype=data
		},
		GET_ALL(state,data){
			state.listtype=data
		}
	},
	actions:{
		multitermSearch({commit},obj){//返回值
			axios.get("/MultitermSearch",{
					shopName:obj.shopName
			})
			.then(({data})=>{
				commit("MUIT",data);
			})
		},
		group(state,type){	
			// console.log(123)
		axios.post("/MultitermSearch",Qs.stringify(type))
			.then(({data}) => {
				state.commit("CHANG_LIST",data)
			})
		},
		choice(state,type){
			axios.post("/MultitermSearch",Qs.stringify(type)
			/* axios.get('/MultitermSearch',{ params:type} */
			).then(({data})=>{
				state.commit("CHANG_LIST3",data)
			})
		},
		fn4(state,type){
			axios.get("/MultitermSearch",{
				type
			}).then(({data})=>{
				state.commit("CHANG_LIST4",data)
			})
		},
		fn5(state,type){
			axios.get("/MultitermSearch",{
				type
			}).then(({data})=>{
				state.commit("CHANG_LIST5",data)
			})
		},
		avea(state,type){
			axios.get("/MultitermSearch",{
				type
			}).then(({data})=>{
				console.log(data,2235)
				state.commit("CHANG_LIST6",data)
			})
		},
// 		handleCurrentChange(pageNum){
// 			axios.get("/MultitermSearch",{
// 				/* pageNum */
// 			}).then(({data})=>{
// 				// console.log(data)
// 				commit("CUR_PAGE",data)
// 			})
// 		},
		getall(state,obj){
			axios.get("/MultitermSearch",{
				cityId:obj.cityId,
				catId:obj.catId
			}).then(({data})=>{
				state.commit("GET_ALL",data)
			})
		}
		/* getNum(){
			axios.get("/shiyu/MultitermSearch").then(({data})=>{
				console.log(data)
				state.commit("CUR_PAGE",data)
			})
		} */
	}
}