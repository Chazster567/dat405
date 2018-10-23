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
  createCanvas(2000,2000);
}

rand=Math.floor(Math.random() * 256);
rand2=Math.floor(Math.random() * 256);
rand3=Math.floor(Math.random() * 256);
//Rendering function
function draw() {
  //Set a background color
  background(rand, rand2, rand3);

  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Rendering...")
  noLoop();
}
function draw() {
  strokeWeight(10);
  line(50,60,500,300)
  line(50,60,50,300)
  line(50,60,500,60)
  line(50,300,500,60)
  line(50,300,500,300)
  line(500,60,500,300)

  strokeWeight(2);

  fill(0,0,255)
  ellipse(50,60,80,100)

  fill(255,0,0)
  ellipse(500,60,80,100)

  fill(0,255,0)
  ellipse(50,300,80,100)

  fill(255,225,0
)
  ellipse(500,300,80,100)
}
