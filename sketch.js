function setup() {
  // here we use a callback to display the image after loading
  //loadImage("assets/fotoportada.jpg", function(img) {
  //image(img, 0, 0); });
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0, 10, 20);
  //loadImage("assets/laDefense.jpg", function(img) {
  //image(img, 0, 0);
  textSize(windowHeight*0.1);
  textAlign(CENTER);
  fill(0, 102, 153);
  text("Joaquín Ibar S.", windowWidth / 2, windowHeight * 0.3);
  text("https://www.facebook.com/joaquin.ibar", windowWidth / 2, windowHeight * 0.5);
  text("joaquin.ibar@gmail.com", windowWidth / 2, windowHeight * 0.7);
 
}



