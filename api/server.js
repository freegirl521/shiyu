const express = require("express");
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
    console.log("success");
})