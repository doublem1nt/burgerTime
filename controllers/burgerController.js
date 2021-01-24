// sets up express 
const express = require("express");
const router = express.Router();

// Import the model (burger.js) for method functionality
const burger = require("../models/burgers.js");

// Router "get" defintion
// Displays all current information from Database
router.get("/", function(req, res) {
  burger.all((data) => {
    const listDisplay = {
      burgers: data
    };
    console.log(listDisplay);
    res.render("index", listDisplay);
  });
});

// Router "POST" defintion
// Adds all user inputted elements to create a new Burger object for database
router.post("/api/burgers", function(req, res) {
  burger.create(
    ["burger_name"],[req.body.burger_name], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// Router "put" definition
// Changes a Burger Object's devoured condition from false to true
router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Router "Delete" Defintion
// Removes a Burger Object from the database
router.delete("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.delete(condition, (result) => {
    if (result.affectedRows == 0) {
      // Validates if delete has been performed.
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
