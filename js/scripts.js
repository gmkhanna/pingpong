

var oneToNum = function(integer) {
  return true;
};


// for (var i = 0; i <= integer; i = i++) {
//   console.log("i is", i);
// }




$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
    event.preventDefault();
    var integer = parseInt($("input#number").val());
    var result = oneToNum(integer);
    $("#result").append(result);

  });
});


// run for loop = = possibly a .map()

// Think of going from number to integer 1; (var integer 1++ || 1--)

// simplest may be counting up to integer - or from integer down to 1

// You will be using "%"  i.e. 3 % === 0 && 5 % === 0; //
