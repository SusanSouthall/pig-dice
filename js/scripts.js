// NOTE: Begin Business Logic
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

NewPlayer.prototype.turnTotal = function(total) {
  return this.score + total;
}

// NOTE: Begins User Interface Logic.
$(document).ready(function() {
// NOTE: Player info form

  $("#player-info").submit(function(event) {
    event.preventDefault();
    var inputName1 = $("input#name1").val();
    var inputName2 = $("input#name2").val();

    var player1 = new NewPlayer(inputName1);
    var player2 = new NewPlayer(inputName2);

    $("#player-info").hide();
  });

  $("form#player1").submit(function(event) {
    event.preventDefault();

    var result = roll();
    var currentTotal = 0;

    if(result === 1){
      $("#roll").html('<span class="lose">' + result + '</span>');
      $("#total").html('You Lose!');
      currentRoll.rolls = [];
    } else {
      $("#roll").text(result);
      currentRoll.rolls.push(result);
      currentTotal = total(currentRoll.rolls);
      $("#total").text(currentTotal);
    }

    if(currentTotal >= 100) {
      alert("WIN");
      currentRoll.rolls = [];
      $("#total").text("0");
      // show stats, clear arrays, play again button
    }
    player1.turnTotal(currentTotal);
    console.log(player1.score);
    $("#hold").click(function(){
      player1.turnTotal(currentTotal);
      console.log(player1.score);
      $("#roll").text("");
      $("#total").text("");
      currentRoll.rolls = [];

    });

  });

});
