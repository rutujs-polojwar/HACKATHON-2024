/*
defining the schema and exporting it 
the schema is a basic layout on what kind of information 
every plant should include 
this is like a class and the object will be made 
in the init folder

this includes the details of individual plant

 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const plantSchema = new Schema({


    botanicalName: [String] ,
    commonName : [String] ,
    habitatInformation : [String] ,
    medicalUses:[String],
    cultivationMethod : [String] ,
    advantagesAndProperties : [String],
    partsUsed :  [String],
    traditionalUsesAndPreparationMethod :  [String],
    safetyPrecautions :  [String],
    storageAndPreservation :  [String],
    healthBenefits :  [String],
    advantageOfDailyConsumption :  [String],
    availabilityAndSeason :  [String],


}) ;

plantSchema.index({botanicalName : 1}) ;
plantSchema.index({commonName : 1}) ;


const Plant = mongoose.model("Plant" , plantSchema) ;

module.exports = Plant ;