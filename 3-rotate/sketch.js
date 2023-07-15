let squareWidth = 40;
let position;

function setup() {
  createCanvas(400, 400);

  position = createVector(width / 2, height / 2);
}

function draw() {
  background(200);
  fill(255);
  
  // 3. Rotate the square on itself

  drawRepere(0);

  translate(position.x, position.y);

  drawRepere(1);

  rotate(frameCount * 0.01);

  drawRepere(2);

  noFill();

  rect(-squareWidth / 2, -squareWidth / 2, squareWidth);
}

function drawRepere(i) {
  push();
  noStroke();
  fill(255, 0, 0);
  rect(0, 0, 100, 2);
  fill(0, 255, 0);
  rect(0, 0, 2, 100);

  noStroke();
  fill(0);
  textAlign(LEFT, TOP);
  text(i, 10, 10);

  pop();
}