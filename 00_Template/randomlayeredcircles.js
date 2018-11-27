var song;

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}

function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  song = loadSound('https://www.youtube.com/watch?v=zk6RbdAbvfs');
  console.log("Initialization: OK")
  createCanvas(1920,1080);
  frameRate(200);
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
  size = random(120,200);
  size2 = random(70,120);
  size3 = random(20,70);
  fill(random(255),random(255),random(255));
  ellipse(x,y,size,size);
  fill(random(255),random(255),random(255));
  ellipse(x,y,size2,size2);
  fill(random(255),random(255),random(255));
  ellipse(x,y,size3,size3);
}
