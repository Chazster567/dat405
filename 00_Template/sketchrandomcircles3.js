function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(1900,1080);
  frameRate(1);
  noStroke();
}


//Rendering function
function draw() {
  //background(40);

      fill(random(255),random(255),random(255));

      size = random(20,100)
      rect(mouseX, 0, 5, mouseY);
      rect(0, mouseY, mouseX+5, 5);
}
