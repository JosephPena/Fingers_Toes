$(document).ready(function(){
var origVal = 0

$(".submitBTN").on("click", function(){
  origVal = parseInt($(".userInput").val());
  counterFunc();
});



//Restart --> restart the counter
//Glitch: Pressing Restart continues the counter from the orig val
$(".restartBTN").on("click", function(){
  // console.log(counter + " the restart button BEFORE");
  // counter = -1;
  // console.log(counter + " the restart button AFTER");
});



//Reset --> reset counter & clear inputs
$(".resetBTN").on("click", function(){
  origVal = 0;
  $("#userForm")[0].reset();
});




//Counter Function.  Handles 2 operations   :counting up   :looks to match user value;
var counterFunc = function() {

var counter = 0;

var intervalFunc = setInterval(function () {
    if(counter >= origVal){
      clearInterval(intervalFunc);
      return;

    }else if(counter < origVal){
      counter++
    }
  }, 1000);
}
















});