//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(500,500);
}

let size = 50;
//Rendering function
function draw() {
  background(255,0,255);
  fill(60,11,15);
  for(let x = 0; x<500; x+=50){
    rect(x, height-size, size, size);
    rect(x, 0, size, size);
    rect(x, height/2-size/2, size, size);
}
  //View > Developer > Developer Tools > Console
  console.log("Rendering...")
  Loop();
}
