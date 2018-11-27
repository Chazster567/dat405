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

  for(let y = 0.5; y<50; y+=random(25)){
    for(let x = 0.5; x<50; x+=random(25)){

      fill(random(255),random(255),random(255));

      var size = random(200)
      ellipse(random(1920), random(1080), size, size);
    }
  }
}
