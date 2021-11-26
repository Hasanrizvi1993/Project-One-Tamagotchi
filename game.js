let hungerDiv = document.getElementById("hunger");
let sleepinessDiv = document.getElementById("sleepiness");
let boredomDiv = document.getElementById("boredom");

// function statusBar(){
//   let timer = 1;
  
//   let inverval = setInterval(alert, 1000)
//   function progressBarIncrease(){
//     hungerDiv.style.width = 
//   }
//   clearInterval(inverval)

  
// }
// let identity = setTimeout(statusBar(), 10);
//   if (timer >= 100){
//     clearInterval(identity);
//   }

//function for feed button and progress bar
function update(param) {
  // console.log('feed')
  if (param == "feed"){
    let element = document.getElementById("hunger"); 
    console.log('feed')  
    return element;
  }
    let width = 1;
    let identity = setInterval(scene(element), 10);
    function scene(param) {
      console.log(param)
      if (width >= 100) {
        clearInterval(identity);
      } else {
        width++; 
      
        param.style.width = width + '%';
        param.innerHTML = width * 1
      }
    }
    // scene(element)
}

  //function for light button and progress bar
  function updateLight() {
    let element = document.getElementById("sleepiness");   
    let width = 1;
    let identity = setInterval(scene, 100);
    function scene() {
      if (width >= 10) {
        clearInterval(identity);
      } else {
        width++; 
        element.style.width = width + '%';
        element.innerHTML = width * 1
      }
    }
  }


  //function for play button and progress bar

  function updatePlay() {
    let element = document.getElementById("boredom");   
    let width = 1;
    let identity = setInterval(scene, 100);
    function scene() {
      if (width >= 10) {
        clearInterval(identity);
      } else {
        width++; 
        element.style.width = width + '%';
        element.innerHTML = width * 1
      }
    }
  }

  // function for the game completion timer 
  //deathbar
  function timeLeft(){
    let timeLeft = document.getElementById("timeLeft");
    let timer = document.getElementById("timer");
    let startTimer = setInterval(barCount,200)
    function barCount (){
        if (timeLeft.clientWidth < timer.clientWidth){
          timeLeft.style.width = timeLeft.clientWidth + 1 + "px";
        }
        else {
          timeLeft.style.width = timer.clientWidth + "px";
          clearInterval(startTimer);
        }
    }
  }
  timeLeft();
  
  //age
  //add a function for age bar from 1 - 100
      function ageProgress() {
        let element = document.getElementById("ageProgress");   
        let width = 1;
        let identity = setInterval(scene, 500);
        function scene() {
          if (width >= 100) {
            clearInterval(identity);
          } else {
            width++; 
            element.style.width = width + '%';
            element.innerHTML = width * 1
          }
        }
      }
      ageProgress();

      function bar() {
        let element = document.getElementById('feedbar'); 
        let element2 = document.getElementById('playbar');
        let element3 = document.getElementById('sleepinessbar');  
  
        let width = 1;
        let identity = setInterval(scene, 500);
        function scene() {
          if (width >= 100) {
            clearInterval(identity);
          } else {
            width++; 
            element.style.width = width + '%';
            element.innerHTML = width * 1
            element2.style.width = width + '%';
            element2.innerHTML = width * 1
            element3.style.width = width + '%';
            element3.innerHTML = width * 1
          }
        }
      }
      bar();
    
  