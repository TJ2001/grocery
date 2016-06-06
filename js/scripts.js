$(document).ready(function() {
  $("#list").submit(function(event) {
    var blanks = ["vegetable", "protein", "beverage", "fruit", "snack", "misc"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("#show").append("<li>" + userInput + "</li>");
    });



    event.preventDefault();
  });
});
