
//function for feed button and progress bar
function update(param) {
  // console.log('feed')
  if (param == "feed"){
    let element = document.getElementById("feedbar"); 
    console.log('feed')  
    element.style.width = -1 + "%" ;
  }
    // let width = 1;
    // let identity = setInterval(scene(element), 10);
    // function scene(param) {
    //   console.log(param)
    //   if (width >= 100) {
    //     clearInterval(identity);
    //   } else {
    //     width++; 
      
    //     param.style.width = width + '%';
    //     param.innerHTML = width * 1
    //   }
    // }
    // scene(element)
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
// main bar controlling feed, play, light

function bar() {
  let element = document.getElementById('feedbar'); 
  let element2 = document.getElementById('playbar');
  let element3 = document.getElementById('sleepinessbar');  

  let width = 1;
  let identity = setInterval(scene, 500);
  function scene() {
    if (width >= 10) {
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

function update(param) {
  // console.log('feed')
  if (param == "feed"){
    let elementNumber = document.getElementById("feedbar").innerHTML; 
    let element = document.getElementById("feedbar"); 
    console.log('feed')  
    console.log(elementNumber)
    element.innerHTML -= 1
    element.style.width = element.innerHTML + "%";
 
  } else if (param == "play"){
    let elementNumber = document.getElementById("playbar").innerHTML; 
    let element = document.getElementById("playbar"); 
    console.log('feed')  
    console.log(elementNumber)
    element.innerHTML -= 1
    element.style.width = element.innerHTML + "%";
  } else if (param == "light"){
    let elementNumber = document.getElementById("sleepinessbar").innerHTML; 
    let element = document.getElementById("sleepinessbar"); 
    console.log('feed')  
    console.log(elementNumber)
    element.innerHTML -= 1
    element.style.width = element.innerHTML + "%";
  }
   
}
    
  