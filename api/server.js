const express = require("express");
<<<<<<< HEAD
=======
<<<<<<< HEAD
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended:false
// }));
app.all("*",function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type");
    res.header("Access-Control-Allow-Methods","DELETE,PUT,GET,POST,OPTIONS");
    next();
})
// app.post("/sum",function (req,res) {
//     console.log(req.body);
//     res.json({
//         ok:1,
//         msg:"post success"
//     })
// })
app.get("/shopcenter/GetStoreFoodList",function (req,res) {
    console.log(req.query);
    res.json({
        ok:1,
        msg:"post success",
        data:{
            name:'lalala'
        }
        
    })
})

app.get("/sum",function (req,res) {
    console.log(req.query);
    res.json({
        ok:1,
        msg:"get success"
    })
})
app.listen(8080,function () {
=======
>>>>>>> 7d61403b14594c40d7c26eb6a661f0a0160d2836
const proxy = require("http-proxy-middleware");
const history = require("connect-history-api-fallback")
const app = express();

app.use("^/lh",proxy({
<<<<<<< HEAD
    target:"http://10.9.67.44:8084",
=======
    target:"localhost:8080",//http://10.9.67.44:8084/
>>>>>>> 7d61403b14594c40d7c26eb6a661f0a0160d2836
    changeOrigin:true,
    pathRewrite:{
        "^/lh":"/"
    }
}))
// url重写  将所有的请求指向index.html
app.use(history(
    {
        // index:"index.html",
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
    }
));
<<<<<<< HEAD


app.use(express.static(__dirname+"/dist"));
app.listen(80,function () {
=======
// app.use("^/lh",function (req,res) {
//     console.log(121212);
//     res.json({
//         ok:3
//     })
// })

app.use(express.static(__dirname+"/dist"));
//




app.listen(80,function () {
>>>>>>> 8124c75c32628c71d45a883d50158c6263936d5e
>>>>>>> 7d61403b14594c40d7c26eb6a661f0a0160d2836
    console.log("success");
})