// global constants
//how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


//Global Variables
var clueHoldTime = 900; 
// var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var guessCounter = 0;

var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function randomizePattern() {
  for(let i=0;i<8;i++) {
    pattern.push(getRandomInt(4));
  }
  console.log(pattern);
}


function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  randomizePattern();
  clueHoldTime = 900;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  //stop game
  gamePlaying = false;
  pattern = [];
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// Sound Synthesis Functions
const freqMap = {
  1: 195.6,
  2: 261.6,
  3: 300,
  4: 330
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime = clueHoldTime - 90;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(btn === pattern[guessCounter]) {
    // if guess correct
    console.log('guess was correct');
    if(guessCounter === progress) {
      console.log('turn is over');
      if(progress === pattern.length - 1) {
        console.log('last turn, so player won game');
        winGame();
      } else {
        console.log('not last turn so move to next clue sequence');
        progress++;
        playClueSequence();
      }
    } else {
      console.log('turn not over so increase guessCounter');
      guessCounter++;
    }
  } else {
    console.log('incorrect guess');
    loseGame();
  }
  //if turn over
  //if last turn
  
  
  // add game logic here
}
