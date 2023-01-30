const express = require("express");
const https = require("https");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");


});
app.post("/",function(req,res){
  const querry=req.body.cityName;
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+querry+"&appid=39a4ebd67c8aae0b7021e69ff34c45d7&units=metric"
  https.get(url,function(response){
    console.log(response);
    response.on("data",function(data){
      const weatherData=JSON.parse(data);
      console.log(weatherData);
      const discription=weatherData.weather[0].description;
      const temp = weatherData.main.temp
      const icon = weatherData.weather[0].icon
      const imgurl="http://openweathermap.org/img/wn/"+icon+"@2x.png"

      res.write("<p>The weather discription in "+querry+" is :"+discription+"</p>")
      res.write("<h1>The tempreture is :"+temp+"degree celcious in "+querry+"</h1>")
      res.write("<img src="+imgurl+"></img>");
      res.send();
      res.redirect("/");
    })
  });
});
app.listen(3000,function(){
  console.log("port stared on 3000");
})
