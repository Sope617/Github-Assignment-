 var clove=[]; 

function setup() {
  createCanvas(400, 400);

 for (let i = 0; i < 10; i++) {
    clove.push(new Clover(i*50, 100));
  }
}

function draw() {
  background(32, 69, 189);
    
  
  
  for (let i = 0; i < clove.length; i++) {
    clove[i].create();
  }
}



//Form of Clover 
class Clover { 
  
   constructor(x,y) {
    
    var CloverX, CloverY, g; 
    this.g=color (60, 232, 106); 
     this.cloverX = x; 
    this.cloverY = y; 
    
  }


 create() {
   
   fill(this.g); 
   noStroke();
    //top part of clover
    ellipse(this.cloverX-5,this.cloverY-25,30,30);
    //2nd leaf
    ellipse(this.cloverX-15, this.cloverY, 30,30);
    //3rd leaf
    ellipse(this.cloverX+6, this.cloverY,30,30);
    //base
    rect(this.cloverX-12, this.cloverY,10, 50); 
   
 
   
 }

}

