$(document).ready(function() {
  $("#list").submit(function(event) {
    var blanks = ["vegetable", "protein", "beverage", "fruit", "snack", "misc"];

    var food = [];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      food.push(userInput);
      $("#list").hide();
    });

    food.sort();
    food.toUpperCase();

    food.forEach(function(sort){
    $("#show").append("<li>" + sort + "</li>");
  });

    // blanks.forEach(function(blank) {
    //   var userInput = $("input#" + blank).val();
    //   $("#show").append("<li>" + userInput + "</li>");
    // });





    event.preventDefault();
  });
});
