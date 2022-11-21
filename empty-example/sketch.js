//declaring and initializing my custom variable(s)
var diam1 = 0;
var r = 0;
var g = 255;
var b = 255;

function setup() {
  // put setup code here
  createCanvas(600,600);
  frameRate(10);
}

function draw() {
  // put drawing code here
  background("#003366");
  fill("#add8e6");//light blue
  stroke("#ffff00"); //yellow
  strokeWeight(5);
  //ellipse to follow mouse position (system variables)
  ellipse(mouseX,mouseY,20,20);//xpos, ypos, diam, diam
  //rgb value with the last one being transparency 
  fill(255,0,0,200);
  //ellipse with growing diameter (custom variable)
  ellipse(200,200,diam1,diam1);
  rectMode(CENTER); // to set the x and y pos to the center of the shape (vs top left)
  rect(100,100,20,20);
  triangle(200,250,300,400,100,300);
  stroke("#ff0000");
  line(50,100,20,20);
  point(450,450);
  textSize(100);
  textFont('Georgia');
  textStyle(ITALIC);
  strokeWeight(5);
  //ellipse whose position is randomized
  /*fill("#00ff00")
  ellipse(random(width),random(height),20,20);*/
  fill(r,g,b);
  text ("hello",10,585);
  r=random(0,255);
  g=random(0,255);
  b=random(0,255);
  //show a variable's value in the console for troubleshooting 
  console.log("red value "+ r + "blue value " + b);
}

function mousePressed(){
  //diam1 = diam1+5;
  if (diam1 >= 50){
    diam1=0;
  }else{
    diam1 = diam1+5;
  }
}
