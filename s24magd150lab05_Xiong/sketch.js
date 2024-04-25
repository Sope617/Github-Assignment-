var label,d,c;
var circleToggle;
var circleX, circleY, theta; 
function setup() {
  createCanvas(400, 400);
  
  c=150;
  d=150;
  label = "ON";
  circleToggle=false;
  circleX = 250; 
  circleY = 200; 
  theta = 0; 
}

function draw() {
  background(220);
  
push();

  fill(c);
  ellipse(200, 290 , 100, 100); 
pop(); 
  if((dist(mouseX, mouseY, 200, 290))<50){
     c=250;
     } else{
       c=150;
     }
  
 textSize(20);
  textAlign(LEFT);
  text(label, 190, 300);
  
  if(circleToggle) 
    { 
      push();
      fill(94, 235, 192);
      ellipse(circleX, circleY, 80, 80 ); 
       pop();
    }
     circleX += 2* cos(theta); 
      circleY += 2* sin(theta); 
  theta+=0.2; 
 

   push();
 
    fill(d);
    rect(50,25,300,200);
    
  if(mouseX>50 && mouseX< 350 && mouseY>25 && mouseY<225){
     d=150;
     } else {
    d= 250;
  }
    
 pop();
   text("TV", 190, 150);
}

function mousePressed(){
  
   if(((dist(mouseX, mouseY, 200, 290))<50)) {
   circleToggle= !circleToggle;
   print(circleToggle);
   }
  
  }