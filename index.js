/*  Team Members: Adam Bonny, Adam Gao, Bryson Shanklin, Garrett Sackley, David Hamblin, Matt Bleazard
      IS 303 Professor Hilton Section 001
      Project 3 Vehicle Inventory System  */

const portNum = 3000;
let express = require('express');
let path = require('path');
let app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.listen(portNum, () => console.log('The server is listening'));
app.get('/', (req, res) => res.render('index'));

//connect to database
const knex = require("knex")({
      client: "pg",
      connection: {
          host : "localhost",
          user : "postgres",
          password : "Iloveis303",
          database : "postgres",
          port : 5432
      }
  });

// retrieve data from table
app.get("/displayvehicle", (req, res) => {
      knex.select().from("Vehicle").then(vData => {
          res.render("displayVehicle", {myVehicles : vData});
      }).catch(err => {
            console.log(err);
            res.status(500).json({err});
      });
  });


// Edit a record (24.9)
app.get("/editvehicle", (req, res) => {
    knex.select().from("Vehicle").then(vData => {
        res.render("editVehicle", {myVehicles : vData});
    }).catch(err => {
          console.log(err);
          res.status(500).json({err});
    });
});

//Insert a Record (24.10)



//Delete a record (24.11)
app.post("/deletevehicle/:id", (req, res) => {
    knex("Vehicle").where("vehicle_id", req.params.id).del().then(mybands => {
        res.redirect("/displayvehicle");
    }).catch(err => {
        console.log(err);
        res.status(500).json({err});
    })
}); 
