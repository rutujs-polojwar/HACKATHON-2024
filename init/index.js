/*
this file is used to require the data and the model
from both plantsListing.js from models folder 
and the data.js file from the init folder 
then the mongoose will be started to input the information into
the actual database

here the diseases file is required as well an then it is
saved into the data base 
however both of them are not connected

*/

const mongoose = require("mongoose");

const plantData = require("./plants.js");
const plantListing = require("../models/plantsListing.js");

const diseaseData = require("./diseases.js") ;
const diseasestListing = require("../models/diseasesListing.js");


const fdBackData = require("./fdBackData.js") ;
const fdBack = require("../models/fdBack.js") ;

const MONGO_URL = 'mongodb://127.0.0.1:27017/AYUSH';

//starting the database 

async function main() {
    await mongoose.connect(MONGO_URL);
}
main()
    .then(res => console.log("connected to db"))
    .catch(err => console.log(err));


    const plantInitDB = async ()=> {
        await plantListing.deleteMany({}) ;
        await plantListing.insertMany(plantData.data) ;
        console.log("plants data inserted") ;
    } ;
    const diseaseInitDB = async ()=> {
        await diseasestListing.deleteMany({}) ;
        await diseasestListing.insertMany(diseaseData.data) ;
        console.log("diseases data inserted") ;
    } ;

    const fdBackInitDB = async ()=> {
        await fdBack.deleteMany({}) ;
        await fdBack.insertMany(fdBackData.data) ;
        console.log("feedback data inserted") ;
    } ;
    plantInitDB()
    .then((res,err) => {
        if(err)throw err ;
        console.log(res) ;
    }) 
    .catch(err => console.log(err) );

    diseaseInitDB()
    .then((res,err) => {
        if(err)throw err ;
        console.log(res) ;
    }) 
    .catch(err => console.log(err) );

    fdBackInitDB()
    .then((res,err) => {
        if(err)throw err ;
        console.log(res) ;
    }) 
    .catch(err => console.log(err) );


