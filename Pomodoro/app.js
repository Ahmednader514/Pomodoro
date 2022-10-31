// Tabs

let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".timer > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {

  ele.addEventListener("click", function (e) {

    tabsArray.forEach((ele) => {

      ele.classList.remove("active");

    });

    e.currentTarget.classList.add("active");

    divsArray.forEach((div) => {

      div.style.display = "none";

    });

    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";

  });

});

// Timer

var secondes = 60;
var minutes = 24;
var minutes2 = 4;
var minutes3 = 29;
var studieText = document.querySelector(".one .time");
var shortBreakText = document.querySelector(".two .time");
var longBreakText = document.querySelector(".three .time");
var sound = new Audio("sound.mp3");

function countdown() {

    var myInterval = setInterval(function() {

        secondes--;

        if(secondes === 0) {
            minutes--;
            secondes = 59;
        }

        if(minutes === 0) {
            
            sound.play();

            secondes = 0;
        }

        studieText.innerHTML = minutes + ":" + secondes;

    }, 1000);

    function stop() {

        clearInterval(myInterval);
        sound.pause();

    }

    document.querySelector(".one .stop").addEventListener("click", stop);

    function reset() {

        clearInterval(myInterval)

        minutes = 25;
        secondes = 60;
        secondesDisplay = "00";

        studieText.innerHTML = minutes + ":" + secondesDisplay;
        sound.pause();
    
    }

    document.querySelector(".one .reset").addEventListener("click", reset);

}

function countdown2() {

  var myInterval2 = setInterval(function() {

      secondes--;

      if(secondes === 0) {
          minutes2--;
          secondes = 59;
      }

      if(minutes2 === 0) {
          
          sound.play();

          secondes = 0;
      }

      shortBreakText.innerHTML = minutes2 + ":" + secondes;

  }, 1000);

  function stop2() {

      clearInterval(myInterval2);
      sound.pause();

  }

  document.querySelector(".two .stop").addEventListener("click", stop2);

  function reset2() {

      clearInterval(myInterval2)

      minutes2 = 5;
      secondes = 60;
      secondesDisplay = "00";

      shortBreakText.innerHTML = minutes2 + ":" + secondesDisplay;
      sound.pause();
  
  }

  document.querySelector(".two .reset").addEventListener("click", reset2);

}

function countdown3() {

  var myInterval3 = setInterval(function() {

      secondes--;

      if(secondes === 0) {
          minutes3--;
          secondes = 59;
      }

      if(minutes3 === 0) {
          
          sound.play();

          secondes = 0;
      }

      longBreakText.innerHTML = minutes3 + ":" + secondes;

  }, 1000);

  function stop3() {

      clearInterval(myInterval3);
      sound.pause();

  }

  document.querySelector(".three .stop").addEventListener("click", stop3);

  function reset3() {

      clearInterval(myInterval3)

      minutes3 = 30;
      secondes = 60;
      secondesDisplay = "00";

      longBreakText.innerHTML = minutes3 + ":" + secondesDisplay;
      sound.pause();
  
  }

  document.querySelector(".three .reset").addEventListener("click", reset3);

}