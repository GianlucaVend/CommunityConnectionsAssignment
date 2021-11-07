const express=require('express')
const ejs = require('ejs')
const masterWeather=require('./weather.js')
const os = require("os");
const bodyParser = require("body-parser");
const cityWeather = masterWeather.cityWeather; 
app.get("/", (req,res)=> {
    res.sendFile(__dirname + "/public/index.html");
})
app.get("/weather/:city?/:day?",(req,res)=>{
    if(req.params.city)
    {
            let city = req.params.city.toLocaleLowerCase();

            if(req.params.day)
            {
                let day = req.params.day.toLocaleLowerCase(); 
                if(city == "kingston" )
                {
                    res.send(cityWeather[city]["kingston" + day.charAt(0).toLocaleUpperCase()+ day.slice(1)]);
                    // change letter of the day varibale to uppcase to match what we have in weather.js 
                }

                res.send(cityWeather[city][day]);
            }
            else 
            {
                res.send(cityWeather[city]); 
            }
    }
    else 
    {
        res.send(masterWeather); 
    }
})