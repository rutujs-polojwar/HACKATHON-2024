const mongoose = require("mongoose") ;

const Schema = mongoose.Schema;
const diseasesSchema = new Schema({
    title : {
        type : String ,

        // required : true ;
    } ,
    diseasePictureLink : {
        type : String  ,
         default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9hPhvpAivS3oVZOEl-j34AGH5HGZE3HbqA&s" ,
        set: function (v) {
            return v && v.trim() !== "" ? v : this.default;
        },
    } ,
    plants : [String] ,

}) ;

diseasesSchema.index({plants : 1}) ;

const Disease = mongoose.model("Disease" , diseasesSchema) ;

module.exports = Disease ;
