/*this file creates a schema for
storing the feedback and then presenting it to the admin */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fdBackSchema = new Schema({
    fdBack:
    {
        type: String,
    
    }
}) ;

const FeedBack = mongoose.model("FeedBack" , fdBackSchema) ;

module.exports= FeedBack ;