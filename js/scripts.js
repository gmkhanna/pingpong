
var integer = 0;
function integerArray(start, end) {
  var arrayWindow = [];
  for (var i = 1; i <= integer; i++) {
    arrayWindow.push(i);
  }
  return arrayWindow;
}

integerArray.forEach(function() {
  function integerDiv(originalNum) {
    if ((originalNum % 3 === 0) && (originalNum % 5 === 0)) {
      return "ping-pong";
    } else if (originalNum % 5 === 0) {
      return "pong";
    } else if (originalNum % 3 === 0) {
      return "ping";
    } else if ((originalNum < 0) || (originalNum > 5001)) {
      return "Come on now... Don't you think I gave you a good range to play with?";
    }
    else {
      return originalNum
    }
  }
});
$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
    event.preventDefault();
    var integer = parseInt($("input#number").val());
    var input = $("input#number").val();
    $("integerArray").text("#result");
  });
});

// run for loop = = possibly a .map()

// Think of going from number to integer 1; (var integer 1++ || 1--)

// simplest may be counting up to integer - or from integer down to 1

// You will be using "%"  i.e. 3 % === 0 && 5 % === 0; //
