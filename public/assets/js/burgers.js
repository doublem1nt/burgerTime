// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(()=> {
  $(".change-devouredState").on("click", function(event) {
    // Data Element inside DEVOUR IT button captures Burger object's ID
    const id = $(this).data("id");

    const newDevouredState = {
      devoured: true
    };

    // AJAX PUT request script, utilized for DEVOUR IT functionality
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(()=> {
        // Reloads the page to show updated PUT request in full effect
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Set to preventDefault on a submit event.
    event.preventDefault();

    // Pulls from text area and applies it to new Burger Object, setting up "burger_name" property
    const newBurger = {
      burger_name: $("#burg").val().trim()
    };

    // AJAX POST request script, utilized for creating a new Burger Functionality
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(()=> {
      // Reloads the page to show updated POST request in full effect
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    
    // Data Element inside SEND IT BACK button captures Burger object's ID
    const id = $(this).data("id");

    // AJAX DELETE request script, utilized for SEND IT BACK functionality
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(() => {
        console.log("Sent burger back to the kitchen: ", id);
        // Reloads the page to show updated DELETE request in full effect
        location.reload();
      }
    );
  });
});
