import Vue from "vue/dist/vue";
const filters = {
    date(v){
        var d = new Date(v);
        return d.getFullYear()
            +"-"+((d.getMonth()+1)).toString().padStart(2,"0")
            +"-"+(d.getDate()).toString().padStart(2,"0")
            +" "+(d.getHours()).toString().padStart(2,"0")
            +":"+(d.getMinutes()).toString().padStart(2,"0")
            +":"+(d.getSeconds()).toString().padStart(2,"0")
    },
    currency(v){
        return "￥"+v.toFixed(2)
    },
	

  numFilter(value) {

    let realVal = parseFloat(value).toFixed(1)

    return realVal

  },
  sp(v){
      if(v.includes(",")){
          return v.split(",")
      }else{
        return v
      
      }
         
  }


}

export default {
    install(Vue){
        for(var key in filters){
            Vue.filter(key,filters[key])
        }
    }
}