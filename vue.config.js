module.exports={
	devServer:{
		// host:"http://10.9.21.173",
		// port:8080 
		proxy:{
			"/lh":{
				target:"10.9.62.238",
				changeOrigin:true,
				pathRewrite:{
					"^lh":""
				}
			}
		}
	}
}