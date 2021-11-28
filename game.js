let playerName = "";
let gameWon = false;
console.log(gameWon)

//These variables independently control the width of each bar
let feedWidth = 1
let playWidth = 1
let lightWidth = 1
let ageWidth = 1
let timeLeftWidth = 0

//These variables grab the bar IDs for use throughout the app for rendering purposes
let element = document.getElementById('feedbar'); 
let element2 = document.getElementById('playbar');
let element3 = document.getElementById('sleepinessbar');  

//the control the timer bar and the time progess bar
let timeLeft = document.getElementById("timeLeft");
let timer = document.getElementById("timer");

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
  timeLeftFunc();
  ageProgress();
}


// main function controlling feed, play, light status bar 
if(gameWon === false){

  function bar() {

    let identity = setInterval(scene, 800);

    function scene() {
      if (feedWidth >= 10 || playWidth >= 10 || lightWidth >= 10) {
        clearInterval(identity);
        // endGameModal();
        lostOrWin('lost');

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

// function timeLeftFunc(){
  
//   let startTimer = setInterval(barCount, 10)
//   function barCount (){
//       if (timeLeft.clientWidth < timer.clientWidth){
//         timeLeft.style.width = timeLeft.clientWidth + 1 + "px";
//       }
//       else {
//         timeLeft.style.width = timer.clientWidth + "px";
//         clearInterval(startTimer);
//         // endGameModal();
//         // return
//       }
//   }
// }
function timeLeftFunc() {
  let id = setInterval(scene, 60);
  function scene() {
    if (timeLeftWidth >= 100) {
      clearInterval(id);
      // endGameModal();
      gameWon = true;
      lostOrWin('win');
  }else {
    timeLeftWidth++; 
      timeLeft.style.width = timeLeftWidth + '%';
      timeLeft.innerHTML = timeLeftWidth * 1
   }
  }
}

  
//age
//add a function for age bar from 1 - 100
function ageProgress() {
  let element = document.getElementById("ageProgress");   
  
  let identity = setInterval(scene, 60);
  function scene() {
    if (ageWidth >= 100) {
      clearInterval(identity);
      document.getElementById('youngDragon').style.display='none';
      document.getElementById('oldDragon').style.display='block';
    } else {
      ageWidth++; 
      element.style.width = ageWidth + '%';
      element.innerHTML = ageWidth * 1
      document.getElementById('youngDragon').style.display='block';
      document.getElementById('oldDragon').style.display='none';
    }
  }
}
// ageProgress();

// function endGame(){
//   let endGamePrompt= prompt("You Won!!! would you like play again?", "yes/no")
//     if (endGamePrompt === "no"){
//       window.close()
//     } else{
//       console.log(endGamePrompt);
//       // playerName = "";
//       feedWidth = 1
//       playWidth = 1
//       lightWidth = 1
//       ageWidth = 1
//       bar();
//       timeLeftFunc();
//       ageProgress();
//       // break;
//     }
// }

function endGameModal(param){
  document.getElementById('myEndModal').style.display = 'block';
  document.getElementById('end-modal-content-id').style.display = 'block';
  feedWidth = 0
  playWidth = 0
  lightWidth = 0
  ageWidth = 0
  timeLeftWidth = 0

  if(param === 'quit'){
    window.close();
  } else if(param === 'replay'){
    document.getElementById('myEndModal').style.display = 'none';
    document.getElementById('end-modal-content-id').style.display = 'none';
    console.log(param)

    bar();
    timeLeftFunc();
    ageProgress();
   
  }

}
// endGameModal();

function lostOrWin(param){
  if(param === 'win'){
    document.getElementById('endGameModalLabel').innerHTML = "You Won!"
    endGameModal()
  } else{
    document.getElementById('endGameModalLabel').innerHTML = "You lost!"
    endGameModal()
  }
}


//swapping images
