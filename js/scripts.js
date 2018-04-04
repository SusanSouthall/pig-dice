function NewPlayer(name) {
  this.name = name;
  this.score = 0;
}









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

  $("form.player-info").submit(function(event) {
    event.preventDefault();
    
    $("form.player-info").hide();
  });

  $("form#player1").submit(function(event) {
    event.preventDefault();

    var result = roll();

    if(result === 1){
      $("#roll").html('<span class="lose">' + result + '</span>');
      $("#total").html('You Lose!');
      currentRoll.rolls = [];
    } else {
      $("#roll").text(result);
      currentRoll.rolls.push(result);
      var currentTotal = total(currentRoll.rolls);
      $("#total").text(currentTotal);
    }

    if(currentTotal >= 100) {
      alert("WIN");
      currentRoll.rolls = [];
      $("#total").text("0");
      // show stats, clear arrays, play again button
    }



    $("#hold").click(function(){
      $("#roll").text("");
      $("#total").text("");
      currentRoll.rolls = [];

    });

  });

});
