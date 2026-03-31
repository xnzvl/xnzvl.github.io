function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("background-holder");

  draw();
}

function draw() {
  background(100, 100, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
