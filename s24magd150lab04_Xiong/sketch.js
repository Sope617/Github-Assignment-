
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 204, 0);
 
  //Pepperoni 
 
   
  
if(mouseIsPressed) {
  fill(75, 80, 227); 
  }
  else { 
  fill(240, 19, 7); 
  }
  ellipse( mouseX, mouseY, 50, 50);
  
  if(keyIsPressed) {
    fill( 75, 80, 227); 
  }
  
  else{ 
fill( 230, 62, 227)
  }
  rect(50, 50, 50, 50 );
  
  for (let x = 0; x < width; x+=50 ) { 
  
   fill(240, 19, 7 ); 
    ellipse( x, 50, 50, 50);
  }

  if(mouseIsPressed) {
  fill(75, 80, 227); 
  }
  else { 
  fill(120, 45, 7); 
  }
  ellipse( 200, 200, 50, 50);
  

  
}