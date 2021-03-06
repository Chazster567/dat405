  var x;
  var y;
  var size;
  var shapeSelected = 0;
  function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255,160,40);
    frameRate(30);
    x = 0
    y= 0
    size = 150
  }

  function draw(){
    //var y = map(mouseY, 0 , windowHeight,0,windowHeight)
    //var x = map(mouseX, 0 , windowWidth, 0,windowWidth)
    CustomShape(x,y,size,shapeSelected);
  }

  function keyPressed(){
    if (keyCode == 65){
      shapeSelected = 1
    }
    if (keyCode == 83){
     shapeSelected = 2
    }
  if (keyCode == 68){
    shapeSelected = 3
  }
  if (keyCode == 32){
    shapeSelected = 4
  }
  }

  function CustomShape(x,y,size,shapeSelected){
    var randR = random(255);
    var randG = random(255);
    var randB = random(255);
    switch(shapeSelected){
      case 1:
          translate(random(windowWidth),random(windowHeight));
          fill(0);
          rectMode(CENTER);
          rect(x,y,size,size);
          fill(255);
          ellipse(x,y,size,size);
          fill(0)
          rect(x,y,size/2,size/2);
          break;
     case 2:
          translate(random(windowWidth),random(windowHeight));
          for(var r = 0;r<10;r++){

            if (abs(r) % 2 == 0){
              fill(0);
          } else {
              fill(randR,randG,randB);
          }
          polygon(x,y,size - r*10,9)
          }
          break;
     case 3:
          translate(random(windowWidth),random(windowHeight));
          for (var r = 0;r<22.55;r++){
            rectMode(RADIUS);
            fill(randR,randG, randB);
            rotate(360);
            rect(x,y,10,size);
          }
     break;
     case 4:
     fill(0);
     rectMode(RADIUS);
     rect(windowWidth/2-50,windowHeight/2,40,100);
     rect(windowWidth/2+50,windowHeight/2,40,100);
     break;
    }

  }

  function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

  // A function that resizes the canvas depending on the size of the window.
  function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
    background(255,160,40)
  }


//CODE TO HIGHLIGHT SHAPE
// if (shapeSelected == true){
//   strokeWeight(4);
//   stroke(255,23,40);
// } else {
//   noStroke();
// }
