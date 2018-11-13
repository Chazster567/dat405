function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(1900,1080);
  frameRate(100);
  noStroke();
}

//Rendering function
function draw(){
var m = map(mouseX, 0, width, 0, 255);
var n = map(mouseY, 0, height, 0, 255);
var l = map(mouseX, 0, width, 255, 0);
var i = map(mouseY, 0, height, 255, 0);
fill(m,n,l);
rect(0, 0, width/2, height/2);
fill(n,l,i);
rect(0, height/2, width/2, height/2);
fill(l,i,m);
rect(width/2, 0, width/2, height/2);
fill(i,m,n);
rect(width/2, height/2, width/2, height/2);
}
