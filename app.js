/*
 requiring express for creating frameworks
to create a web application 
useful for CRUD operartions
C : create data
R : read data 
U : update data 
D : delete data 

*/
const express = require("express");
const app = express();
const path = require("path");
const port = 9090;

//requiring the expressError class for error handling
const ExpressError = require("./utils/expressError.js");

//requiring the ejs mate package
const ejsMate = require("ejs-mate");

//requiring mongoose for the database management
const mongoose = require("mongoose");
const MONGO_URL = 'mongodb://127.0.0.1:27017/AYUSH';

async function main() {
    await mongoose.connect(MONGO_URL);
}
main()
    .then(res => console.log("connected to db"))
    .catch(err => console.log(err));

//setting the app 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine('ejs', ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//getting the schema so that we can access the data
//of the database of plants
const plantData = require("./models/plantsListing.js");

//getting the schema so that we can access the data
//of the database of diseases
const diseaseData = require("./models/diseasesListing.js");

//requiring the feedback schema to insert feedback into the database 
const FdBack = require("./models/fdBack.js");

//home route 
app.get("/", async (req, res) => {
    const allDiseases = await diseaseData.find({});
    res.render("./plants/miscellanous/index.ejs", { allDiseases });
});


//getting the login 
app.get("/login", (req, res) => {
    res.render("./plants/login/login.ejs");
});

//posting the info in sql database
//and redirecting the user to the home page
app.post("/login", (req, res) => {
    // console.log("request :" , req) ;
    // console.log("response : " , res) ;


    res.redirect("/");
});


//searching the disease or the plant name 
//if available it is displayed
//else "NOT FOUND "
// if the plant is searched the platn details will be displayed 
//if the disease is searched the disease card is displayed
//else the error of not being able to search is displayed 
app.get("/search", async (req, res) => {
    try {
        //fetching the searched out plant or disease
        let query = req.query.query;

        //fetching the plant  
        const plantQuery = await plantData.findOne({ commonName: query });
        //fetching the disease  
        const diseaseQuery = await diseaseData.findOne({ title: query });

        //throwing error in case the search is not found 
        if (!plantQuery && !diseaseQuery) {
            let error = new ExpressError(404, "Search Not Found");
            //error if the disease is not found
            res.render("error.ejs", { error });
        }
        else if (plantQuery) {
            let Plant = plantQuery;
            res.render("./plants/plants/plantDetails.ejs", { Plant });
        }
        else {
            res.render("./plants/miscellanous/search.ejs", {
                query,
                // used to conditionally assign a value
                //  to the plantResults and diseaseResults .
                /*meaning that if the plantQuery or diseaseQuery exists
                it will be true sos plantResults or diseaseReults will be assigned
                the plantQuery or diseaseQuery in form of arrays */
                plantResults: plantQuery ? [plantQuery] : []
                , diseaseResults: diseaseQuery ? [diseaseQuery] : []
            });


        }
    } catch (err) {
        console.log(err);
        res.render("./plants/miscellanous/search.ejs");

    }

});

//rendering the feedback page
app.get("/fdBack", (req, res) => {
    res.render("./plants/miscellanous/fdBack.ejs");
});
//fetching and inserting the feedback data into the database
app.post("/fdBack", async (req, res) => {
    let { fdBack } = req.body;
    let newFdBack = new FdBack({
        fdBack: fdBack,
    })
    await newFdBack.save();

    res.redirect("/");
});

//retrieving the info from the feed back page 
//i.e the port request from the feed back page 
app.post("/", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

//rednering the settings page
app.get("/settings", (req, res) => {
    res.render("./plants/miscellanous/settings.ejs");
});

//displaying the plants page where the list of plants 
//will be printed
app.get("/:diseaseName", async (req, res) => {
    let { diseaseName } = req.params;
    const disease = await diseaseData.findOne({ title: diseaseName });

    let error = new ExpressError(404, "Disease Not Found");
    //error if the disease is not found
    if (!disease) { res.render("error.ejs", { error }) }

    //accessing the plants from the 
    //diabetes plants array in the database  
    const plants = await plantData.find({
        //this command is used to match each element 
        //of the array of common name to each element of the
        // disease.plants array
        commonName: { $elemMatch: { $in: disease.plants } }
    });

    //this plants is an array that is storing objects
    res.render("./plants/plants/displayPlants.ejs", { disease, plants });
});

//displaying the individual plant's details
app.get("/:diseaseName/:plantName", async (req, res) => {

    //acquiring the plant name from the parameters
    let { plantName } = req.params;
    const Plant = await plantData.findOne({ commonName: plantName });

    res.render("./plants/plants/plantDetails.ejs", { Plant });
});


//trying to handle errors
app.all("*", (req, res, next) => {
    next(new ExpressError(400, "PAGE NOT FOUND"));
});
app.use((err, req, res, next) => {
    console.log(err);
    let { status = 400, message = "something went wrong" } = err;
    res.status(status).send(message);
});

//listening
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});












//middleware used delete if not working
// app.use("/:diseaseName/:plantName", async (err, req, res, next) => {
//     console.log("MIDDLEWARE USED ");
//     let { plantName } = req.params;
//     const Plant = await plantData.findOne({ commonName: plantName });
//     // console.log(Plant) ;
//     // for (let key in Plant) {
//     //     // if (err) {
//     //     //     throw new ExpressError(400, "NOT WORKING");
//     //     // }
//     //     console.log(Plant);
//     //     // if(Plant.key.length > 0) {
//     //     //     Plant.key.forEach(value=> console.log(value)) ;
//     //     //     // console.log()
//     //     // }
//     // }
//     next();
// });