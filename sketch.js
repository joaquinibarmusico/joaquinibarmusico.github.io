function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {

  background(0, 10, 20);
  textSize(windowWidth);
  textAlign(CENTER);
  fill(0, 102, 153);
  text("Joaquín Ibar S.", windowWidth / 2, windowHeight * 0.3);
  text("https://www.facebook.com/joaquin.ibar", windowWidth / 2, windowHeight * 0.5);
  text("joaquin.ibar@gmail.com", windowWidth / 2, windowHeight * 0.7);
  // resizeCanvas(windowWidth, windowHeight);
  //windowResized();

}
