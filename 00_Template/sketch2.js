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
  createCanvas(200,200);
}



let size = 20;
//Rendering function
function draw() {
  background(255,0,255);
  for(let y = 0; y<200; y++){
    for(let x = 0; x<200; x++){
      fill(random(220),random(0),random(220));
      rect(x*size, y*size, size, size)
    }
  }
  //View > Developer > Developer Tools > Console
}
