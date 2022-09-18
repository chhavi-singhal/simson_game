//step 2
var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
//step 6
var started=false;
var level=0;
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level"+level);
    nextSequence();
    started=true;
  }
});

//step 4
$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

//step 8
function checkAnswer(currentlevel){
  if(gamePattern[currentlevel]===userClickedPattern[currentlevel]){
    console.log("success");
    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  } else{
    console.log("wrong");
    //step 10
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

//step2
function nextSequence(){
  //step 7
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level "+level);
  //step2
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //step 3
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

//step 5
function playSound(name){
  var audio= new Audio("sounds/"+name+".mp3");
  audio.play();
}

//step 6
function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");

  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);

}
//step 10
function startOver(){
   gamePattern=[]  ;
   started=false;
   level=0;
}
