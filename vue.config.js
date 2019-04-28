module.exports={
	devServer:{
		host:"127.0.0.1",
		port:8080,

		// host:"http://127.0.0.1:8080",
		/* port:8080 */
	/* 	proxy:{
			"/lh":{
				target:"http://127.0.0.1:8080",//th
				changeOrigin:true,
				pathRewrite:{
					"^lh":""
				}
			}
		} */
	}
}