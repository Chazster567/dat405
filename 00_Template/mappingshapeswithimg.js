var img;  // Declare variable 'img'.

function setup() {
  createCanvas(1920, 1080);
  img = loadImage("assets/lennon.png");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 480, height/2, img.width/2, img.height/2);
}
