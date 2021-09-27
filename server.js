const express = require('express') //
const app = express() 
const cors = require('cors');//

app.use(cors()) 
app.use(express.json())
require('dotenv').config();//
const mongoose = require("mongoose");//
const PORT=process.env.PORT;
const MongoUrl = process.env.MONGO_URL
mongoose.connect(MongoUrl)
const {createDigi, upDateDigi, deleteDigi, getDigi} = require('./controller/Digimon.controller')

app.get('/',(req,res)=>{
    res.json('hello world')
});

app.post('/favs', createDigi)
app.put('/favs/:digi_id', upDateDigi)
app.delete('/favs/:digi_id', deleteDigi)
app.get('/favs', getDigi)



app.listen(PORT,()=>{ console.log(`listining to ${PORT}`);})