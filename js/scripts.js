


var oneToNum = function(integer) {
  if ((integer % 3 === 0) || (integer % 5 === 0) || (integer % 15 === 0)) {
  return true;
  } else {
  return false;
  }
};






$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
    event.preventDefault();
    var integer = parseInt($("input#number").val());
    var result = oneToNum(integer);
    $("#result").text(result);

  });
});


// run for loop = = possibly a .map()

// Think of going from number to integer 1; (var integer 1++ || 1--)

// simplest may be counting up to integer - or from integer down to 1

// You will be using "%"  i.e. 3 % === 0 && 5 % === 0; //
