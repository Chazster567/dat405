var img;  // Declare variable 'img'.

function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(1900,1080);
  img = loadImage("assets/john1.png");
  img2 = loadImage("assets/paul1.png");
  img3 = loadImage("assets/george1.png");
  img4 = loadImage("assets/ringo1.png");
  frameRate(100);
  noStroke();
}

//Rendering function
function draw(){

  var m = map(mouseX, 0, width, 0, 255);
  var n = map(mouseY, 0, height, 0, 255);
  var l = map(mouseX, 0, width, 255, 0);
  var i = map(mouseY, 0, height, 255, 0);

    image(img, 300, 20, img.width/2, img.height/2);
    image(img2, 1300, 20, img.width/2, img.height/2);
    image(img3, 320, 610, 252, 382);
    image(img4, 1300, 600, 225, 403);

    fill(m,n,l,200);
    rect(0, 0, width/2, height/2);
    fill(i,m,n,200);
    rect(0, height/2, width/2, height/2);
    fill(n,l,i,200);
    rect(width/2, 0, width/2, height/2);
    fill(l,i,m,200);
    rect(width/2, height/2, width/2, height/2);
}
