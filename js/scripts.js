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




// NOTE: Begins User Interface Logic.

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var result = roll();

    $("#roll").text(result);
    //
    currentRoll.rolls.push(result);
    // console.log(currentRoll);
    //
    $("#hold").click(function(){
      var currentTotal = total(currentRoll.rolls);
      $("#total").text(currentTotal);
    });
    //


  });
});
