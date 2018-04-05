// NOTE: Begin Business Logic
var currentRoll = {
  rolls: []
};

var random = roll();

var currentTotal = 0;

function NewPlayer(name) {
  this.name = name;
  this.score = 0;
}

function roll() {
  var randomNumber = (Math.floor(Math.random()*6)+1);
  return randomNumber;
}

function total(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

NewPlayer.prototype.turnTotal = function(total) {
  return this.score += total;
}

// NOTE: Begins User Interface Logic.
$(document).ready(function() {
// NOTE: Player info form

  $("#player-info").submit(function(event) {
    event.preventDefault();
    var inputName1 = $("input#name1").val();
    var inputName2 = $("input#name2").val();

    player1 = new NewPlayer(inputName1);
    player2 = new NewPlayer(inputName2);

    $("#player-info").hide();
  });

  $("form#player1-board").submit(function(event) {
    event.preventDefault();
    random = roll();

    if(random === 1){
      $("#roll").html('<span class="lose">' + random + '</span>');
      $("#total").html('You Lose!');
      currentRoll.rolls = [];
    } else {
      $("#roll").text(random);
      currentRoll.rolls.push(random);
    }

    currentTotal = total(currentRoll.rolls);
    $("#total").text(currentTotal);

    if(currentTotal >= 100) {
      alert("WIN");
      currentRoll.rolls = [];
      $("#total").text("0");
    }
    });

  $("#hold").click(function(){
      player1.turnTotal(currentTotal);
      console.log(player1.score);
      $("#roll").text("");
      $("#total").text("");
      currentRoll.rolls = [];
  });

});
