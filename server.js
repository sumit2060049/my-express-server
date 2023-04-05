const express = require("express");
const app = express();

//app.listen(3000);
// app.get("/",function(request,response){
//     //console.log(request);
//     //response.send("hello");
//     response.send("<h1> Hello, world!<h1>")
// })
app.get("/",function(req,res){
         //console.log(request);
         //response.send("hello");
         res.send("<h1> Hello, world!<h1>")
    })
app.get("/contact",function(req,res){
         res.send("Contact me at:mrsumitkumar45@gmail.com")
    })
app.get("/about",function(req,res){
         res.send("Hello myself sumit kumar.")
    })
app.get("/hobbies",function(req,res){
        res.send("<ul><li>cofee</li><li>code</li></ul>")
   })
app.listen(3000,function(){
    console.log("server started on port 3000");
});