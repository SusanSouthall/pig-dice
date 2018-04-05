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

    $("#player1-board .board-title").text(player1.name);
    $("#player2-board .board-title").text(player2.name);

    $("#player1-board .current-score").text("Current Score: " + player1.score);
    $("#player2-board .current-score").text("Current Score: " + player2.score);
    $("#player-info").hide();
    $("#player1-board").fadeIn();
  });

// player1
  $("#player1-board form").submit(function(event) {
    event.preventDefault();
    random = roll();


    if(random === 1){
      $("#roll").html('<span class="lose">' + random + '</span>');
      $("#total").html('You Lose!');
      currentRoll.rolls = [];
      $("#player1-board").hide(1000);
      $("#player2-board").fadeIn();
      $("#roll").text("");
      $("#total").text("");
    } else {
      $("#roll").text(random);
      currentRoll.rolls.push(random);
    }

    currentTotal = total(currentRoll.rolls);
    $("#total").text(currentTotal);

    if(player1.score + currentTotal >= 100) {
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
      $("#player1-board").hide();
      $("#player2-board").fadeIn();
      $("#player1-board .current-score").text("Current Score: " + player1.score);
  });

// player2
$("#player2-board form").submit(function(event) {
  event.preventDefault();
  random = roll();

  if(random === 1){
    $("#roll2").html('<span class="lose">' + random + '</span>');
    $("#total2").html('You Lose!');
    currentRoll.rolls = [];
    $("#player2-board").hide(1000);
    $("#player1-board").fadeIn();
    $("#roll2").text("");
    $("#total2").text("");
  } else {
    $("#roll2").text(random);
    currentRoll.rolls.push(random);
  }

  currentTotal = total(currentRoll.rolls);
  $("#total2").text(currentTotal);

  if(player2.score + currentTotal >= 100) {
    alert("WIN");
    currentRoll.rolls = [];
    $("#total").text("0");
  }
  });

$("#hold2").click(function(){
    player2.turnTotal(currentTotal);
    console.log(player2.score);
    $("#roll2").text("");
    $("#total2").text("");
    currentRoll.rolls = [];
    $("#player2-board").hide();
    $("#player1-board").fadeIn();
    $("#player2-board .current-score").text("Current Score: " + player2.score);
});

});
