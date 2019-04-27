module.exports={
	devServer:{
		// host:"http://10.9.62.231",
		//  port:8080 
		proxy:{
			"/lh":{
				target:"10.9.62.230",
				changeOrigin:true,
				pathRewrite:{
					"^lh":""
				}
			}
		}
	}
}