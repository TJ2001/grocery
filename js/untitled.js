// multiply numbers by 2

var numbers = [1,2,3,4,5];

// var doubledNumbers = [];
// numbers.forEach(function(number) {
//   doubledNumbers.push(number * 2);
// });

var doubledNumbers = number.map(function(number){
  return number * 2;
});


// uppercase all words

var abc = ["cars", "bars", "stores"]

var upper = abc.map(function(abc){
  return abc.toUpperCase();
})
