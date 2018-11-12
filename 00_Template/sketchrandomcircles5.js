function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(1900,1080);
  frameRate(10);
  noStroke();
}


//Rendering function
function draw() {
  //background(40);

  for(let y = mouseY; y<1080; y){
    for(let x = mouseX; x<1920; x){

      fill(random(255),random(255),random(255));

      rect(mouseX, 0, 5, mouseY);
      rect(0, mouseY, mouseX+5, 5);
    }
  }
}
