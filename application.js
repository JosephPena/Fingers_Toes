$(document).ready(function(){
var userVal = 0;
var counter = 0;
var counterInterval;

//Submit --> Gets user value | Resets SetTimeout Interval & Invoke CounterFunc
$(".submitBTN").on("click", function(){
  userVal = parseInt($(".userInput").val());
  clearInterval(counterInterval);
  counterFunc(userVal);
});

//Restart --> Restart Counter, CounterBox & Invoke CounterFunc
$(".restartBTN").on("click", function(){
  counter = 0;
  document.getElementById("counterBox").innerHTML = counter;
  counterFunc(userVal);
});

//Reset --> Reset Back To Original
$(".resetBTN").on("click", function(){
  $("#userForm")[0].reset();
  userVal = 0;
  counter = 0;
  document.getElementById("counterBox").innerHTML = counter;
});

//Counter Function --> Takes user val as param.  Increments a counter and looks for cases where divisible by 3, 5, and both values
function counterFunc(userNum) {
  counterInterval = setInterval(function () {
    if(counter < userNum){
    counter++
    document.getElementById("counterBox").innerHTML = counter;

      if (counter%3 === 0 && counter%5 === 0){
        $(".fingers, .toes").addClass("highlight").delay(1000).queue(function(next){
          $(this).removeClass("highlight");
          next();
        });

      }else if(counter%3 === 0){
        $(".fingers").addClass("highlight").delay(1000).queue(function(next){
          $(this).removeClass("highlight");
          next();
        });

      }else if(counter%5 === 0){
        $(".toes").addClass("highlight").delay(1000).queue(function(next){
          $(this).removeClass("highlight");
          next();
        });
      };
    }

    if(counter === userNum){
      if (counter%3 === 0 && counter%5 === 0){
        $(".fingers, .toes").addClass("highlight").delay(1000).queue(function(next){
          $(this).removeClass("highlight");
          next();
        });

      }else if(counter%3 === 0){
        $(".fingers").addClass("highlight").delay(1000).queue(function(next){
          $(this).removeClass("highlight");
          next();
        });

      }else if(counter%5 === 0){
        $(".toes").addClass("highlight").delay(1000).queue(function(next){
          $(this).removeClass("highlight");
          next();
        });
      };
      clearInterval(counterInterval);
    }
  }, 1000);
}
});