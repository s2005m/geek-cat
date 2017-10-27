function setup() {
  createCanvas(400,300);
}

function draw() {
 background(2,79,90);
 
 //head 
 fill("pink");
 rect(100,100,200,100);
 
 //eyes
 fill("green")
 rect(150,120,20,10);
 rect(230,120,20,10);
 
 // third eye
 fill("purple");
 ellipse(200,120,10,10);
 
 //mouth
 ///fill()
 line(170,150,230,150);
 
 // ears 
 fill("blue");
 triangle(150,100,170,100,160,80)
 triangle(230,100,250,100,240,80)
 

// toungue 
fill("red");
arc(200,150,20,30,0,PI,CHORD)
 
 
  
}