const Mongoose = require ("mongoose");

const cardSchema = Mongoose.Schema({
    name : String,
    imgUrl: String
});

module.exports =  Mongoose.model("cards",cardSchema);