let img; 
let img2;
var Tac1;
var SingleD;
var tagline; 
var movement;


function setup() {
  createCanvas(400, 400);
   //1st Image 
  img = loadImage('6d3b2a755d795bc107df081678b66cdb (1).jpg'); 
  //2nd Image 
  img2 = loadImage('DB_THE_MOVIE_NO._20 (1).jpg'); 
   Tac1 = loadFont("TacOne-Regular.ttf");
  SingleD = loadFont ("SingleDay-Regular.ttf"); 
  movement = width/2 
  tagline = "Releases January 16th, 2018"
}

function draw()  {
  background(220);
  //Tint 
  push();
 tint('green');
  image(img, 0, 120, 200, 200);
  pop();
 
  //Filter 
  push();
  img2.filter(THRESHOLD);
  image(img2, 200, 120, 200, 200);
  pop();
  
 //First Block of Text 
  push(); 
  textFont(Tac1);
  textSize(40);
  textAlign(CENTER); 
  text("DragonBall\nSuper:Broly", width/2, 60); 
  pop();
  //Second Block of Text 
  push(); 
  textFont(SingleD);
  textSize(20);
  textAlign(CENTER); 
  text(tagline, movement, 340); 
  pop(); 
  
  //Movement for Second Block of Text 
  movement++; 
  if (movement-0.5*textWidth(tagline) >width) 
   
  {
  movement=-0.5*textWidth(tagline);
  }
}