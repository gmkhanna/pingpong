


var oneToNum = function(integer) {
  if ((integer % 3 === 0) && (integer % 5 === 0)) {
  return "ping-pong";
  } else if (integer % 5 === 0) {
  return "pong";
  } else if (integer % 3 === 0) {
  return "ping";
  } else {
    return integer;
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
