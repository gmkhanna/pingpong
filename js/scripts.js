

integer = 0;


function convertList() {
  var integerArray = []

for (var i = 1; i <= integer; i++) {
  integerArray.push(i);
}

console.log(integerArray);
}

// for (var i = 0; i <= 5001; i++) {
//   integerList.push(i);
// }
// console.log(integerList[i]);

// var integerDiv = function(integerDiv) {
//   if ((integerDiv % 3 === 0) && (integerDiv % 5 === 0)) {
//   return "ping-pong";
// } else if (integerDiv % 5 === 0) {
//   return "pong";
// } else if (integerDiv % 3 === 0) {
//   return "ping";
// } else if ((integerDiv < 0) || (integerDiv > 5001)) {
//     return "Come on now... Don't you think I gave you a good range to play with?";
//   } else {
//     return integerDiv
//   }
// };

$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
    event.preventDefault();
    var integer = parseInt($("input#number").val());
    // var result = integerDiv(integer);

    var result = integerArray(integer);
    $("#result").text(result);

  });
});


// run for loop = = possibly a .map()

// Think of going from number to integer 1; (var integer 1++ || 1--)

// simplest may be counting up to integer - or from integer down to 1

// You will be using "%"  i.e. 3 % === 0 && 5 % === 0; //

// function factor(n) {
//   factor = 0
//
//   for (i = 1; i <= n; i++) {
//     n = n + i;
//   }
//   return factor;
// }
