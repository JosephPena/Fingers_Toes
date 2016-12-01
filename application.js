$(document).ready(function(){
var userVal = 0;
var counter = 0;

$(".submitBTN").on("click", function(){
  userVal = parseInt($(".userInput").val());
  counterFunc(userVal);
});

//Restart --> restart the counter
$(".restartBTN").on("click", function(){
  counter = 0;
  document.getElementById("counterBox").innerHTML = 0;
  counterFunc(userVal);
});

//Reset --> reset counter & clear inputs
$(".resetBTN").on("click", function(){
  $("#userForm")[0].reset();
  userVal = 0;
  counter = 0;
  document.getElementById("counterBox").innerHTML = 0;
});

//Counter Function.  Handles 2 operations   :counting up   :looks to match user value;
var counterFunc = function(userNum) {

  var intervalFunc = setInterval(function () {
    if(counter === userNum){
      document.getElementById("counterBox").innerHTML = userNum;
      clearInterval(intervalFunc);                //required to stop the 1000 interval

    }else if(counter < userNum){
      counter++
      console.log(counter + " active counter")
    }
  }, 1000);
}

});