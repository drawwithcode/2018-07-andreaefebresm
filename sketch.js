var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
}

function draw() {

  var myImage = capture.loadPixels();



  image(myImage, 0, 0, windowWidth, windowHeight);
  if (mouseX > windowWidth / 3 && mouseX < windowWidth * 2 / 3 && mouseY > windowHeight*2/ 5 && mouseY < windowHeight*3/5) {
  rotate(180);
  }
  rectMode(CENTER);
  noFill();
  strokeWeight(5);
  rect(windowWidth / 2, windowHeight / 2, windowWidth / 3, windowHeight / 5);
}
