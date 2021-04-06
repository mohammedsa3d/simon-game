

var buttonsColor = ["red", "blue", "green","yellow"];
var gamePattern =[];
var userchosinbtn = [];
var started = false;
var level = 0
$(document).keypress(function(){
    if(!started){
     $("h1").text("Level"+level);
     nextStep();
     started = true;
    }    
 })
//on click ineraction
$(".btn").click(function(){
var userChosin = $(this).attr("id");
userchosinbtn.push(userChosin);
playSound(userChosin);
setTimeout(animatepressed(userChosin),100);
checkAnswer(userchosinbtn.length - 1);

});
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userchosinbtn[currentLevel])
    {
    console.log("sucssec");
    if(gamePattern.length === userchosinbtn.length){
        setTimeout(() => {
            nextStep();
        }, 1000);
    }
    }else
    {
        console.log("wrong");
        playSound("wrong");
       
           $("body").addClass("game-over");
     setTimeout(() => {
        $("body").removeClass("game-over");
     }, 200);

     $("h1").text("press any key to restart");

     
         restart();
     

    }
    }
function nextStep(){
    userchosinbtn = [];
    level++;
    $("h1").text("level"+level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosinColor = buttonsColor[randomNumber];
    gamePattern.push(randomChosinColor);
    $("#"+randomChosinColor).fadeIn(200).fadeOut(100).fadeIn(100);
   playSound(randomChosinColor);
    
}


//play sounds of boxes
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
//flashing boxes
 function animatepressed(ele){
    $("#" + ele).addClass("pressed");
setTimeout(function(){
    $("#" + ele).removeClass("pressed");
},100);
 }

function restart(){
    level = 0;
 started = false;
     gamePattern = [];
}