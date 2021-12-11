[x] Setup
    Create a folder called Project3.
    Using PgAdmin, in your postgres database:
    Create a table in that database called "Vehicle". The structure for the table is as follows:
    vehicle_id, integer, not null, primary key, and auto increment
    vDescription, text (30), not null
    vType, text (1), not null ("C - Car, T - Truck, B - Bike, M - Motorcycle")
    vYear, integer
    vMileage- integer (0 for Bike)
    vStillUsing - text (1) ("Y or N")
    In the Vehicle table, using PgAdmin, add the following records: (NOTE: the autoincrement will be generated so I did not include it here)
        Lexus 350, C, 2019, 21000, Y
        Mini Cooper, C, 2014, 63000, N
        Ford F-150, T, 2016, 37500, Y
        Lexus 350, C, 2019, 2100, Y
        Polygon Siskiu D6, B, 2021, 0, Y
        Suzuki, GW250, M, 2013, 54890, N
[x] NPM Setup
    - Use npm init to create a project file using the following parameters:
    - The project name as Project3, the description as "Vehicle Inventory System", main as index.js, and the author as a comma-separated list of group
      member names. You can leave the other fields default or empty
    You will use NPM to install
        express
        path
        knex
        pg
        ejs
    [x] Create a server file called index.js
    [x] Create a main landing page called index.ejs (in a views subfolder). 
Index.ejs
    [x] This page should have some means of displaying the "displayVehicle.ejs" page (i.e. button, menu item, image, etc.).
displayVehicle.ejs
    [x] The displayVehicle.ejs file should display all the records from the vehicle table. It should also have a delete button on the left of each record 
      and an edit button on the right of the record.
    [x] Somewhere in this page there should be a button for adding a new record.
deleteVehicle.ejs
    [x] The delete button should route to deleteVehicle and should receive the vehicle_id. This is a post method and should delete the vehicle from the 
      vehicle table. If there is an error, then return a 500 status and the json of the err. Also display the err to the console log. If the delete 
      works then redirect back to ("/displayvehicle") which is renders the displayVehicle.ejs file.
EditVehicle.ejs
    [x] The edit button should use the editVehicle route and pass the data from the record to the editVehicle.ejs file. The data will be displayed as:
        description – text
        type – radio button group with default of "C" for new records ("C - Car, T - Truck, B - Bike, M - Motorcycle")
        year – number with min of 1950 and no max
        mileage - number (Do not allow editing for the Bike)
        still_using – checkbox with default of "Y" on new records ("Y or N")
    [x] Allow the user to change the data. There should be a Save and Cancel button on this page. If the user clicks on the Save button, then the data 
      should be saved back to the record updating the fields. If the user clicks on the Cancel button, then it should redirect back to the home back 
      and display the records from the vehicle table. This should happen on the Save also.
addVehicle.ejs
    [x] If the user clicks on the Add button, then it should use the addVehicle route and take the user to the addVehicle.ejs file. When the user clicks 
      on the Save button it should submit the new record and add it to the table and then redirect to the display vehicle page showing all the records 
      in the table.  
Extra Credit
    [x] IF you additionally deploy this web app to Heroku or AWS you can receive 5 points on the final exam!
Turning In
    - Once completed, zip up the entire directory MINUS the node_modules folder  and then just ONE team member will upload it to Learning Suite. Make 
      sure you include the names of the students that worked on it. If you deploy, make sure you also tell us the URL.
    - The base score will be 85% with the remaining 15% for readability, appropriate commenting, creativity and professionalism.
    - Make this look great – both in the code as well as the user interface!

 
