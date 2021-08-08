const express = require ("express");
const mongoose = require("mongoose");
const Cards = require("./dbCards.js");
const Cors = require("cors");

//app config
const app = express();
const port = process.env.PORT || 5000;
const ConnectionURL = "mongodb+srv://admin:UhQnAcrFb29ivGd@cluster0.u7wfl.mongodb.net/hastMelapdb?retryWrites=true&w=majority"

//Middlewares
app.use(express.json());
app.use(Cors());


//Db config
mongoose.connect(ConnectionURL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

//api endpoints
app.get("/",(req,res) => {
    res.send("Hello World");
});


app.post("/hast-melap/cards",(req,res) =>{
    const dbCard = req.body;

    Cards.create(dbCard, (err,data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
});

app.get("/hast-melap/cards",(req,res)=>{
    Cards.find((err,data) => {
        if(err){
            res.status(500).send(err)
        } 
        else{
            res.status(201).send(data)
        }
    })
})

//listner
app.listen(port,() => {
    console.log(`server is running on ${port}`);
});   