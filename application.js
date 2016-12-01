$(document).ready(function(){
var origVal = 0;

$(".submitBTN").on("click", function(){
  origVal = parseInt($(".userInput").val());
  counterFunc();
  console.log(origVal)
});



//Restart --> restart the counter



//Reset --> reset counter & clear input
$(".resetBTN").on("click", function(){
  document.getElementById("userForm").reset();
  origVal = 0;
  console.log(origVal);
});

//Counter Function.  Handles 2 operations   :counting up   :looks to match user value;
function counterFunc() {
  var counter = 0;
      console.log(counter + " this is the counterFunc activated!");
  setInterval(function () {
    if(counter === origVal){
      clearInterval(counter);
    }else{
      ++counter;
      console.log(counter + " this is the counter");
    }
  }, 1000);
}
















});