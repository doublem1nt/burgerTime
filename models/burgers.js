// ORM input to perform methods
const orm = require("../config/orm.js");

// Burger object definition to set up methods for ..
// "all" :: Display All Database Burger Objects
// "create" :: Creating a new object to insert into Database
// "update" :: Allow to change state of current Burger Objects from devoured, false to true.
// "delete" :: Allow for removal of un-Devoured Burgers to be eliminated without being eaten
let burger = {
  all: function(cb) {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, (res) => {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
