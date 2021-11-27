let playerName = "";

//These variables independently control the width of each bar
let feedWidth = 1
let playWidth = 1
let lightWidth = 1

//These variables grab the bar IDs for use throughout the app for rendering purposes
let element = document.getElementById('feedbar'); 
let element2 = document.getElementById('playbar');
let element3 = document.getElementById('sleepinessbar');  

//welcome modal input 
// document.getElementById("myButton").onclick = function(){
//   console.log('pressing')
//   let name = document.getElementById("myText").value
//   alert(name)
// }

function playerNameFunc(){
  playerName = document.getElementById("myText").value
  // alert(playerName)
  document.getElementById("nameOutput").innerHTML = ("Player Name: " + playerName)
  document.getElementById("myModal").style.display = "none"
  bar();
  timeLeft();
  ageProgress();
}


// main function controlling feed, play, light status bar 
function bar() {

  let identity = setInterval(scene, 800);

  function scene() {
    if (feedWidth >= 10 || playWidth >= 10 || lightWidth >= 10) {
      clearInterval(identity);
      alert("Your pet died :( ");
      // console.log("end game")
    } else {
      feedWidth++;
      playWidth++;
      lightWidth++ 
      element.style.width = feedWidth + '%';
      element.innerHTML = feedWidth * 1
      element2.style.width = playWidth + '%';
      element2.innerHTML = playWidth * 1
      element3.style.width = lightWidth + '%';
      element3.innerHTML = lightWidth * 1
    }
   
  }
}
// bar();

//main function for button usability, subtracts 2 from feed, play, light bars
function update(param) {

  if (param == "feed"){
    feedWidth -= 2
    element.style.width = element.innerHTML + "%";
  } else if (param == "play"){
    playWidth -= 2
    element.style.width = element.innerHTML + "%";
  } else if (param == "light"){
       lightWidth -= 2
    element.style.width = element.innerHTML + "%";
  }
   
}

// function for the game completion timer 
//deathbar
function timeLeft(){
  let timeLeft = document.getElementById("timeLeft");
  let timer = document.getElementById("timer");
  let startTimer = setInterval(barCount, 50)
  function barCount (){
      if (timeLeft.clientWidth < timer.clientWidth){
        timeLeft.style.width = timeLeft.clientWidth + 1 + "px";
      }
      else {
        timeLeft.style.width = timer.clientWidth + "px";
        clearInterval(startTimer);
        endGame();
      }
  }
}
// timeLeft();
  
//age
//add a function for age bar from 1 - 100
function ageProgress() {
  let element = document.getElementById("ageProgress");   
  let width = 1;
  let identity = setInterval(scene, 80);
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
      document.getElementById('youngDragon').style.display='none';
      document.getElementById('oldDragon').style.display='block';
    } else {
      width++; 
      element.style.width = width + '%';
      element.innerHTML = width * 1
      document.getElementById('youngDragon').style.display='block';
      document.getElementById('oldDragon').style.display='none';
    }
  }
}
// ageProgress();

function endGame(){
  alert("Congratulations!! You Won!!!")
}

//swapping images
