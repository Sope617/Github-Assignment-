var Y;
var X= 45.5 
var w = 30
var h= 30

 

function setup() {
  createCanvas(400, 400);
   Y= 50
}

function draw() {
  background(220);
  
   
  fill(107, 134, 219);
  ellipse(X, Y, 40, 40);
 X++;
  d=(dist(X, Y, width/4, height/4))
 
  
  fill(113, 10, 240);
  ellipse(300, 150, w/2, h/2);
 let x = constrain(mouseX, 150, 150);
  
  
  fill(100,100,200);
   ellipse(mouseX, mouseY, 40,40); 
   print(mouseX) ; 
  print(mouseY);
  
  let m = max(50, 50);
min(50, 50);
  fill(107, 134, 219);
  ellipse(X-1, Y*5, w, h);
  
min(50, 50);  
  
}