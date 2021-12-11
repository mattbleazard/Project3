/*  Team Members: Adam Bonny, Adam Gao, Bryson Shanklin, Garrett Sackley, Matt Bleazard
      IS 303 Professor Hilton Section 001
      Project 3 Vehicle Inventory System  */

// Setting variables and app environment
const portNum = process.env.PORT || 3000;
let express = require('express');
let path = require('path');
let app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

// Connection to the database
const knex = require(path.join(__dirname + '/knex/knex.js'));

// Log to the console when the app is running
app.listen(portNum, () => console.log('The server is listening'));

// Route for the index page
app.get('/', (req, res) => res.render('index'));

// Display data from vehicle database
app.get("/displayvehicle", (req, res) => {
      knex.select().from("Vehicle").then(vData => {
          res.render("displayVehicle", {myVehicles : vData});
      })
  });


// Edit a record
app.get("/editVehicle/:id", (req, res) => {
    knex("Vehicle").where("vehicle_id", req.params.id).then(vehicle => {
        res.render("editVehicle", {myVehicles: vehicle});
    });
});

app.post("/editVehicle", (req, res) => {
    knex("Vehicle").where("vehicle_id", parseInt(req.body.VehicleID)).update({
        vDescription: req.body.vDescription,
        vType: req.body.vType,
        vYear: req.body.vYear,
        vMileage: req.body.vMileage,
        vStillUsing: req.body.vStillUsing
    }).then(myVehicles => {
        res.redirect("/displayvehicle");
    });
});

//Add a Record
app.get("/addVehicle", (req, res) => {
    knex.select().from("Vehicle").then(vData => {
        res.render("addVehicle", {myVehicles : vData});
    });
});

app.post("/addVehicle", (req, res) => {
    knex("Vehicle").insert({
        vDescription: req.body.vDescription, 
        vType: req.body.vType, 
        vYear: req.body.vYear, 
        vMileage: req.body.vMileage,
        vStillUsing: req.body.vStillUsing
    }).then(myVehicles => {
        res.redirect("/displayvehicle");
    })
});  

//Delete a record
app.post("/deleteVehicle/:id", (req, res) => {
    knex("Vehicle").where("vehicle_id", req.params.id).del().then(myVehicles => {
        res.redirect("/displayvehicle");
    }).catch(err => {
        console.log(err); //display err to the console log
        res.status(500).json({err}); //return a 500 status and the json of the err
    })
}); 
