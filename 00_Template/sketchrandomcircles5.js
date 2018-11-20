var r = 127; // r value variable
var g = 127; // g value variable
var b = 127; // b value variable
var time = 0; // time variable
var button;

function setup() {
  createCanvas(841, 594); // sets canvas to specified dimensions
  noStroke();

  button = createButton('Random Colour');
  button.position(20, 550);
  button.mousePressed(recolour);

  button = createButton('Red');
  button.position(127, 550);
  button.mousePressed(recolourRed);

  button = createButton('Green');
  button.position(173, 550);
  button.mousePressed(recolourGreen);

  button = createButton('Blue');
  button.position(231, 550);
  button.mousePressed(recolourBlue);
}

function draw() {
  background(0, 10); // creates a black background woth low opacity to leave trails

  // make a mesh of ellipses that will structure the waves
  for (var x = 0; x <= width; x = x + 100) {
    for (var y = 0; y <= width; y = y + 10) {
      // starting point of each wave depends on mouse position
      var angleX = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      var angleY = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      var angle = angleX * (x / width) + angleY * (y / height);

      // each particle moves in an oscillation
      var movementX = x + 10 * cos(2 * PI * time + angle);
      var movementY = y + 10 * sin(2 * PI * time + angle);

      var size = 3 // size variable
      fill(r, g, b);
      ellipse(movementX, movementY, size, size); // draw particle
      fill(r, g, b);
      ellipse(movementY, movementX, size, size); // draw particle
    }
  }
  time = time + 0.01; // update time
}

function recolour() {
  r = random(255);
  g = random(255);
  b = random(255);
}

function recolourRed() {
  r = 255;
  g = 0;
  b = 0;
}

function recolourGreen() {
  r = 0;
  g = 255;
  b = 0;
}

function recolourBlue() {
  r = 0;
  g = 0;
  b = 255;
}
