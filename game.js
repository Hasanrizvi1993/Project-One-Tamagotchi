let playerName = "";


//These variables independently control the width of each bar
let feedWidth = 0
let playWidth = 0
let lightWidth = 0
let ageWidth = 0
let timeLeftWidth = 0

//These variables grab the bar IDs for use throughout the app for rendering purposes
let element = document.getElementById('feedbar'); 
let element2 = document.getElementById('playbar');
let element3 = document.getElementById('sleepinessbar');  

//the control the timer bar and the time progess bar
let timeLeft = document.getElementById("timeLeft");
let timer = document.getElementById("timer");


// start game modal -- input to enter player name and pressing play to begin
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
// this control the bar going to
let identity;
  function bar() {

    identity = setInterval(scene, 800);

    function scene() {
      if (feedWidth >= 10 || playWidth >= 10 || lightWidth >= 10) {
        clearInterval(identity);
        clearInterval(id);
       
        lostOrWin('lost');
        
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
let id;
function timeLeftFunc() {
   id = setInterval(scene, 200);
  function scene() {
    if (timeLeftWidth >= 100) {
      clearInterval(id);
      clearInterval(identity);
      
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

// end game modal for both lose and win condition
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
// win or lose function inserting html into modal in each case (win or lose)
function lostOrWin(param){
  if(param === 'win'){
    document.getElementById('endGameModalLabel').innerHTML = "You Won!"
    endGameModal()
  } else if (param === 'lost'){
    document.getElementById('endGameModalLabel').innerHTML = "You lost!"
    endGameModal()
  }
}


//that's all folks


// One Triumph (I was able use modals and able to figure out how to change the physical
// apperance of the pet at age 100)

//One Thing that was difficult (Be specific! Was it the dom manipulation? css animations? )
// one thing that was difficult (how to clear both intervals when the game is won or lost) also 
//need to get better at CSS because I found it to be a bit more difficult

//If you could redo the project what would you do differently?
// if I could redo the project, I would use bootstrap and Jquery (just seems time saving IMO)

//What is one thing you will take with you to the next project?
// a better understanding of writing functions

//3. Share one code snippet you are proud of.
// function endGameModal(param){
//   document.getElementById('myEndModal').style.display = 'block';
//   document.getElementById('end-modal-content-id').style.display = 'block';
//   feedWidth = 0
//   playWidth = 0
//   lightWidth = 0
//   ageWidth = 0
//   timeLeftWidth = 0

//   if(param === 'quit'){
//     window.close();
//   } else if(param === 'replay'){
//     document.getElementById('myEndModal').style.display = 'none';
//     document.getElementById('end-modal-content-id').style.display = 'none';
//     console.log(param)

//     bar();
//     timeLeftFunc();
//     ageProgress();
   
//   }

// }