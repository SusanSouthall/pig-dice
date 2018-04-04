function roll() {
  var randomNumber = (Math.floor(Math.random()*6)+1);
  return randomNumber;
}

var currentRoll = {
  rolls: []
};

function total(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function clear() {
  rolls = currentRoll.rolls = [];
  return rolls;
}

// NOTE: Begins User Interface Logic.

$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var result = roll();

    if(result === 1){
      $("#roll").html('<span class="lose">' + result + '</span>');
    } else {
        $("#roll").text(result);
    }

    currentRoll.rolls.push(result);

    var currentTotal = total(currentRoll.rolls);
    $("#total").text(currentTotal);

    $("#hold").click(function(){
      $("#roll").text("");
      $("#total").text("");
      currentRoll.rolls = [];

    });

  });

});
