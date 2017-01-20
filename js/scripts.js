$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
  event.preventDefault();
  var number = parseInt($("input#number").val());
  var result = oneToNum(number);
  $("#result").append(result);

  });
});

function oneToNum(number) {
  return number;
};


// run for loop = = possibly a .map()

// Think of going from number to integer 1; (var integer 1++ || 1--)

// simplest may be counting up to integer - or from integer down to 1

// You will be using "%"  i.e. 3 % === 0 && 5 % === 0; //
