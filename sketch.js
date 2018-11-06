var capture;
var myColors = ['#031926', '#468189', '#77ACA2', '#9DBEBB', '#F4E9CD'];
var bttn;
// var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowHeight * 16 / 9, windowHeight);
  capture.hide();

  bttn = createButton('Do not save your photo');
  bttn.position(windowWidth / 10, windowHeight / 10);
  bttn.mousePressed(savePhoto);



  // mic = new p5.AudioIn();
  // mic.start();


}

function draw() {

  var myImage = capture.loadPixels();
  imageMode(CENTER);

  image(myImage, windowWidth / 2, windowHeight / 2, windowHeight * 16 / 9, windowHeight);

  // eyes
  noFill();
  rect(windowWidth / 2, windowHeight / 3, windowWidth / 3, windowHeight / 7);

  // lips
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight / 2, windowWidth / 3, windowHeight / 7);



  // frame
  noStroke();
  fill(color(myColors[2]));
  rect(0, 0, windowWidth * 5, windowHeight * 11 / 21);
  rect(0, 0, windowWidth * 2 / 3, windowHeight * 5);
  rect(windowWidth, windowHeight, windowWidth * 5, windowHeight * 18 / 21);
  rect(windowWidth, windowHeight, windowWidth * 2 / 3, windowHeight * 5);
  rect(0, windowHeight * 8.8 / 21, windowWidth * 5, windowHeight * 1 / 35);

  // button
  noStroke();
  fill(color(myColors[0]));
  rectMode(CORNER);
  rect(windowWidth / 3 - 2, windowHeight * 4 / 5 - 2, width / 20, height / 15);
  fill(color(myColors[1]));
  rect(windowWidth * 1 / 3, windowHeight * 4 / 5, width / 20, height / 15);



  if (mouseX > windowWidth / 3 && mouseX < windowWidth / 3 + width / 20 && mouseY > windowHeight * 4 / 5 && mouseY < windowHeight * 4 / 5 + height / 15) {
    filter('INVERT')
    textFont('Futura');
    textSize(20);
    fill(color(myColors[3]));
    text('Do not be negative', windowWidth / 3, windowHeight * 4 / 5 + 100);

    textFont('Futura');
    textSize(10);
    fill(color(myColors[0]));
    text('Do not move the mouse away from the rectangle',windowWidth / 3, windowHeight * 4 / 5 + 70);

  } else {
    textFont('Futura');
    textSize(20);
    fill(color(myColors[3]));
    text('Do not be positive', windowWidth / 3, windowHeight * 1 / 5);

    textFont('Futura');
    textSize(10);
    fill(color(myColors[0]));
    text('Do not move the mouse on the rectangle',windowWidth / 3, windowHeight * 4 / 5 + 70);
  }

  // rect( 100, 100, 100)




}

function savePhoto() {
  saveCanvas('slitScan', 'png');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
