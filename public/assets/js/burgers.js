// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(()=> {
  $(".change-devouredState").on("click", function(event) {
    var id = $(this).data("id");

    var newDevouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(()=> {
        console.log("Selected Burger has been eaten? " + newDevouredState.devoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(()=> {
        console.log("created new burger, called" + newBurger.burger_name);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", (event) => {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(() => {
        console.log("Sent burger back to the kitchen: ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
