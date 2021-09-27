const { request, response } = require("express");

const AddfavModel = require("../model/addFav.model");

const createDigi = (request, response) => {
    console.log('from creatDigi');
    const { name, url, email } = request.body;
    const newDigimon = new AddfavModel({
        name, url, email
    })
    newDigimon.save()
    response.json(newDigimon)
}

const upDateDigi = (request, response)=>{
    const { name, url, email } = request.body;
    const digiId = request.params.digi_id;
    AddfavModel.findByIdAndUpdate({_id:digiId}, { name, url, email }, {new:true},(error, updatesDigi)=>{
        response.json(updatesDigi)
    })
}

const deleteDigi = (request, response)=>{
    const digiId = request.params.digi_id;
    AddfavModel.deleteOne({_id:digiId}, (error,deletRes)=>[
        response.json(deletRes)
    ])
}
const getDigi = (request,response)=>{
    AddfavModel.find((error,getResponse)=>{
        response.json(getResponse)
    })
}

module.exports = {createDigi, upDateDigi, deleteDigi, getDigi}