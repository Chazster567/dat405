var r = 0
var g = 127
var b = 200
var rand = 10


function setup() {
  frameRate(60);
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(1900,1080);
}


//Rendering function
function draw() {
  background(0,0,0)

  for(let y = 0.5; y<250; y+=random(25)){
    for(let x = 0.5; x<250; x+=random(25)){


      fill(r,g,b);

      var size = random(200)
      ellipse(random(1920), random(1080), size, size);

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
  }
}
