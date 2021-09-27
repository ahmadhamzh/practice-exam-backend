const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addFavSchema = new Schema({
    name: { type: String },
    url: { type: String },
    level: { type: String },
    email: { type: String }
})

const AddfavModel = mongoose.model("favDigimon", addFavSchema);
module.exports = AddfavModel;