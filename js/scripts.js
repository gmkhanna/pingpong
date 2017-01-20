$(document).ready(function() {
  $("#pingForm").submit(function(event) {
  event.preventDefault();

  var integer = pareseInt($("input#number").val());

  });
});




// run for loop = = possibly a .map()

// Think of going from number to integer 1; (var integer 1++ || 1--)

// simplest may be counting up to integer - or from integer down to 1

// You will be using "%"  i.e. 3 % === 0 && 5 % === 0; //
