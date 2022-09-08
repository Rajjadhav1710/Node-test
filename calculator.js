const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true})); 

app.get("/",function(req,res){
    // console.log("curr:"+__dirname);
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    // console.log(req.body);
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1 + num2;
    res.send("Thnks for submitting:"+result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var BMI = weight/(height*height);
    res.send("Your BMI is "+ BMI);
});


app.get("/cron", (req, res) => {
  // the code you want to run
   console.log("cron job called");
  res.sendStatus(200) // sends an "OK" response
})

app.listen(process.env.PORT,function(){
    console.log("server started on port 3000");
})
