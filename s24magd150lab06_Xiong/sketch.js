function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  ControllerFrame();
  UpDown(); 
  TwoButtons();
  RotatingButton();
}

//  Function for D Pad Controller 
function UpDown(){
  
  rectMode(CENTER); 
  
  noStroke();
  rect(100, height/2, 30, 100);
  rect(100, height/2, 100, 30);
  

}

//  Function for Two Buttons 
function TwoButtons() { 

push(); 
  
translate(250, height/2); 
  ellipse(0, 0, 50, 50); 
  translate( 85, 0);
 ellipse(0, 0, 50, 50);
  
  pop();
  
}
//function for Controller Frame 
  function ControllerFrame() { 
  
    push(); 
    translate(width/2, height/2);
   scale(2);
    fill( 100); 
    rect(0, 0, width/2, 100);
     pop(); 
  }

//function for Start Button 
  function RotatingButton(){ 
  push();
  translate(290, 280);
  rotate(PI/2); 
  ellipse( 0, 0, 30, 100);
pop();
}