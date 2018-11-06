//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

var r = 0
var g = 127
var b = 200
//Initialization function
function setup() {
  frameRate(200);
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(500,500);
}


let size = 25;
//Rendering function
function draw() {
  background(150,120,90)

  for(let y = 0.5; y<500; y+=2){
    for(let x = 0.5; x<500; x+=2){


      fill(r,g,b);


      rect(x*size, y*size, size, size)

      }


    }
    r=r+20;
    g=g+10;
    b=b+30;
    if (r > 255){
      r=50;
    }
    else if(g>255){
      g=50;
    }
    else if(b>255){
      b=50;
    }
  }
