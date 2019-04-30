<template>
    <section>
        <div class="logo-input">
            <a href="" title="食遇" class="logo"></a>
            <div class="city-list"></div>
            <div class="search-bar">
					<span class="search-container">
						<i class="i-search"></i>
						<span>
							<input type="text" v-model.lazy="keyWord" class="input-kw" autocomplete="off" placeholder="请输入您要搜索的菜品、店铺名称">
						</span>
						<span class="search-btn">
							<router-link :to="{name:'listapp',query:{keyWord}}"><a class="search-item" target="_blank">搜索</a></router-link>
						</span>
						<p class="hot-search" >
							<a class="search-tips" target="_blank">热门搜索：</a>
							<span v-for="item in $store.state.home.reSou">
							<template >
								<router-link :to="{name:'listapp',query:{catId:item.catId}}">
							<a class="search-word" href="" target="_blank">{{item}}</a>
								</router-link>
							</template>
							</span>
						</p>
					</span>
            </div>
        </div>
		<div>
		</div>
    </section>
</template>

<script>

    export default {
        data(){
           return {
               keyWord:""
		   }
		},
		methods:{
			search(){
			    console.log(this.keyWord);
			    //this.$store.dispatch("getSearch",this.keyWord)

			}
		},
        mounted(){

		},

    }
</script>

<style scoped>

</style>