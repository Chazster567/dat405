function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(1920,1080);
  frameRate(20);
  noStroke();
}


//Rendering function
function draw() {
  //background(40);
      customShape()
}

function customShape(){
  var x = random(1920);
  var y = random(1080);
  size = random(100,200);
  size2 = random(100);
  fill(random(255),random(255),random(255));
  ellipse(x,y,size,size);
  fill(random(255),random(255),random(255));
  ellipse(x,y,size2,size2);
}
