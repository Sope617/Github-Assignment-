let playing = false;
let fingers;
let button;
let mySound; 
let Glass; 

function preload() { 
  //Glass Breaking SOund 
  soundFormats('mp3');
   mySound = loadSound('glass-breaking-93803.mp3');
}

function setup() {
  createCanvas(500,500);
  //.Sound 
  mySound.setVolume(2);
    mySound.play();
  mySound.pan(1.0);
  print(mySound.duration());
 //Video 
  Glass = createVideo(['AdobeStock_306708313_Video_HD_Preview.mov']);
  //Button to press to play video 
  button = createButton('play');
  button.mousePressed(toggleVid);   
}

function toggleVid() {
  if (playing) {
    Glass.pause();
    button.html('play');
  } else {
    Glass.loop();
    button.html('pause');
  }
  playing = !playing;
  print(playing);
}

function draw() {
image(Glass, 10, 10); 
  filter(GRAY);
  
 //Video loop 
  function mousePressed() {
  Glass.loop(); }
}