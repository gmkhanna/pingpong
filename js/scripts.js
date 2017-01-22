
var integer = 0;
function integerArray() {
  var arrayWindow = [];
  for (var i = 1; i <= integer; i++) {
    arrayWindow.push(i);
  }
  return arrayWindow;
}

function integerDiv(originalNum) {
  if ((originalNum % 3 === 0) && (originalNum % 5 === 0)) {
    return "Ping-Pong";
  } else if (originalNum % 5 === 0) {
    return "Pong";
  } else if (originalNum % 3 === 0) {
    return "Ping";
  } else if ((originalNum < 0) || (originalNum > 5001)) {
    return "Come on now... Don't you think I gave you a good range to play with?";
  }
  else {
    return originalNum
  }
}

function pinging() {
  var pingingArray = integerArray();
  for (var i = 0; i <= integer - 1; i++) {
    pingingArray[i] = integerDiv(pingingArray[i]);
  }
  return pingingArray;
}


$(document).ready(function() {
  $("form#pingForm").submit(function(event) {
    event.preventDefault();
    integer = parseInt($("input#number").val());
    $("#result").text(pinging());
    // var input = $("input#number").val();
  });
});

// run for loop = = possibly a .map()

// Think of going from number to integer 1; (var integer 1++ || 1--)

// simplest may be counting up to integer - or from integer down to 1

// You will be using "%"  i.e. 3 % === 0 && 5 % === 0; //
