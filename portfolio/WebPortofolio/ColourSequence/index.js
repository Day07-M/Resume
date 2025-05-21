

var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];
level = 0;
gameStart = false;

$(document).keydown(function(){
   gameStart = true; 
   if (level === 0){     
     nextSequence();
    $
   }
})



$(".btn").click(function(){
     if (gameStart === true){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
        
    playSound(userChosenColour);
    animatePress(userChosenColour);
    // nextSequence();
    checkAnswer(userClickedPattern.length-1);
     }
});

function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").html("level "+ level);
}



function playSound(name){
    var audio = new Audio("/portfolio/WebPortofolio/ColourSequence/sounds/" + name +".mp3");
        audio.play();
    
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 150);
}

function checkAnswer(currentSequence){


   
    if (gamePattern[currentSequence] === userClickedPattern[currentSequence]) {

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
        $("body").addClass("game-over");
        setTimeout(function(){
             $("body").removeClass("game-over");
        }, 1000);
        $("h1").html("HAHA WRONG! GAME OVER FOR YOU BUD, Press any key if you're brave enough to do it again")
        var audio = new Audio("/portfolio/WebPortofolio/ColourSequence/sounds/wrong.mp3");
        audio.play();
        startOver();
    }

}

function startOver(){
    level = 0;
    gameStart = false;
    gamePattern = [];
}